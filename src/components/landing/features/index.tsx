import { GitMerge, Shield, Zap } from "lucide-react";
import FeatureCard from "./card";

const features = [
  {
    Icon: GitMerge,
    title: "Collaborative coding",
    description: "Work together seamlessly with powerful version control and code review tools.",
    image: "/landing/background.webp",
    iconColor: "text-purple-400",
  },
  {
    Icon: Zap,
    title: "Lightning-fast workflows",
    description: "Automate your build, test, and deployment processes with integrated CI/CD.",
    image: "/landing/background.webp",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    Icon: Shield,
    title: "Security first",
    description: "Keep your code secure with advanced security features and automated vulnerability detection.",
    image: "/landing/background.webp",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
];

export default function Features() {
  return (
    <section className="border-b border-border py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-20">
        {features.map((feature, index) => (
          <FeatureCard {...feature} index={index} key={index} />
        ))}
      </div>
    </section>
  );
}
