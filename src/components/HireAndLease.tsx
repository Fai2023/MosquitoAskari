import { CheckCircle2, Cog, Flame, ShieldCheck, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HireAndLease = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white" id="hire-lease">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Flexible Ownership
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you prefer an all-inclusive monthly service or a one-time purchase,
            we have an option that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lease Option */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-elevated border-2 border-primary/20 flex flex-col">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              Most Popular
            </div>

            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Care Free Leasing
              </h3>
              <p className="text-muted-foreground">
                Complete peace of mind. We handle everything.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <Flame className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="font-semibold text-foreground">Monthly Gas Refills</span> delivered & installed</span>
              </div>
              <div className="flex items-start gap-3">
                <Cog className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground"><span className="font-semibold text-foreground">Full Maintenance</span> & cleaning included</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Attractant replenishment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Lifetime Warranty (while leasing)</span>
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Pricing Options</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-medium">12 Month Contract</span>
                  <span className="font-bold text-primary text-lg">TZS 300,000 <span className="text-xs font-normal text-muted-foreground">+ VAT</span> <span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">6 Month Contract</span>
                  <span className="font-bold text-primary text-lg">TZS 375,000 <span className="text-xs font-normal text-muted-foreground">+ VAT</span> <span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              className="w-full font-semibold text-base bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => navigate("/expression-of-interest")}
            >
              Inquire About Leasing
            </Button>
          </div>

          {/* Buy Option */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-border flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <Tag className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Purchase Outright
              </h3>
              <p className="text-muted-foreground">
                Own the technology. Manage at your own pace.
              </p>
            </div>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Ownership of M3000 Machine</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">1 Year Warranty</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Free Installation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 opacity-0 shrink-0" />
                <span className="text-muted-foreground/0">Spacer</span>
              </div>
              <div className="p-3 bg-red-50 text-red-800 text-sm rounded-lg mt-2">
                <span className="font-bold">Note:</span> Gas and attractant refills are purchased separately as needed.
              </div>
            </div>

            <div className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Starting From</p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-bold text-primary text-3xl">TZS 4,250,000</span>
                <span className="text-sm font-normal text-muted-foreground">+ VAT</span>
                <span className="text-muted-foreground">one-time</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full font-semibold text-base hover:bg-primary hover:text-primary-foreground"
              onClick={scrollToContact}
            >
              Contact to Buy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireAndLease;
