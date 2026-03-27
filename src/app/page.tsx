import { HeroSection } from "@/components/hero-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "lucide-react";

const benefitItems = [
  {
    value: "certification",
    trigger: "German certificate",
    content: "You will recieve a german certificate",
  },
  {
    value: "scholarship",
    trigger: "Scholarship",
    content: "Job center will pay for your education",
  },
  {
    value: "remote",
    trigger: "Remote",
    content: "You can study from any place",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <HeroSection />
      <section>
        
       
          <h2 className="text-center text-4xl mb-3">Benifits</h2>

          <Accordion
            type="single"
            collapsible
            className="max-w-lg rounded-lg border p-3 min-w-2xl"
            defaultValue="billing"
          >
            {benefitItems.map((item) => (
              <AccordionItem value={item.value} key={item.value}>
                <AccordionTrigger className="text-1xl">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        
      </section>
    </div>
  );
}
