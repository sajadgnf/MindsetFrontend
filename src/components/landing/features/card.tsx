import Link from "next/link";
import Image from "next/image";

import { twMerge } from "tailwind-merge";
import { ArrowLeft, LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { getLang } from "@/lib/i18n";
import { getDictionary } from "@/src/dictionaries";

const FeatureCard = async ({
  Icon,
  href,
  image,
  title,
  index,
  iconColor,
  description,
}: {
  href: string;
  image: string;
  title: string;
  index: number;
  Icon: LucideIcon;
  iconColor: string;
  description: string;
}) => {
  const lang = getLang();
  const dict = await getDictionary(lang);

  return (
    <div
      className={twMerge("flex flex-col items-center gap-8 md:flex-row", index % 2 === 0 ? " md:flex-row-reverse" : "")}
    >
      {/* Content */}
      <div className="flex-1 space-y-4 relative z-10">
        <div className="flex items-center justify-start gap-2 md:flex-col md:items-start">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 transition-transform duration-300 hover:scale-105 hover:rotate-[5deg]">
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <p className="text-muted-foreground text-lg leading-7">{description}</p>
        <Link href={href}>
          <Button variant="ghost">
            {dict.more_details} <ArrowLeft />
          </Button>
        </Link>
      </div>

      {/* Image */}
      <div
        className="flex-1 transition-transform duration-300 hover:scale-[1.02] border border-white/10 overflow-hidden rounded-lg relative w-full h-20 md:w-96 h-80 flex justify-center items-center 
      shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]"
      >
        <div className="absolute right-0 left-0 top-0 bottom-0 w-full h-full z-0 opacity-30 p-2" />
        <Image
          src={image}
          alt={title}
          width={390}
          height={320}
          className="object-cover rounded-lg w-full h-80 md:w-[95%] md:h-[90%] z-10"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
