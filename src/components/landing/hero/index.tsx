import { ArrowRight, GitBranch } from "lucide-react";

import FloatSymbols from "./floatSymbols";
import { Button } from "@/components/ui/button";
import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";
import Image from "next/image";

export default async function Hero() {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <FloatSymbols />

      <div className="container mx-auto max-w-4xl text-center px-4 py-20 sm:px-6 sm:py-36 lg:px-8">
        {/* Badge */}
        <Button
          variant="ghost"
          className="mb-8 rounded-full border border-secondary/50 backdrop-blur-sm cursor-pointer
            hover:bg-linear-to-r hover:from-secondary/10 hover:via-purple-400/20 hover:to-secondary/10 transition-all animate-gradient
            "
        >
          <GitBranch className="text-secondary" />
          <span className="text-sm">{dict.register_for_course}</span>
          <ArrowRight />
        </Button>

        {/* Headline */}
        <h1 className="mb-6 text-3xl font-medium">{dict.hero_headline}</h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">{dict.hero_description}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-4">
            <a href="https://t.me/azibom" target="_blank">
              <Button size="lg" variant="outline" className="mb-8 rounded-full backdrop-blur-sm cursor-pointer">
                {dict.hero_telegram_cta}
                <Image src="/landing/telegram-logo.svg" width={22} height={22} alt="telegram logo" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
