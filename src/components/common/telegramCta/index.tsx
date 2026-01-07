import Image from "next/image";

import { Button } from "@/components/ui/button";
import { getDictionary } from "@/src/dictionaries";
import { getLang } from "@/lib/i18n";

const TelegramCta = async ({ children }: { children?: React.ReactNode }) => {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <a href="https://t.me/azibom" target="_blank">
      <Button size="lg" variant="outline" className="mb-8 rounded-full backdrop-blur-sm cursor-pointer h-fit">
        <Image src="/common/telegram.svg" width={22} height={22} alt="telegram logo" />
        <span className="whitespace-pre-line py-2 inline-block text-start">{children || dict.hero_telegram_cta}</span>
      </Button>
    </a>
  );
};

export default TelegramCta;
