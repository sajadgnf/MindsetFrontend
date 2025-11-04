import { Lock, Sparkles, Users } from "lucide-react";

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

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials