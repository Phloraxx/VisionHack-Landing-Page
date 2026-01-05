import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useScrollTo();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Ultra-smooth spring config for buttery parallax
  const springConfig = { stiffness: 50, damping: 20, restDelta: 0.0001 };

  // Smooth spring-based scroll progress
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Reduced parallax transforms for smoother feel
  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "-12%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const y3 = useTransform(smoothProgress, [0, 1], ["0%", "-8%"]);
  const y4 = useTransform(smoothProgress, [0, 1], ["0%", "-16%"]);
  const y5 = useTransform(smoothProgress, [0, 1], ["0%", "-5%"]);

  // Content parallax - gentler for main content
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.98]);
  const opacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  // Background parallax - slowest layer
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "12%"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.05]);

  // Right side visual parallax - varied speeds for 3D depth
  const visualY1 = useTransform(smoothProgress, [0, 1], ["0%", "-8%"]);
  const visualY2 = useTransform(smoothProgress, [0, 1], ["0%", "-14%"]);
  const visualY3 = useTransform(smoothProgress, [0, 1], ["0%", "-22%"]);
  const visualY4 = useTransform(smoothProgress, [0, 1], ["0%", "-28%"]);

  // Rotation parallax for extra depth
  const rotate1 = useTransform(smoothProgress, [0, 1], [12, 15]);
  const rotate2 = useTransform(smoothProgress, [0, 1], [-12, -9]);

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href, { offset: -100 });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0D0D12] pt-28"
    >
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Rajdhani:wght@500;600;700&display=swap');
        `}
      </style>

      {/* Parallax Background Layer - Deepest */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12] via-transparent to-[#0D0D12] opacity-40" />

        {/* Grid pattern with parallax */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(155, 135, 245, 0.6) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(155, 135, 245, 0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Layered Cutout Shapes Background - Multiple Parallax Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1 - Slowest (furthest back) */}
        <motion.div
          style={{ y: y5, rotate: rotate1 }}
          className="absolute -top-40 -right-60 w-[900px] h-[900px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#9B87F5]/10 rounded-[8rem]" />
          <div className="absolute inset-12 bg-[#0D0D12] rounded-[7rem]" />
        </motion.div>

        {/* Layer 2 */}
        <motion.div
          style={{ y: y3 }}
          className="absolute -top-20 -right-40 w-[700px] h-[700px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#9B87F5]/15 rounded-[6rem] rotate-12" />
          <div className="absolute inset-8 bg-[#0D0D12] rounded-[5rem] rotate-12" />
        </motion.div>

        {/* Layer 3 - Cyan accent cutout */}
        <motion.div
          style={{ y: y1, rotate: rotate2 }}
          className="absolute top-1/4 -left-32 w-[450px] h-[450px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#0EA5E9]/15 rounded-[4rem]" />
          <div className="absolute inset-6 bg-[#0D0D12] rounded-[3rem]" />
        </motion.div>

        {/* Layer 4 - Floating purple cutout */}
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-[220px] h-[220px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#9B87F5]/12 rounded-[2rem] rotate-45" />
          <div className="absolute inset-4 bg-[#0D0D12] rounded-[1.5rem] rotate-45" />
        </motion.div>

        {/* Layer 5 - Small accent */}
        <motion.div
          style={{ y: y4 }}
          className="absolute top-1/3 right-[15%] w-[120px] h-[120px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#9B87F5]/20 rounded-3xl rotate-12" />
          <div className="absolute inset-3 bg-[#0D0D12] rounded-2xl rotate-12" />
        </motion.div>

        {/* Decorative dots pattern */}
        <motion.div
          style={{ y: y3 }}
          className="absolute top-1/3 right-1/3 grid grid-cols-5 gap-4 opacity-15 will-change-transform"
        >
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#9B87F5]" />
          ))}
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute bottom-1/3 left-1/4 w-[80px] h-[80px] will-change-transform"
        >
          <div className="absolute inset-0 bg-[#9B87F5] rounded-2xl rotate-45 opacity-20" />
        </motion.div>
      </div>

      {/* Main Content with Parallax - Properly Centered */}
      <motion.div
        style={{ y: contentY, scale, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 will-change-transform"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="w-3 h-3 rounded-full bg-[#0EA5E9] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#A0A0B0] uppercase">
                A State Level Hackathon with 50+ Colleges
              </span>
            </motion.div>

            {/* Main Heading - Professional Aesthetic Typography */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-1"
            >
              <h1
                className="text-7xl sm:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight"
                style={{
                  fontFamily: "inter",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                }}
              >
                {/* VISION - Clean white text */}
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  VISION
                </motion.span>
                {/* HACK - Solid purple text */}
                <motion.span
                  className="block text-[#9B87F5]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  HACK
                </motion.span>
              </h1>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[1.3] tracking-wide pt-4"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                <span className="text-[#A0A0B0] block">BUILD BEYOND THE</span>
                <motion.span
                  className="text-[#0EA5E9] block"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(14, 165, 233, 0.3)",
                      "0 0 40px rgba(14, 165, 233, 0.6)",
                      "0 0 20px rgba(14, 165, 233, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  VISION
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base sm:text-lg text-[#A0A0B0] max-w-md leading-relaxed mx-auto lg:mx-0"
            >
              A performance-first talent engine designed to identify Kerala's
              elite developers. Join the most rigorous multi-stage hackathon
              pipeline in the state.
            </motion.p>

            {/* CTA Buttons - Learn More + Register */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start"
            >
              {/* Primary CTA - Login */}
              <a
                href="https://vs.mulearnscet.in/"
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 text-white font-semibold hover:text-[#9B87F5] transition-colors duration-300"
              >
                Login
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Secondary CTA - Learn More */}
              <a
                href="#about"
                onClick={(e) => handleScrollClick(e, "#about")}
                className="group px-8 py-4 rounded-2xl border-2 border-[#9B87F5]/30 text-white hover:border-[#9B87F5] hover:bg-[#9B87F5]/10 transition-all duration-300 font-semibold"
              >
                Learn More
              </a>
            </motion.div>

            {/* Presented By */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4 pt-2 justify-center lg:justify-start"
            >
              <span className="text-xs text-[#A0A0B0] uppercase tracking-widest">
                Presented by
              </span>
              <div className="flex items-center gap-2">
                <img
                  src="/images/mulearn-logo.png"
                  alt="μLearn"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-bold">μLearn Thrissur</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Layered Cutout Visual with Enhanced Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[550px] hidden lg:flex items-center justify-center"
          >
            {/* Back layer - Large */}
            <motion.div
              style={{ y: visualY1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] will-change-transform"
            >
              <div className="absolute inset-0 bg-[#9B87F5]/25 rounded-[4rem]" />
              <div className="absolute inset-6 bg-[#0D0D12] rounded-[3rem]" />
            </motion.div>

            {/* Middle layer */}
            <motion.div
              style={{ y: visualY2 }}
              className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[45%] w-[320px] h-[320px] will-change-transform"
            >
              <div className="absolute inset-0 bg-[#0EA5E9]/25 rounded-[3rem] rotate-6" />
              <div className="absolute inset-5 bg-[#0D0D12] rounded-[2.5rem] rotate-6" />
            </motion.div>

            {/* Front layer - Small with content */}
            <motion.div
              style={{ y: visualY3 }}
              className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[35%] w-[240px] h-[240px] will-change-transform"
            >
              <div className="absolute inset-0 bg-[#9B87F5]/20 rounded-[2.5rem] -rotate-6" />
              <div className="absolute inset-4 bg-[#0D0D12] rounded-[2rem] -rotate-6 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-7xl font-black text-[#9B87F5]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    15
                  </p>
                  <p className="text-sm font-semibold text-[#A0A0B0] tracking-widest uppercase">
                    Hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent */}
            <motion.div
              style={{ y: visualY4 }}
              className="absolute bottom-8 right-8 w-[110px] h-[110px] will-change-transform"
            >
              <div className="absolute inset-0 bg-[#9B87F5] rounded-3xl rotate-12" />
              <div className="absolute inset-2 bg-[#0D0D12] rounded-2xl rotate-12 flex items-center justify-center">
                <span
                  className="text-2xl font-black text-[#9B87F5]"
                  style={{ fontFamily: "Bebas Neue', sans-serif" }}
                >
                  50+
                </span>
              </div>
            </motion.div>

            {/* Additional floating element for more depth */}
            <motion.div
              style={{ y: visualY4 }}
              className="absolute top-8 left-8 w-[80px] h-[80px] will-change-transform"
            >
              <div className="absolute inset-0 bg-[#0EA5E9]/30 rounded-2xl -rotate-12" />
              <div className="absolute inset-2 bg-[#0D0D12] rounded-xl -rotate-12 flex items-center justify-center">
                <span
                  className="text-lg font-black text-[#0EA5E9]"
                  style={{ fontFamily: "Bebas Neue', sans-serif" }}
                >
                  2026
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollTo("#countdown", { offset: 0 })}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
        >
          <span className="text-xs font-semibold tracking-widest text-[#A0A0B0] uppercase group-hover:text-white transition-colors duration-300">
            Scroll to explore
          </span>
          <div className="w-10 h-14 rounded-full border-2 border-[#A0A0B0]/30 group-hover:border-[#9B87F5]/50 flex items-start justify-center p-2.5 transition-colors duration-300">
            <ArrowDown className="w-4 h-4 text-[#9B87F5]" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
