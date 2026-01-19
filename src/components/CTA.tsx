import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-cream" id="contact">
      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-3xl overflow-hidden p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Protect Your Family?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and find out how
              MosquitoAskari can make your home mosquito-free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                variant="hero"
                size="xl"
                className="animate-pulse-glow bg-[#f5a623] text-black hover:bg-[#e69512] border-none"
                onClick={() => navigate("/expression-of-interest")}
              >
                Expression of Interest
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Order Now
              </Button>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="tel:+255763001100"
                className="flex items-center justify-center gap-3 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 rounded-2xl p-4 hover:bg-primary-foreground/25 transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">
                  +255 763 001 100
                </span>
              </a>
              <a
                href="https://wa.me/255763001100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 rounded-2xl p-4 hover:bg-primary-foreground/25 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">
                  WhatsApp
                </span>
              </a>
              <a
                href="mailto:info@mosquitoaskari.com"
                className="flex items-center justify-center gap-3 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 rounded-2xl p-4 hover:bg-primary-foreground/25 transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground font-medium">
                  info@mosquitoaskari.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
