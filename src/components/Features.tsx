import { Shield, Leaf, Zap, Home, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "24/7 Protection",
    description:
      "Continuous mosquito capture day and night, protecting your family around the clock.",
  },
  {
    icon: Leaf,
    title: "Chemical-Free",
    description:
      "No harmful sprays or chemicals. Safe for children, pets, and the environment.",
  },
  {
    icon: Zap,
    title: "Advanced Technology",
    description:
      "Patented CO2 technology attracts and captures mosquitoes within a 1-acre radius.",
  },
  {
    icon: Home,
    title: "Easy Setup",
    description:
      "Simple installation with our expert team. Start protecting your home within hours.",
  },
  {
    icon: Heart,
    title: "Family Safe",
    description:
      "Designed with families in mind. No electrical hazards or harmful emissions.",
  },
  {
    icon: Award,
    title: "Fight Malaria",
    description:
      "Reduce malaria risk by eliminating mosquitoes before they can bite.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-cream" id="features">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why MosquitoAskari
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            The Best Mosquito{" "}
            <span className="text-gradient">Protection in Tanzania</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The most effective mosquito control solution designed specifically
            for East African conditions. Protect what matters most.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
