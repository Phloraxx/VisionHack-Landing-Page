import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useScroll, useScrollTo } from "@/hooks/use-scroll";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Highlights", href: "#highlights" },
  { label: "Register", href: "#register" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { isAtTop, scrollDirection } = useScroll({ threshold: 50 });
  const { scrollTo } = useScrollTo();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = !isAtTop;
  const isHidden = scrollDirection === "down" && !isMobileMenuOpen;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href, { offset: -100 });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Font import for nav logo - Using Roboto */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700;900&display=swap');
          .nav-logo-text {
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
            letter-spacing: -0.02em;
          }
        `}
      </style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div
          className={`max-w-7xl mx-auto transition-all duration-500 ${
            isScrolled
              ? "bg-[#0D0D12]/90 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-black/20"
              : ""
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(0);
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/mulearn-logo.png"
                alt="μLearn"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="nav-logo-text text-2xl font-black tracking-tight text-white leading-none">
                  VISION HACK
                </span>
                <span className="text-xs text-[#9B87F5] font-semibold tracking-wider">
                  2026
                </span>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-5 py-2.5 text-sm font-medium text-[#A0A0B0] hover:text-white transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="bg-[#0D0D12] border border-white/10 rounded-3xl p-6 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 text-[#A0A0B0] hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
