
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section-container">
      {/* 1. Main Hero Graphic Container */}
      <section id="hero" className="hero-photo-wrapper">
        <Image
          src="/hero.png"
          alt="Visionhack Kudumbashree Ecosystem Campaign"
          width={1440}
          height={1000}
          priority
          style={{ width: "100%", height: "700px", display: "block" }}
        />
      </section>

      {/* 2. Separate Partner Logos Row Section */}
      <div className="partner-logos-section">
        {/* K-DISC */}
        <div className="partner-logo-item">
          <Image
            src="/kdisc.png"
            alt="K-DISC Logo"
            width={120}
            height={40}
            className="partner-logo-img"
          />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">K-DISC</span>
            <span className="partner-logo-subtitle">Innovation Strategic Council</span>
          </div>
        </div>

        {/* Kudumbashree */}
        <div className="partner-logo-item">
          <Image
            src="/kudumbashree.png"
            alt="Kudumbashree Logo"
            width={40}
            height={40}
            className="partner-logo-img"
          />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title" style={{ fontFamily: "var(--font-playfair)", fontWeight: 800 }}>കുടുംബശ്രീ</span>
            <span className="partner-logo-subtitle">Kudumbashree Mission</span>
          </div>
        </div>

        {/* μlearn */}
        <div className="partner-logo-item">
          <Image
            src="/mulearn.webp"
            alt="MuLearn Logo"
            width={120}
            height={40}
            className="partner-logo-img"
          />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">μlearn</span>
            <span className="partner-logo-subtitle">A GTECH Initiative</span>
          </div>
        </div>

        {/* VISIONHACK '26 */}
        <div className="partner-logo-item">
          <Image
            src="/logo-v2.png"
            alt="Visionhack Logo"
            width={120}
            height={40}
            className="partner-logo-img"
          />
          <div className="partner-logo-text-col">
            <span className="partner-logo-title">VISIONHACK</span>
            <span className="partner-logo-subtitle">Campaign '26</span>
          </div>
        </div>
      </div>
    </div>
  );
}
