import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FeatureCard = ({
  Icon,
  image,
  title,
  index,
  gradient,
  iconColor,
  description,
}: {
  image: string;
  title: string;
  index: number;
  Icon: LucideIcon;
  gradient?: string;
  iconColor: string;
  description: string;
}) => {
  return (
    <div
      className={twMerge(
        "animate-fade-in-up flex flex-col items-center gap-8 lg:flex-row",
        index % 2 === 0 ? "" : "lg:flex-row-reverse",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br ${gradient} backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:rotate-[5deg]`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>{title}</h2>
        <p className="text-muted-foreground" style={{ fontSize: "1.125rem", lineHeight: "1.75" }}>
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
        <div className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#161b22] p-1 backdrop-blur-sm`}>
          {/* Subtle gradient behind image */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />

          <Image width={180} height={80} src={image} alt={title} className="w-full h-64 object-cover opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
