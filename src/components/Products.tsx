import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Askari Pro Trap",
    image: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/co2-mosquito-trap-pm-mm3000%20(1).jpg",
    description: "The Askari Pro Trap M3000 is a chemical-free outdoor mosquito trap powered by the same gas used for BBQs. It converts gas into CO₂ and uses heat and light to mimic a human which naturally attracts and captures mosquitoes. Scientifically tested and backed by 18 years of research, the M3000 effectively reduces mosquito populations, keeping your outdoor spaces comfortable and bite-free.",
    popular: true,
    features: [
      "Covers up to 1 acre",
      "24/7 continuous operation",
      "Propane-powered",
      "Weather resistant",
      "2-year warranty",
      "Free installation",
    ],
  },
  {
    id: 2,
    name: "Attractant Refill Pack",
    subtitle: "3-Month Supply",
    image: "https://ik.imagekit.io/8jn9lgbbcw/2_M3000/M3000/co2-mosquito-trap-pm-mm3000%20(2).jpg",
    description: "Maximize your catch rates with our scientifically formulated attractant. Designed to mimic human skin scents, significantly increasing the trap's effectiveness against aggressive mosquito species.",
    popular: false,
    features: [
      "3-month supply",
      "Enhanced CO2 formula",
      "Easy installation",
      "Compatible with all traps",
      "Eco-friendly",
    ],
  },
];

const Products = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-cream" id="products">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium mosquito traps and accessories, available throughout
            Tanzania with free delivery to major cities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 ${product.popular ? "ring-2 ring-accent" : ""
                }`}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Best Seller
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-8">
                <p className="text-accent font-medium text-sm mb-1">
                  {product.subtitle}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {product.name}
                </h3>

                {product.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={product.popular ? "hero" : "default"}
                  size="lg"
                  className="w-full font-semibold text-base"
                  onClick={scrollToContact}
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">
              Free Delivery
            </span>{" "}
            to Dar es Salaam, Arusha, Mwanza, Dodoma & Zanzibar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
