import Image from "next/image";

import { ArrowRight, GitBranch } from "lucide-react";

import FloatSymbols from "./floatSymbols";
import { Button } from "@/components/ui/button";

import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

export default async function Hero() {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <section className="relative border-b border-border">
      <div className="absolute inset-0 z-0 h-full w-full top-0 bottom-0 left-0 right-0">
        <Image fill src="/landing/hero-bg.svg" alt="Mathematical formulas background" className="object-cover" />
      </div>
      <div className="absolute left-[45%] top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute left-[55%] top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] blur-3xl" />
      <FloatSymbols />

      <div className="container mx-auto max-w-4xl text-center px-4 py-20 sm:px-6 sm:py-36 lg:px-8">
        {/* Headline */}
        <h1 className="mb-6 text-6xl font-medium">{dict.hero_headline}</h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground text-2xl">{dict.hero_description}</p>

        {/* CTA Buttons */}
        <Button
          variant="ghost"
          className="mb-8 rounded-full border border-secondary/50 backdrop-blur-sm cursor-pointer
            hover:bg-linear-to-r hover:from-secondary/10 hover:via-purple-400/20 hover:to-secondary/10 transition-all animate-gradient
            "
        >
          <ArrowRight />
          <span className="text-sm">{dict.register_for_course}</span>
          <GitBranch className="text-secondary" />
        </Button>
        {/* <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-4">
            <a href="https://t.me/azibom" target="_blank">
              <Button size="lg" variant="outline" className="mb-8 rounded-full backdrop-blur-sm cursor-pointer">
                {dict.hero_telegram_cta}
                <Image src="/landing/telegram-logo.svg" width={22} height={22} alt="telegram logo" />
              </Button>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
