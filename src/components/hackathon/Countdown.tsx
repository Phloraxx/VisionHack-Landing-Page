import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

function FlipCard({ value, label }: { value: string; label: string }) {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, prevValue]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-20 h-24 sm:w-28 sm:h-32"
        style={{ perspective: "1000px" }}
      >
        {/* Back face (new value) */}
        <div className="absolute inset-0 bg-[#1A1A24] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
          <span className="text-4xl sm:text-5xl font-black text-white">
            {value}
          </span>
        </div>

        {/* Front face (old value) - flips away */}
        <motion.div
          animate={{
            rotateX: isFlipping ? -90 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="absolute inset-0 bg-[#1A1A24] rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transformOrigin: "bottom",
          }}
        >
          <span className="text-4xl sm:text-5xl font-black text-white">
            {prevValue}
          </span>
        </motion.div>

        {/* Cutout accent */}
        <div className="absolute -top-2 -right-2 w-6 h-6">
          <div className="absolute inset-0 bg-[#9B87F5] rounded-lg rotate-12" />
        </div>
      </div>
      <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#A0A0B0] uppercase">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const containerRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Calculate countdown to The Qualifier start (January 5, 2026)
  useEffect(() => {
    const targetDate = new Date("2026-01-18T09:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      id="countdown"
      className="relative py-32 bg-[#0D0D12] overflow-hidden"
    >
      {/* Background cutout shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px]">
          <div className="absolute inset-0 bg-[#9B87F5]/5 rounded-[3rem] rotate-12" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-[#0EA5E9]/5 rounded-[4rem] -rotate-12" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#9B87F5]/10 border border-[#9B87F5]/20 text-[#9B87F5] text-sm font-semibold tracking-widest uppercase mb-6">
            The Countdown Begins
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Time Until{" "}
            <span className="bg-gradient-to-r from-[#9B87F5] to-[#D946EF] bg-clip-text text-transparent">
              Semi Finals
            </span>
          </h2>
          <p className="text-[#A0A0B0]">January 5, 2026 - The journey begins</p>
        </motion.div>

        {/* Countdown Display */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 sm:gap-8">
            <FlipCard value={timeLeft.days} label="Days" />
            <span className="text-4xl font-black text-[#9B87F5] mt-[-20px]">
              :
            </span>
            <FlipCard value={timeLeft.hours} label="Hours" />
            <span className="text-4xl font-black text-[#9B87F5] mt-[-20px]">
              :
            </span>
            <FlipCard value={timeLeft.minutes} label="Minutes" />
            <span className="text-4xl font-black text-[#9B87F5] mt-[-20px] hidden sm:block">
              :
            </span>
            <div className="hidden sm:block">
              <FlipCard value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          {/* Key Dates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid sm:grid-cols-3 gap-4 w-full max-w-2xl"
          >
            <div className="p-4 rounded-2xl bg-[#1A1A24] border border-[#9B87F5]/20 text-center">
              <p className="text-[#9B87F5] font-bold text-sm mb-1">
                The Qualifier
              </p>
              <p className="text-white text-xs">Jan 5-18, 2026</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#1A1A24] border border-[#0EA5E9]/20 text-center">
              <p className="text-[#0EA5E9] font-bold text-sm mb-1">
                The Gauntlet Results
              </p>
              <p className="text-white text-xs">Feb 2, 2026</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#1A1A24] border border-[#D946EF]/20 text-center">
              <p className="text-[#D946EF] font-bold text-sm mb-1">
                The Showdown
              </p>
              <p className="text-white text-xs">Feb 13-14, 2026</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
