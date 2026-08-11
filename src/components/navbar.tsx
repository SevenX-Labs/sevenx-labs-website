"use client";

import CardNav, { CardNavItem } from "./CardNav";

export default function Navbar() {
  const items: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#18181b",
      textColor: "#ffffff",
      links: [
        { label: "About SevenX", href: "/#about", ariaLabel: "About SevenX Labs" },
        { label: "Our Philosophy", href: "/#about", ariaLabel: "Our Engineering Philosophy" },
        { label: "Why Choose Us", href: "/#why-sevenx", ariaLabel: "Why Choose SevenX Labs" },
      ],
    },
    {
      label: "Services",
      bgColor: "#1e1e24",
      textColor: "#ffffff",
      links: [
        { label: "Web & Mobile Dev", href: "/#services", ariaLabel: "Web and Mobile Development" },
        { label: "AI & Custom Software", href: "/#services", ariaLabel: "AI and Custom Software Engineering" },
        { label: "Cloud & Architecture", href: "/#services", ariaLabel: "Cloud and Infrastructure Architecture" },
      ],
    },
    {
      label: "How We Work",
      bgColor: "#181f28",
      textColor: "#ffffff",
      links: [
        { label: "Discovery & Strategy", href: "/#how-we-work", ariaLabel: "Discovery and Strategy Process" },
        { label: "Sprint & Engineering", href: "/#how-we-work", ariaLabel: "Sprint and Agile Engineering" },
        { label: "Launch & Scale", href: "/#how-we-work", ariaLabel: "Launch, QA and Scaling" },
      ],
    },
    {
      label: "Portfolio & Contact",
      bgColor: "#231c2b",
      textColor: "#ffffff",
      links: [
        { label: "Featured Work", href: "/portfolio", ariaLabel: "Portfolio Case Studies" },
        { label: "Client Reviews", href: "/#testimonials", ariaLabel: "Client Reviews and Ratings" },
        { label: "Start a Project", href: "/#contact", ariaLabel: "Contact SevenX Labs" },
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
      ctaHref="/#contact"
      ease="power3.out"
    />
  );
}


