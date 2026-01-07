"use client";

import Image from "next/image";

const socialLinks = [
  { src: "/common/virgool.svg", href: "https://virgool.io/@azibom", label: "Link" },
  { src: "/common/twitter.svg", href: "https://twitter.com/theAzibom", label: "Twitter" },
  { src: "/common/instagram.svg", href: "https://instagram.com/azibom", label: "Instagram" },
  { src: "/common/telegram.svg", href: "https://t.me/azibom", label: "Telegram" },
  { src: "/common/devto.svg", href: "https://dev.to/azibom", label: "Link" },
  { src: "/common/stackoverflow.svg", href: "https://stackoverflow.com/users/13060981/azibom", label: "Stack" },
  { src: "/common/linkedin.svg", href: "https://linkedin.com/in/azibom", label: "LinkedIn" },
  { src: "/common/github.svg", href: "https://github.com/azibom", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex justify-center items-center gap-6 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-foreground transition-opacity hover:opacity-70"
            aria-label={social.label}
          >
            <Image
              width={28}
              height={28}
              src={social.src}
              alt={social.label}
              className="dark:brightness-0 dark:invert"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
