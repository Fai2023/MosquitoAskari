import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "Since installing the Askari Pro Trap, our garden has been completely mosquito-free. We can finally enjoy our evenings outside without worrying about bites or malaria.",
        name: "John K.",
        location: "Dar es Salaam",
        initials: "JK",
    },
    {
        text: "As a mother of three, my children's safety is my priority. MosquitoAskari gave me peace of mind knowing my kids are protected from malaria naturally.",
        name: "Sarah M.",
        location: "Arusha",
        initials: "SM",
    },
    {
        text: "We installed these at our hotel in Zanzibar and the guest feedback has been incredible. No more complaints about mosquitoes during dinner.",
        name: "Hotel Manager",
        location: "Zanzibar",
        initials: "HM",
    },
    {
        text: "Excellent service and the maintenance plan is a lifesaver. They come every month to change the gas and I don't have to lift a finger.",
        name: "David L.",
        location: "Masaki",
        initials: "DL",
    },
    {
        text: "Worth every shilling. The initial cost seemed high, but the protection it offers is unmatched by any spray or coil we've used before.",
        name: "Grace P.",
        location: "Mikocheni",
        initials: "GP",
    },
    {
        text: "The installation team was professional and the trap works exactly as advertised. Great investment for our family.",
        name: "Michael R.",
        location: "Kinondoni",
        initials: "MR",
    },
    {
        text: "We've tried everything for our garden restaurant, but this is the only solution that practically eliminated mosquitoes.",
        name: "Cafe Owner",
        location: "Oyster Bay",
        initials: "CO",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-cream overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Success Stories
                </span>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                    Loved by Families <span className="text-gradient hover:text-primary transition-colors duration-300">Across Tanzania</span>
                </h2>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                    <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 py-8">
                        {testimonials.map((testimonial, i) => (
                            <TestimonialCard key={i} {...testimonial} />
                        ))}
                    </div>
                    <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 py-8">
                        {testimonials.map((testimonial, i) => (
                            <TestimonialCard key={`dup-${i}`} {...testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({
    text,
    name,
    location,
    initials,
}: {
    text: string;
    name: string;
    location: string;
    initials: string;
}) => {
    return (
        <div className="relative w-[250px] xs:w-[300px] md:w-[350px] shrink-0 rounded-2xl border border-border bg-card px-8 py-8 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
            <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="font-display text-xl font-bold text-primary">
                    {initials}
                </span>
            </div>
            <blockquote className="mb-6 text-muted-foreground leading-relaxed">
                "{text}"
            </blockquote>
            <div className="flex items-center gap-2 border-t border-border pt-4">
                <div>
                    <cite className="font-semibold text-foreground not-italic">
                        {name}
                    </cite>
                    <p className="text-sm text-muted-foreground">{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
