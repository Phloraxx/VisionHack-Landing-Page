import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Monitor,
  FileText,
  Trophy,
  Calendar,
  Users,
  Presentation,
  Lightbulb,
} from "lucide-react";

const timelineEvents = [
  {
    stage: "Stage 1",
    title: "THE QUALIFIER",
    subtitle: "Internal College Hackathon",
    date: "January 5–18, 2026",
    color: "#9B87F5",
    icon: Monitor,
    description:
      "Each college nominates 5 teams through PPT evaluation or mini hackathons conducted by Campus Leads and Campus Enablers.",
    outcome: "250 teams advance",
    details: [
      { icon: Users, text: "50+ colleges participate" },
      { icon: FileText, text: "PPT evaluation or mini hackathons" },
      { icon: Calendar, text: "2 weeks duration" },
    ],
  },
  {
    stage: "Stage 2",
    title: "THE GAUNTLET",
    subtitle: "Online Semifinal",
    date: "Results: February 2, 2026",
    color: "#0EA5E9",
    icon: Presentation,
    description:
      "PPT presentation on a committee provided problem statement. Globally novel ideas are actively encouraged.",
    outcome: "25 teams selected",
    details: [
      { icon: FileText, text: "Committee-provided problem statements" },
      { icon: Lightbulb, text: "Globally novel ideas encouraged" },
      { icon: Users, text: "Expert mentorship available" },
      { icon: Calendar, text: "Online evaluation" },
    ],
  },
  {
    stage: "Stage 3",
    title: "THE SHOWDOWN",
    subtitle: "Grand Finale at GEC Thrissur",
    date: "February 13–14, 2026",
    color: "#D946EF",
    icon: Trophy,
    description:
      "A 15-Hour Offline Hackathon. Teams build fully functional apps/webs based on on-the-spot themes, judged by expert panels.",
    outcome: "Winners announced",
    details: [
      { icon: Calendar, text: "15-hour offline hackathon" },
      { icon: FileText, text: "On-the-spot themes" },
      { icon: Users, text: "Expert panel judging" },
    ],
  },
];

function TimelineCard({
  event,
  index,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -3 : 3, 0],
  );

  return (
    <motion.div ref={ref} style={{ x, opacity, rotate }} className="relative">
      {/* Stage badge */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="relative px-5 py-2 rounded-2xl"
          style={{ backgroundColor: event.color }}
        >
          <span className="text-[#0D0D12] font-black text-sm tracking-wider">
            {event.stage}
          </span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#0D0D12] rounded-lg rotate-12" />
        </div>
        <span className="text-[#A0A0B0] font-semibold text-sm">
          {event.date}
        </span>
      </div>

      {/* Main card */}
      <div className="relative p-8 rounded-[2.5rem] bg-[#1A1A24] border border-white/5 overflow-hidden">
        {/* Large accent cutout */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-[2rem] opacity-15"
          style={{ backgroundColor: event.color }}
        />
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-[1.5rem] bg-[#1A1A24]" />

        {/* Icon */}
        <div className="relative mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${event.color}20` }}
          >
            <event.icon className="w-8 h-8" style={{ color: event.color }} />
          </div>
          <div
            className="absolute -bottom-2 -right-2 w-5 h-5 rounded-lg rotate-12"
            style={{ backgroundColor: event.color }}
          />
        </div>

        {/* Title */}
        <h3
          className="text-2xl sm:text-3xl font-black mb-2"
          style={{ color: event.color }}
        >
          {event.title}
        </h3>
        <p className="text-white font-semibold mb-4">{event.subtitle}</p>

        {/* Description */}
        <p className="text-[#A0A0B0] leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Details */}
        <div className="space-y-3 mb-6">
          {event.details.map((detail, i) => (
            <div key={i} className="flex items-center gap-3 text-[#A0A0B0]">
              <detail.icon className="w-4 h-4" style={{ color: event.color }} />
              <span className="text-sm">{detail.text}</span>
            </div>
          ))}
        </div>

        {/* Outcome badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
          style={{ backgroundColor: `${event.color}15` }}
        >
          <Trophy className="w-4 h-4" style={{ color: event.color }} />
          <span
            className="text-sm font-semibold"
            style={{ color: event.color }}
          >
            {event.outcome}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Background cutout shapes */}
      <motion.div
        style={{ rotate: backgroundRotate }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 right-0 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[5rem]" />
          <div className="absolute inset-10 bg-[#0D0D12] rounded-[4rem]" />
        </div>
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#0EA5E9]/5 rounded-[4rem]" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[3rem]" />
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
            className="inline-block px-4 py-2 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Event Overview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Three Stages to <span className="text-[#D946EF]">Glory</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#A0A0B0] max-w-2xl mx-auto"
          >
            From college-level qualifiers to the grand finale at GEC Thrissur,
            prove your skills at every stage of Vision Hack 2026.
          </motion.p>
        </div>

        {/* Timeline Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.title} event={event} index={index} />
          ))}
        </div>

        {/* Flow connector for desktop */}
        <div className="hidden lg:flex items-center justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#9B87F5] to-[#0EA5E9] rounded-full" />
            <div className="w-3 h-3 rounded-full bg-[#0EA5E9]" />
            <div className="w-20 h-1 bg-gradient-to-r from-[#0EA5E9] to-[#D946EF] rounded-full" />
            <div className="w-3 h-3 rounded-full bg-[#D946EF]" />
            <div className="w-20 h-1 bg-[#D946EF] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
