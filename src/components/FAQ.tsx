import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


interface FAQProps {
  faqs: { q: string; a: string }[];
  title?: string;
}

export const FAQ = ({ faqs, title = "Frequently Asked Questions" }: FAQProps) => (
  <section className="py-12">
    <div className="container-pro">
      <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
