import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Users, Calendar, MapPin, ArrowRight } from "lucide-react";

const registrationSteps = [
  {
    step: "01",
    title: "Form Your Team",
    description: "Gather 4 members from your college and choose a team leader.",
    color: "#9B87F5",
  },
  {
    step: "02",
    title: "Contact Campus Lead",
    description: "Reach out to your Campus Lead or Campus Enabler to register.",
    color: "#0EA5E9",
  },
  {
    step: "03",
    title: "Participate in Qualifier",
    description:
      "Compete in your college's internal hackathon or PPT evaluation.",
    color: "#D946EF",
  },
  {
    step: "04",
    title: "Get Nominated",
    description: "Top 5 teams from each college advance to The Gauntlet.",
    color: "#9B87F5",
  },
];

const eventDetails = [
  {
    icon: Users,
    label: "Team Size",
    value: "4 Members",
    color: "#9B87F5",
  },
  {
    icon: Calendar,
    label: "Event Duration",
    value: "Jan 5 - Feb 14, 2026",
    color: "#0EA5E9",
  },
  {
    icon: MapPin,
    label: "Finale Venue",
    value: "GEC Thrissur",
    color: "#D946EF",
  },
];

export function Prizes() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="register"
      ref={containerRef}
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Background cutout shapes */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-[#D946EF]/5 rounded-[5rem] rotate-6" />
          <div className="absolute inset-10 bg-[#0D0D12] rounded-[4rem] rotate-6" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[4rem] -rotate-6" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[3rem] -rotate-6" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 text-[#D946EF] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Join Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Ready to <span className="text-[#9B87F5]">Compete?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#A0A0B0] max-w-2xl mx-auto"
          >
            Join 1000+ students from 50+ colleges across Kerala in the most
            rigorous state-level hackathon.
          </motion.p>
        </div>

        {/* Event Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {eventDetails.map((detail) => (
            <div
              key={detail.label}
              className="flex items-center gap-4 p-6 rounded-2xl bg-[#1A1A24] border border-white/5"
            >
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${detail.color}20` }}
              >
                <detail.icon
                  className="w-6 h-6"
                  style={{ color: detail.color }}
                />
              </div>
              <div>
                <p className="text-[#A0A0B0] text-sm">{detail.label}</p>
                <p className="text-white font-bold">{detail.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Registration Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            How to <span className="text-[#0EA5E9]">Register</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#1A1A24] border border-white/5"
              >
                {/* Step number */}
                <div
                  className="text-5xl font-black mb-4 opacity-20"
                  style={{ color: step.color }}
                >
                  {step.step}
                </div>
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                <p className="text-[#A0A0B0] text-sm">{step.description}</p>

                {/* Connector arrow for desktop */}
                {index < registrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-[#A0A0B0]/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 rounded-[3rem] bg-gradient-to-br from-[#9B87F5]/10 to-[#D946EF]/10 border border-[#9B87F5]/20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Don't Miss Your Chance
          </h3>
          <p className="text-[#A0A0B0] mb-8 max-w-xl mx-auto">
            Contact your Campus Lead or Campus Enabler to register your team.
            The Qualifier begins January 5, 2026!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#timeline"
              className="px-8 py-4 rounded-2xl border border-[#9B87F5]/30 text-white font-semibold hover:bg-[#9B87F5]/10 hover:border-[#9B87F5] transition-all"
            >
              View Timeline
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
