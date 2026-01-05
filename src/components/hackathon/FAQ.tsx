import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Vision Hack 2026?",
    answer:
      "Vision Hack 2026 is open to engineering students from the 50+ participating colleges across Kerala. Teams of 4 members can register through their respective Campus Leads and Campus Enablers.",
  },
  {
    question: "How does the multi-stage selection process work?",
    answer:
      "The event has three stages: The Qualifier (internal college hackathons, Jan 5-18), The Gauntlet (online semifinal with PPT presentations), and The Showdown (15-hour offline finale at GEC Thrissur, Feb 13-14). Each college nominates 5 teams, resulting in 250 teams, from which 25 elite teams advance to the finale.",
  },
  {
    question: "What happens during The Qualifier stage?",
    answer:
      "Each participating college conducts internal hackathons or PPT evaluations managed by Campus Leads and Campus Enablers. The top 5 teams from each college are nominated to advance to The Gauntlet stage.",
  },
  {
    question: "What is The Gauntlet?",
    answer:
      "The Gauntlet is the online semifinal where nominated teams present PPT solutions to committee-provided problem statements. Globally novel ideas are actively encouraged. Results are announced on February 2, 2026.",
  },
  {
    question: "What happens at The Showdown?",
    answer:
      "The Showdown is a 15-hour offline hackathon at GEC Thrissur on February 13-14, 2026. The 25 finalist teams build fully functional apps/websites based on on-the-spot themes, judged by expert panels.",
  },
  {
    question: "How many team members are required?",
    answer:
      "Teams typically consist of 4 members. All team members must be from the same participating college. The team leader is responsible for registrations and submissions.",
  },
  {
    question: "What kind of projects can we build?",
    answer:
      "During The Showdown, themes are revealed on-the-spot. Teams are expected to build fully functional web or mobile applications. For The Gauntlet, problem statements are provided by the committee, and globally novel ideas are encouraged.",
  },
];

export function FAQ() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Background cutout shapes */}
      <motion.div
        style={{ rotate: backgroundRotate }}
        className="absolute inset-0"
      >
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-[#0EA5E9]/5 rounded-[5rem]" />
          <div className="absolute inset-10 bg-[#0D0D12] rounded-[4rem]" />
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[4rem]" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[3rem]" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Got <span className="text-[#0EA5E9]">Questions?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#A0A0B0]"
          >
            Everything you need to know about Vision Hack 2026
          </motion.p>
        </div>

        {/* FAQ Accordion with cutout style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative border-none rounded-2xl bg-[#1A1A24] overflow-hidden group"
              >
                {/* Accent on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#9B87F5] opacity-0 group-hover:opacity-100 transition-opacity" />

                <AccordionTrigger className="text-left text-white hover:text-[#9B87F5] px-6 py-6 font-bold [&[data-state=open]>svg]:rotate-180 [&>svg]:text-[#9B87F5]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#A0A0B0] px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#A0A0B0] mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#0EA5E9] hover:text-[#9B87F5] transition-colors font-bold"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
