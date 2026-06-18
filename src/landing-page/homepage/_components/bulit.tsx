"use client";


import Image from "next/image";

export default function Bulit() {
  return (
    <section id="bulit" className="bulit-section">
      <div className="container">
        <div className="bulit-header">
          <h2 className="bulit-title">
            MADE FOR <span className="text-green">CURIOUS BUILDERS</span>
          </h2>
        </div>

        <div className="bulit-grid">
          {/* Card 1 */}
          <div className="bulit-card">
            <div className="bulit-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3 className="bulit-card-title">Engineering Students</h3>
            <p className="bulit-card-desc">
              All undergraduate and postgraduate engineering students from Kerala's recognized institutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bulit-card">
            <div className="bulit-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="bulit-card-title">Interdisciplinary Teams</h3>
            <p className="bulit-card-desc">
              Designers, business students, and domain experts encouraged to join engineering peers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bulit-card">
            <div className="bulit-icon-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.5 2.5 6l11.5-11.5M12 2c5.5 0 10 4.5 10 10 0 2.5-1 4.5-2.5 6L8 6.5" />
                <path d="M9 15l-3 3M15 9l3-3M16 5l3 3M5 16l3 3" />
              </svg>
            </div>
            <h3 className="bulit-card-title">Future Builders</h3>
            <p className="bulit-card-desc">
              Anyone with a builder's mindset and a desire to ship impact at community scale.
            </p>
          </div>
        </div>

        {/* Showcase Image */}
        <div className="bulit-image-container">
          <Image
            src="/curious_builders.png"
            alt="Curious Builders Collaborating"
            width={1200}
            height={800}
            className="bulit-showcase-image"
            priority
          />
        </div>
      </div>

      <style>{`
        /* Bulit Section Styles */
        .bulit-section {
          background-color: #e3f4e3; /* Soft light mint green matching the screenshot */
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .bulit-header {
          text-align: center;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .bulit-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
          text-transform: uppercase;
        }

        .bulit-title .text-green {
          color: var(--color-green);
        }

        .bulit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .bulit-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 35px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .bulit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.08);
        }

        .bulit-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 4px 10px rgba(40, 107, 59, 0.15);
        }

        .bulit-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 12px;
          line-height: 1.2;
        }

        .bulit-card-desc {
          font-size: 0.95rem;
          color: var(--color-gray);
          line-height: 1.5;
        }

        .bulit-image-container {
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
          background-color: #ffffff;
          display: flex;
          justify-content: center;
        }

        .bulit-showcase-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: 24px;
        }

        @media (max-width: 1200px) {
          .bulit-grid, .bulit-header, .bulit-image-container {
            max-width: 90%;
          }
        }

        @media (max-width: 992px) {
          .bulit-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .bulit-section {
            padding: 60px 0;
          }
          .bulit-title {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
