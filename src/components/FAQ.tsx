import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does MosquitoAskari work against all mosquitoes?",
    answer:
      "Yes! Our traps are effective against all mosquito species found in Tanzania, including Anopheles (malaria carriers), Aedes (dengue/zika carriers), and Culex mosquitoes. The CO2 and attractant formula targets female mosquitoes specifically - the ones that bite.",
  },
  {
    question: "How long until I see results?",
    answer:
      "You'll notice a reduction in mosquito activity within the first 2 weeks. For complete population collapse and maximum protection, allow 4-6 weeks of continuous operation. This breaks the breeding cycle entirely.",
  },
  {
    question: "Does it need electricity?",
    answer:
      "The Askari Pro trap requires a standard electrical outlet (220V) and uses propane gas (available at local hardware stores). Power consumption is minimal - about the same as a light bulb. We also offer solar-powered options for off-grid locations.",
  },
  {
    question: "Is it safe for children and pets?",
    answer:
      "Absolutely! Unlike chemical sprays and coils, our traps use no toxic substances. The propane is converted safely into CO2 (the same gas we exhale). Children and pets can play safely in the yard while the trap operates.",
  },
  {
    question: "Which areas in Tanzania do you deliver to?",
    answer:
      "We offer FREE delivery to Dar es Salaam, Arusha, Mwanza, Dodoma, and Zanzibar. For other regions, we charge a small shipping fee. Installation is included in all major cities, and we provide video guides for self-installation in remote areas.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes! All Askari Pro traps come with a 2-year manufacturer warranty covering defects and malfunctions. We also offer an extended 5-year warranty package. Our customer support team is available via WhatsApp for any questions.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-cream" id="faq">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Got Questions?
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about MosquitoAskari products and
            services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-none shadow-soft px-6 data-[state=open]:shadow-elevated transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="text-left font-display text-lg font-semibold text-foreground">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
