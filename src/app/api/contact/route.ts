import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory IP rate limiter: Max 5 requests per 5 minutes per IP
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userTimestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within the 5-minute sliding window
  const validTimestamps = userTimestamps.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true; // Rate limit exceeded
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req: Request) {
  try {
    // Extract IP address from request headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // Enforce 5 requests per 5 minutes rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait 5 minutes before sending another inquiry." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, projectDetails, projectType, budget } = body;

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, projectDetails)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "sevenxlabs07@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "info@sevenxlabs.in";

    if (!apiKey) {
      console.warn("RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        { error: "Email service is currently offline (RESEND_API_KEY not configured)." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const resendResult = await resend.emails.send({
      from: `SevenX Labs <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry: ${name} [${projectType || "General"}]`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0D0D11; color: #FFFFFF; border-radius: 16px;">
          <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 24px;">
            <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.2em; color: #3B82F6;">New Contact Form Inquiry</span>
            <h1 style="font-size: 24px; font-weight: 800; text-transform: uppercase; margin: 8px 0 0 0; color: #FFFFFF;">SevenX Labs Inquiry</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 13px; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 15px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Work Email:</td>
              <td style="padding: 8px 0; color: #3B82F6; font-size: 15px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Project Category:</td>
              <td style="padding: 8px 0; color: #FFFFFF; font-size: 14px;">${projectType || "Unspecified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9CA3AF; font-size: 13px;">Estimated Budget:</td>
              <td style="padding: 8px 0; color: #10B981; font-size: 14px; font-weight: 600;">${budget || "To be discussed"}</td>
            </tr>
          </table>

          <div style="background-color: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
            <span style="font-size: 11px; font-family: monospace; text-transform: uppercase; color: #9CA3AF; display: block; margin-bottom: 8px;">Project Scope Details</span>
            <p style="font-size: 14px; line-height: 1.6; color: #E5E7EB; margin: 0; white-space: pre-wrap;">${projectDetails}</p>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 24px; padding-top: 16px; font-size: 12px; color: #6B7280; font-family: monospace;">
            Sent automatically via SevenX Labs web inquiry route.
          </div>
        </div>
      `,
    });

    console.log("Resend API response debug:", resendResult);

    if (resendResult.error) {
      return NextResponse.json(
        { error: resendResult.error.message || "Resend API returned error", details: resendResult.error },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: resendResult.data?.id, debug: resendResult });
  } catch (error: any) {
    console.error("Resend API route error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email inquiry." },
      { status: 500 }
    );
  }
}
