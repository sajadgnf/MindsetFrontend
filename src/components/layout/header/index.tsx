"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";

import Trans from "@/components/common/trans";

import { ARTICLES, COURSES, READING_COURSES, ABOUT, MENTORSHIP } from "@/src/constants/paths";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    {
      label: <Trans>courses_and_workshops</Trans>,
      href: COURSES,
    },
    {
      label: <Trans>reading_courses</Trans>,
      href: READING_COURSES,
    },
    {
      label: <Trans>articles</Trans>,
      href: ARTICLES,
    },
    {
      label: <Trans>mentorship</Trans>,
      href: MENTORSHIP,
    },
    {
      label: <Trans>about</Trans>,
      href: ABOUT,
    },
  ];

  const LinksList = () => {
    return links.map(({ label, href }, index) => (
      <Link
        key={index}
        href={href}
        className="md:text-muted-foreground transition-colors hover:text-foreground block text-center"
      >
        {label}
      </Link>
    ));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center justify-between gap-8 w-full">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-secondary to-primary">
              <span className="text-primary-foreground">A</span>
            </div>
            <span className="hidden sm:inline">Azibom</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <LinksList />
          </div>

          <span />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <div className="container mx-auto space-y-3 px-4 py-4">
            <LinksList />
          </div>
        </div>
      )}
    </header>
  );
}
