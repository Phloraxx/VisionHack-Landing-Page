import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Target, Users2, Brain, Trophy } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Performance-First",
    description:
      "A rigorous multi-stage pipeline to measure raw problem-solving and adaptability.",
    color: "#9B87F5",
  },
  {
    icon: Users2,
    title: "50+ Colleges",
    description:
      "State-level participation from Kerala's top engineering institutions.",
    color: "#0EA5E9",
  },
  {
    icon: Brain,
    title: "Elite Talent Discovery",
    description:
      "Identify and connect with Kerala's most talented developers and innovators.",
    color: "#D946EF",
  },
  {
    icon: Trophy,
    title: "Industry Benchmark",
    description:
      "Establish a statewide technical benchmark and reliable talent discovery mechanism.",
    color: "#9B87F5",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -8 : 8, 0],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotate, scale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated glow effect behind card */}
      <motion.div
        className="absolute -inset-2 rounded-[3rem] opacity-0 blur-xl transition-opacity duration-500"
        style={{ backgroundColor: feature.color }}
        animate={{
          opacity: isHovered ? 0.2 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
      />

      {/* Cutout card shape */}
      <motion.div
        className="relative p-8 rounded-[2.5rem] bg-[#1A1A24] border border-white/5 overflow-hidden cursor-pointer"
        animate={{
          borderColor: isHovered
            ? `${feature.color}40`
            : "rgba(255,255,255,0.05)",
          y: isHovered ? -8 : 0,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? (index % 2 === 0 ? -5 : 5) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Animated corner accent */}
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 rounded-[2rem]"
          style={{ backgroundColor: feature.color }}
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 15 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute -top-2 -right-2 w-16 h-16 rounded-[1.5rem] bg-[#1A1A24]"
          animate={{
            scale: isHovered ? 0.9 : 1,
          }}
        />

        {/* Floating particles on hover */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: feature.color }}
                initial={{
                  x: 50 + Math.random() * 100,
                  y: 50 + Math.random() * 100,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: [null, -30 - Math.random() * 50],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </>
        )}

        {/* Icon with enhanced animation */}
        <div className="relative mb-6">
          <motion.div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: `${feature.color}20` }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{
              scale: { type: "spring", stiffness: 400, damping: 15 },
              rotate: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{ border: `2px solid ${feature.color}` }}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : 1,
                opacity: isHovered ? [0.5, 0, 0.5] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.15, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
            >
              <feature.icon
                className="w-8 h-8"
                style={{ color: feature.color }}
              />
            </motion.div>
          </motion.div>
          {/* Bouncing accent dot */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-lg"
            style={{ backgroundColor: feature.color }}
            animate={{
              y: isHovered ? [0, -6, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: isHovered ? [0, 180, 360] : 0,
            }}
            transition={{
              duration: 0.8,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content with stagger animation */}
        <motion.h3
          className="text-xl font-bold text-white mb-3"
          animate={{
            x: isHovered ? 4 : 0,
            color: isHovered ? feature.color : "#FFFFFF",
          }}
          transition={{ duration: 0.3 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="text-[#A0A0B0] leading-relaxed"
          animate={{
            x: isHovered ? 4 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {feature.description}
        </motion.p>

        {/* Animated bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-full"
          style={{ backgroundColor: feature.color }}
          initial={{ width: 0, left: "50%" }}
          animate={{
            width: isHovered ? "100%" : "0%",
            left: isHovered ? "0%" : "50%",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Corner sparkle effect */}
        <motion.div
          className="absolute top-4 left-4 w-2 h-2 rounded-full"
          style={{ backgroundColor: feature.color }}
          animate={{
            opacity: isHovered ? [0, 1, 0] : 0,
            scale: isHovered ? [0, 1.5, 0] : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Font import for consistency */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
          .about-title {
            font-family: 'Bebas Neue', sans-serif;
            letter-spacing: 0.02em;
          }
        `}
      </style>

      {/* Layered background cutouts */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        {/* Large cutout shape */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[6rem] rotate-12" />
          <div className="absolute inset-12 bg-[#0D0D12] rounded-[5rem] rotate-12" />
        </div>

        {/* Right side cutout */}
        <div className="absolute top-1/2 -right-20 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#0EA5E9]/5 rounded-[4rem] -rotate-6" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[3rem] -rotate-6" />
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
            className="inline-block px-4 py-2 rounded-full bg-[#9B87F5]/10 border border-[#9B87F5]/20 text-[#9B87F5] text-sm font-semibold tracking-widest uppercase mb-6"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-title text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6"
          >
            What is <span className="text-[#9B87F5]">Vision Hack?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#A0A0B0] max-w-3xl mx-auto"
          >
            <span className="text-[#9B87F5] font-semibold">
              VISION HACK 2026
            </span>{" "}
            is a performance-first talent engine designed to identify Kerala's
            elite developers. Moving beyond typical events, we use a rigorous
            multi-stage pipeline to measure raw problem-solving and
            adaptability. Our goal is to establish a statewide technical
            benchmark and a reliable talent discovery mechanism for the
            industry.
          </motion.p>
        </div>

        {/* Feature Cards - Staggered Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Stats Bar with cutout style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative"
        >
          {/* Cutout container */}
          <div className="relative p-10 rounded-[3rem] bg-[#1A1A24] border border-white/5 overflow-hidden">
            {/* Corner accents */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#9B87F5]/20 rounded-[2rem] rotate-12" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#0EA5E9]/20 rounded-[2rem] -rotate-12" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50+", label: "Colleges", color: "#9B87F5" },
                { value: "250", label: "Teams", color: "#0EA5E9" },
                { value: "1000+", label: "Students", color: "#D946EF" },
                { value: "25", label: "Finalists", color: "#9B87F5" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-4xl sm:text-5xl font-black"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#A0A0B0] mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
