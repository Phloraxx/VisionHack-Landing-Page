import screenPng from "../../../poster-assets/screen.png";
import mobilePng from "../../../poster-assets/mobile.png";
import tabletPng from "../../../poster-assets/tablet.png";

/**
 * Hero — full-width poster image (screen.png).
 * Replaces the previous two-SVG approach; this single PNG contains
 * the complete hero artwork and scales responsively at any viewport.
 */
export default function Hero() {
  return (
    <div className="hero-section-container">
      {/* ─────────────── Poster ─────────────── */}
      <section id="hero" className="hero-poster-wrap">
        {/* Responsive poster: mobile ≤768px · tablet 769–1024px · desktop >1024px */}
        <picture>
          <source srcSet={mobilePng} media="(max-width: 768px)" />
          <source srcSet={tabletPng} media="(max-width: 1024px)" />
          <img
            src={screenPng}
            alt="VisionHack '26 — Building the Next-Generation Kudumbashree Ecosystem"
            className="hero-poster-img"
            aria-label="VisionHack '26 poster"
          />
        </picture>
      </section>

      {/* ─────────────── Partner Logos Row ─────────────── */}
      <div className="partner-logos-section">
        {/* K-DISC */}
        <div className="partner-logo-item">
          <img src="/kdisc.png" alt="K-DISC Logo" className="partner-logo-img" />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">K-DISC</span>
            <span className="partner-logo-subtitle">Innovation Strategic Council</span>
          </div>
        </div>

        {/* Kudumbashree */}
        <div className="partner-logo-item">
          <img src="/kudumbashree.png" alt="Kudumbashree Logo" className="partner-logo-img" />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title" style={{ fontWeight: 800 }}>കുടുംബശ്രീ</span>
            <span className="partner-logo-subtitle">Kudumbashree Mission</span>
          </div>
        </div>

        {/* μlearn */}
        <div className="partner-logo-item">
          <img src="/mulearn.webp" alt="MuLearn Logo" className="partner-logo-img" />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">μlearn</span>
            <span className="partner-logo-subtitle">A GTECH Initiative</span>
          </div>
        </div>

        {/* VISIONHACK '26 */}
        <div className="partner-logo-item">
          <img src="/logo-v2.png" alt="Visionhack Logo" className="partner-logo-img" />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">VISIONHACK</span>
            <span className="partner-logo-subtitle">Campaign '26</span>
          </div>
        </div>
      </div>

      <style>{`
        /* ══════════════════════════════════════════════════
           HERO POSTER — single full-width PNG, fully responsive
        ══════════════════════════════════════════════════ */

        .hero-poster-wrap {
          width: 100%;
          background: #ffffff;
          position: relative;
          line-height: 0; /* remove ghost space below inline image */
        }

        /* The poster image fills 100% width and preserves its natural aspect ratio */
        .hero-poster-img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        /* ── Mobile adjustments ── */
        @media (max-width: 768px) {
          .hero-poster-wrap { padding-top: 30px; }
        }
      `}</style>
    </div>
  );
}
