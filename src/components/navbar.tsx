"use client";

import CardNav, { CardNavItem } from "./CardNav";

export default function Navbar() {
  const items: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#18181b",
      textColor: "#ffffff",
      links: [
        { label: "About SevenX", href: "/about", ariaLabel: "About SevenX Labs Studio" },
        { label: "Our Philosophy", href: "/about#philosophy", ariaLabel: "Our Engineering Philosophy" },
        { label: "Why Choose Us", href: "/about#why-sevenx", ariaLabel: "Why Choose SevenX Labs" },
      ],
    },
    {
      label: "Services",
      bgColor: "#1e1e24",
      textColor: "#ffffff",
      links: [
        { label: "Web Development", href: "/services/web-development", ariaLabel: "Web Development Services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development", ariaLabel: "Mobile App Development" },
        { label: "AI Development", href: "/services/ai-development", ariaLabel: "AI Development Services" },
        { label: "Custom Software", href: "/services/custom-software-development", ariaLabel: "Custom Software Development" },
        { label: "UI/UX Design", href: "/services/ui-ux-design", ariaLabel: "UI/UX Design Services" },
        { label: "Cloud & DevOps", href: "/services/cloud-devops", ariaLabel: "Cloud and DevOps Services" },
        { label: "All Services", href: "/services", ariaLabel: "View All Engineering Services" },
      ],
    },
    {
      label: "Solutions",
      bgColor: "#181f28",
      textColor: "#ffffff",
      links: [
        { label: "SaaS Development", href: "/solutions/saas-development", ariaLabel: "SaaS Product Engineering" },
        { label: "MVP Development", href: "/solutions/mvp-development", ariaLabel: "Rapid MVP Development" },
        { label: "AI Automation", href: "/solutions/ai-automation", ariaLabel: "Enterprise AI Automation" },
        { label: "Digital Transformation", href: "/solutions/digital-transformation", ariaLabel: "Digital Transformation Solutions" },
        { label: "All Solutions", href: "/solutions", ariaLabel: "View All Engineering Solutions" },
      ],
    },
    {
      label: "Work",
      bgColor: "#231c2b",
      textColor: "#ffffff",
      links: [
        { label: "Selected Case Studies", href: "/portfolio", ariaLabel: "Portfolio Case Studies" },
        { label: "Contact Studio", href: "/contact", ariaLabel: "Contact SevenX Labs" },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="#ffffff"
      menuColor="#000000"
      buttonBgColor="#111111"
      buttonTextColor="#ffffff"
      ctaText="Contact Us"
      ctaHref="/contact"
      ease="power3.out"
    />
  );
}
