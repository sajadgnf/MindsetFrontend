import { Shield, Zap, Users, Lock, GitMerge, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: GitMerge,
    title: "Collaborative coding",
    description: "Work together seamlessly with powerful version control and code review tools.",
    image: "/landing/background.webp",
    iconColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Lightning-fast workflows",
    description: "Automate your build, test, and deployment processes with integrated CI/CD.",
    image: "/landing/background.webp",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Security first",
    description: "Keep your code secure with advanced security features and automated vulnerability detection.",
    image: "/landing/background.webp",
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Team management",
    description: "Organize your teams and manage permissions with ease.",
    gradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
  },
  {
    icon: Lock,
    title: "Private repositories",
    description: "Keep your proprietary code secure with unlimited private repos.",
    gradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Sparkles,
    title: "AI-powered insights",
    description: "Get intelligent code suggestions and automated code reviews.",
    gradient: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
];

export function Features() {
  return (
    <>
      {/* Main Features */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={feature.title}
                  className={`animate-fade-in-up flex flex-col items-center gap-8 lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:rotate-[5deg]`}
                    >
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>{feature.title}</h2>
                    <p className="text-muted-foreground" style={{ fontSize: "1.125rem", lineHeight: "1.75" }}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 transition-transform duration-300 hover:scale-[1.02]">
                    <div
                      className={`relative overflow-hidden rounded-lg border border-white/10 bg-[#161b22] p-1 backdrop-blur-sm`}
                    >
                      {/* Subtle gradient behind image */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />

                      <Image
                        width={180}
                        height={80}
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-64 object-cover opacity-90"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="relative border-b border-border py-20">
        {/* Background glow effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 animate-fade-in-up text-center">
              <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Everything you need to ship faster</h2>
              <p className="mt-4 text-muted-foreground" style={{ fontSize: "1.125rem" }}>
                All the tools and features you need in one platform
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative overflow-hidden rounded-lg border border-white/10 bg-[#161b22] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-lg animate-fade-in-up`}
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    {/* Subtle gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                    />

                    {/* Content */}
                    <div className="relative">
                      <div
                        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-[600ms] group-hover:rotate-360`}
                      >
                        <Icon className={`h-5 w-5 ${feature.iconColor}`} />
                      </div>
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>

                    {/* Hover glow effect */}
                    <div
                      className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-2xl transition-opacity group-hover:opacity-50`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
