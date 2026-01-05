import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D12] lg:pt-28 pt-0 pb-10"
    >
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        `}
      </style>

      {/* Parallax Background Layer - Deepest */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        {/* Subtle overlay with noise texture hint */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D12] via-transparent to-[#0D0D12] opacity-60" />

        {/* Dynamic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(155,135,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(155,135,245,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </motion.div>

      {/* Layered Cutout Shapes Background - Multiple Parallax Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9B87F5]/20 blur-[120px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0EA5E9]/20 blur-[120px] rounded-full mix-blend-screen opacity-30" />

        {/* Layer 1 - Slowest (furthest back) */}
        <motion.div
          style={{ y: y5, rotate: rotate1 }}
          className="absolute -top-40 -right-60 w-[900px] h-[900px] will-change-transform opacity-40"
        >
          <div className="absolute inset-0 border border-white/5 rounded-[8rem] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
        </motion.div>

        {/* Layer 3 - Cyan accent cutout */}
        <motion.div
          style={{ y: y1, rotate: rotate2 }}
          className="absolute top-1/4 -left-32 w-[450px] h-[450px] will-change-transform opacity-30"
        >
          <div className="absolute inset-0 border border-[#0EA5E9]/20 rounded-[4rem] bg-gradient-to-tr from-[#0EA5E9]/10 to-transparent" />
        </motion.div>

        {/* Layer 5 - Small accent */}
        <motion.div
          style={{ y: y4 }}
          className="absolute top-1/3 right-[15%] w-[120px] h-[120px] will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#9B87F5] to-[#D946EF] rounded-3xl rotate-12 opacity-20 blur-xl" />
          <div className="absolute inset-0 border border-[#9B87F5]/30 rounded-3xl rotate-12 backdrop-blur-md" />
        </motion.div>
      </div>

      {/* Main Content with Parallax - Properly Centered */}
      <motion.div
        style={{ y: contentY, scale, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 will-change-transform"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left relative">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-wide text-[#A0A0B0] font-['Space_Grotesk']">
                KERALA'S PREMIER HACKATHON
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-2 relative"
            >
              <h1
                className="text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight font-bold"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {/* VISION - Solid White with subtle shadow */}
                <motion.span
                  className="block text-white drop-shadow-2xl"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  VISION
                </motion.span>

                {/* HACK - Outline Style with Glitch Effect Hint */}
                <motion.span
                  className="block text-transparent stroke-text relative"
                  style={{
                    WebkitTextStroke: "2px #9B87F5",
                    textShadow: "0 0 20px rgba(155, 135, 245, 0.5)"
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  HACK
                  <span className="absolute inset-0 text-[#0EA5E9] opacity-30 blur-[2px] animate-pulse" style={{ WebkitTextStroke: "0px transparent" }}>HACK</span>
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-4 flex flex-col items-center lg:items-start"
              >
                <div className="h-1 w-20 bg-gradient-to-r from-[#0EA5E9] to-transparent rounded-full mb-6" />
                <h2
                  className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-[#A0A0B0]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  BUILD BEYOND THE <span className="text-white font-semibold">VISION</span>
                </h2>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-[#A0A0B0]/80 max-w-lg leading-relaxed mx-auto lg:mx-0 font-['Space_Grotesk']"
            >
              A performance-first talent engine designed to identify elite developers.
              Join the most rigorous multi-stage hackathon pipeline in the state.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href="https://vs.mulearnscet.in/"
                target="_blank"
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#9B87F5] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Login <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              <a
                href="#about"
                onClick={(e) => handleScrollClick(e, "#about")}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Learn More
              </a>
            </motion.div>

            {/* Tech Stack / Partner Badges Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-10 flex items-center justify-center lg:justify-start gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            >
              <span className="text-xs font-mono text-[#A0A0B0]">POWERED BY</span>
              <div className="h-px w-8 bg-white/20" />
              <img src="/images/mulearn-logo.png" alt="MuLearn" className="h-6 w-auto" />
              <span className="text-sm font-bold font-['Space_Grotesk'] text-white">μLearn Thrissur</span>
            </motion.div>
          </div>

          {/* Right - Glassmorphism Card Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block perspective-1000"
          >
            {/* Abstract Code Block Visual */}
            <motion.div
              style={{ y: visualY1, rotateY: -10, rotateX: 5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] bg-[#1A1A24]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-purple-500/10 will-change-transform"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="ml-2 text-xs text-[#A0A0B0] font-mono">vision_hack.config.ts</span>
              </div>

              <div className="space-y-3 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-pink-500">const</span>
                  <span className="text-blue-400">hackathon</span>
                  <span className="text-white">=</span>
                  <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">duration:</span>
                  <span className="text-green-400">"15 Hours"</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">prizePool:</span>
                  <span className="text-green-400">"₹50,000+"</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">participants:</span>
                  <span className="text-green-400">"50+ Colleges"</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">mode:</span>
                  <span className="text-purple-400">"Hybrid"</span>,
                </div>
                <div className="pl-4 flex gap-2">
                  <span className="text-blue-300">status:</span>
                  <span className="text-green-400">"Registration Open"</span>
                </div>
                <div className="text-yellow-300">{"}"}</div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                style={{ y: visualY2 }}
                className="absolute -right-8 -top-8 bg-[#0D0D12] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="p-2 bg-[#9B87F5]/20 rounded-lg text-[#9B87F5]">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#A0A0B0] font-mono">TRACKS</div>
                  <div className="text-lg font-bold text-white font-['Space_Grotesk']">Open Innovation</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                style={{ y: visualY3 }}
                className="absolute -left-12 bottom-12 bg-[#0D0D12] border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="p-2 bg-[#0EA5E9]/20 rounded-lg text-[#0EA5E9]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#A0A0B0] font-mono">PRIZE POOL</div>
                  <div className="text-lg font-bold text-white font-['Space_Grotesk']">50K+</div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollTo("#about", { offset: 0 })}
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#A0A0B0] uppercase group-hover:text-white transition-colors duration-300 font-['Space_Grotesk']">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 backdrop-blur-sm group-hover:border-[#9B87F5] transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#9B87F5]" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
