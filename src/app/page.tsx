import { HeroSection } from "@/components/hero-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans dark:bg-black">
      <HeroSection />

      <section className="py-6 px-6 flex flex-col items-center justify-center">
        <div className="w-12 h-1.5 bg-blue-600 rounded-full mb-4 shadow-sm" />

        <h2 className="text-center text-2xl md:text-6xl font-black tracking-tighter text-slate-500 mb-4">
          Benefits
        </h2>

        <p className="text-slate-800 text-sm mb-16 text-center max-w-md font-medium">
          Everything you need to succeed in your professional journey.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 p-8 md:p-10"
          defaultValue="belling"
        >
          {benefitItems.map((item) => (
            <AccordionItem
              value={item.value}
              key={item.value}
              className="border-b border-neutral-100 last:border-0"
            >
              <AccordionTrigger className="text-xl md:text-2xl font-bold text-slate-500 hover:text-blue-600 hover:no-underline transition-all py-7">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg md:text-xl leading-relaxed pb-7">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
