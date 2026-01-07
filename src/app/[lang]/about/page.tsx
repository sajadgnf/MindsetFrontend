import Image from "next/image";

import TelegramCta from "@/components/common/telegramCta";

import { getDictionary } from "@/src/dictionaries";

import { langTypes } from "@/src/types/common";

const AboutPage = async ({ params }: { params: Promise<{ lang: langTypes }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="h-dvh container flex md:flex-row flex-col items-center justify-center max-h-[800px] mx-auto gap-20">
      <div>
        <p className="text-base whitespace-pre-line leading-loose mb-8">{dict.about_description}</p>
        <TelegramCta />
      </div>
      <Image src="/about/about-img.jpg" width={300} height={300} alt="about image" className="rounded-full" />
    </main>
  );
};

export default AboutPage;
