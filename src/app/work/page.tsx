import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Work | SevenX Labs",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WorkPage() {
  redirect("/portfolio");
}
