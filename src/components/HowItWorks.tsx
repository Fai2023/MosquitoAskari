import { Wind, Target, Trash2, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Wind,
    step: "01",
    title: "Generates CO2",
    description:
      "The trap converts propane into CO2, mimicking human breath to attract mosquitoes from up to 1 acre away.",
  },
  {
    icon: Target,
    step: "02",
    title: "Attracts Mosquitoes",
    description:
      "Mosquitoes are drawn to the CO2 and special attractant, believing they've found a host to feed on.",
  },
  {
    icon: Trash2,
    step: "03",
    title: "Captures Them",
    description:
      "A powerful vacuum pulls mosquitoes into a net where they dehydrate within 24 hours.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Complete Protection",
    description:
      "Within 4-6 weeks, the mosquito population in your area collapses, breaking the breeding cycle.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-hero" id="how-it-works">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Simple Technology, Powerful Results
          </h2>
          <p className="text-white/90 text-lg">
            Our traps use proven science to eliminate mosquitoes without
            chemicals. Here's how it works:
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-foreground/20" />
              )}

              <div className="relative bg-green-dark/40 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 text-center hover:bg-green-dark/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center text-base font-bold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/85 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Happy Families" },
            { value: "95%", label: "Mosquito Reduction" },
            { value: "1 Acre", label: "Coverage Area" },
            { value: "24/7", label: "Protection" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
