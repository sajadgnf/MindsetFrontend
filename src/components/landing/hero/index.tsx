import Link from "next/link";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";

import FloatSymbols from "./floatSymbols";
import { Button } from "@/components/ui/button";

import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

import { COURSES } from "@/src/constants/paths";

export default async function Hero() {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <section className="relative border-b border-border h-dvh max-h-[800px] flex items-center justify-center">
      <div className="absolute inset-0 z-0 h-full w-full -top-20 bottom-0 left-0 right-0">
        <Image fill src="/landing/hero-bg.svg" alt="Hero background" className="object-fill opacity-80" />
      </div>
      <div className="absolute left-[50%] top-40 h-[50%] w-[50%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#2B7FFF33_0%,transparent_60%)] blur-[128px]" />
      <div className="absolute left-[50%] -top-20 h-[50%] w-[50%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#AD46FF33_0%,transparent_60%)] blur-[128px]" />
      {/* <FloatSymbols /> */}

      <div className="container mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <h1 className="mb-10 text-6xl font-medium">{dict.hero_headline}</h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-muted-foreground text-2xl">{dict.hero_description}</p>

        {/* CTA Buttons */}

        <Link href={COURSES}>
          <Button
            variant="ghost"
            className="mb-8 w-44 rounded-full border border-secondary/50 backdrop-blur-sm cursor-pointer
            hover:bg-linear-to-r hover:from-secondary/10 hover:via-purple-400/20 hover:to-secondary/10 transition-all animate-gradient
            "
          >
            <span className="text-sm">{dict.see_courses}</span>
            <ArrowLeft />
          </Button>
        </Link>
      </div>
    </section>
  );
}
