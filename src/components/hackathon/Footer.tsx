import { motion } from "motion/react";
import { Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useScrollTo } from "@/hooks/use-scroll";

const coordinators = [
  { name: "Suraj Krishna K", phone: "7356376285" },
  { name: "Sinan Sulaiman", phone: "7559908527" },
  { name: "Fiero Jain", phone: "6363837616" },
  { name: "Arjun Das", phone: "6282489905" },
  { name: "YadhuKrishna T M", phone: "9778256341" },
];

const footerLinks = [
  {
    title: "Event",
    links: [
      { label: "About", href: "#about" },
      { label: "Timeline", href: "#timeline" },
      { label: "Highlights", href: "#highlights" },
      { label: "Register", href: "#register" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  const { scrollTo, scrollToTop } = useScrollTo();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href, { offset: -100 });
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0A0A0E] border-t border-white/5 overflow-hidden"
    >
      {/* Background cutout shapes */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]">
          <div className="absolute inset-0 bg-[#9B87F5]/3 rounded-t-[8rem]" />
          <div className="absolute inset-10 bg-[#0A0A0E] rounded-t-[6rem]" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-3 mb-6"
            >
              {/* Logo */}
              <img
                src="/images/mulearn-logo.png"
                alt="μLearn"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-tight">
                  VISION HACK 2026
                </span>
                <span className="text-xs text-[#9B87F5] font-semibold">
                  by μLearn Thrissur
                </span>
              </div>
            </a>
            <p className="text-[#A0A0B0] max-w-sm mb-6 leading-relaxed">
              A state-level hackathon designed to identify Kerala's elite
              developers through a rigorous multi-stage pipeline. Build beyond
              the vision.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-xl bg-[#1A1A24] border border-white/5 text-[#A0A0B0] hover:text-white hover:border-[#9B87F5]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:visionhack@mulearn.org"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 rounded-xl bg-[#1A1A24] border border-white/5 text-[#A0A0B0] hover:text-white hover:border-[#9B87F5]/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-bold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-[#A0A0B0] hover:text-[#9B87F5] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Event Coordinators */}
        <div className="py-8 border-t border-white/5">
          <h4 className="text-white font-bold mb-6 text-center">
            Event Coordinators
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {coordinators.map((coordinator) => (
              <div
                key={coordinator.name}
                className="p-4 rounded-xl bg-[#1A1A24] border border-white/5 text-center"
              >
                <p className="text-white font-semibold text-sm mb-1">
                  {coordinator.name}
                </p>
                <a
                  href={`tel:${coordinator.phone}`}
                  className="flex items-center justify-center gap-1 text-[#9B87F5] text-xs hover:text-[#D946EF] transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  {coordinator.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Venue Info */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#A0A0B0]">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#9B87F5]" />
              <span className="font-medium">
                Grand Finale Venue: GEC Thrissur
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D946EF] font-bold">
                February 13-14, 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A0A0B0]">
            © 2026 Vision Hack
          </p>
          <div className="flex items-center gap-2">
                <img
                  src="/images/mulearn-logo.png"
                  alt="μLearn"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-white font-bold">μLearn Thrissur</span>
              </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#A0A0B0]">
              Build Beyond the Vision
            </span>
            <motion.button
              onClick={() => scrollToTop()}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-[#1A1A24] border border-white/5 text-[#A0A0B0] hover:text-white hover:border-[#9B87F5]/30 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
