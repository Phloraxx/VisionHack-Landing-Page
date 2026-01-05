import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Code2, Brain, Cpu, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    value: "50+",
    label: "Active Colleges",
    description: "Participating institutions from across Kerala",
    color: "#9B87F5",
  },
  {
    icon: Users,
    value: "250",
    label: "Teams",
    description: "Approximately 1000+ students competing",
    color: "#0EA5E9",
  },
  {
    icon: Target,
    value: "25",
    label: "Elite Finalists",
    description: "Top teams advancing to the grand finale",
    color: "#D946EF",
  },
];

const audience = [
  {
    icon: Code2,
    title: "Engineering Students",
    description: "Aspiring developers from top engineering colleges",
    color: "#9B87F5",
  },
  {
    icon: Brain,
    title: "AI/ML Enthusiasts",
    description:
      "Students passionate about artificial intelligence and machine learning",
    color: "#0EA5E9",
  },
  {
    icon: Cpu,
    title: "System Architects",
    description: "Intermediate to advanced technical competency",
    color: "#D946EF",
  },
];

function HighlightCard({ highlight }: { highlight: (typeof highlights)[0] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-[2.5rem] bg-[#1A1A24] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 text-center">
        {/* Large background cutout accent */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-[2rem] opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: highlight.color }}
        />
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-[1.5rem] bg-[#1A1A24]" />

        {/* Icon */}
        <div className="relative mb-6 flex justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
            style={{ backgroundColor: `${highlight.color}15` }}
          >
            <highlight.icon
              className="w-8 h-8"
              style={{ color: highlight.color }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-5 h-5 rounded-lg rotate-12"
              style={{ backgroundColor: highlight.color }}
            />
          </div>
        </div>

        {/* Value */}
        <p
          className="text-5xl sm:text-6xl font-black mb-2"
          style={{ color: highlight.color }}
        >
          {highlight.value}
        </p>
        <h3 className="text-xl font-bold text-white mb-3">{highlight.label}</h3>
        <p className="text-[#A0A0B0] leading-relaxed">
          {highlight.description}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: highlight.color }}
        />
      </div>
    </motion.div>
  );
}

function AudienceCard({ item }: { item: (typeof audience)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex items-start gap-4 p-6 rounded-2xl bg-[#1A1A24] border border-white/5 hover:border-white/10 transition-all"
    >
      <div
        className="flex-shrink-0 p-3 rounded-xl"
        style={{ backgroundColor: `${item.color}15` }}
      >
        <item.icon className="w-6 h-6" style={{ color: item.color }} />
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{item.title}</h4>
        <p className="text-sm text-[#A0A0B0]">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function Tracks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="highlights"
      ref={containerRef}
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Background cutout shapes */}
      <motion.div style={{ x: backgroundX }} className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[5rem] rotate-12" />
          <div className="absolute inset-10 bg-[#0D0D12] rounded-[4rem] rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#0EA5E9]/5 rounded-[4rem] -rotate-12" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[3rem] -rotate-12" />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 text-[#D946EF] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Highlights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            By the <span className="text-[#9B87F5]">Numbers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#A0A0B0] max-w-2xl mx-auto"
          >
            Vision Hack 2026 brings together Kerala's brightest minds for an
            unprecedented state-level competition.
          </motion.p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.label} highlight={highlight} />
          ))}
        </div>

        {/* Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Access Kerala's{" "}
              <span className="text-[#0EA5E9]">Future Innovators</span>
            </h3>
            <p className="text-[#A0A0B0] max-w-xl mx-auto">
              Engineering students, aspiring developers, AI/ML enthusiasts, and
              system architects with skill levels from intermediate to advanced
              technical competency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {audience.map((item) => (
              <AudienceCard key={item.title} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
