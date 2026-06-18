

export default function Tracks() {
  return (
    <section id="tracks" className="tracks-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">The Harvest of Ideas</h2>
          <p className="section-desc">We structure our hacking process after the natural progression of growth. Align your project to one of these focus phases.</p>
        </div>

        <div className="tracks-grid">
          {/* Card 1: Seeds */}
          <div className="track-card green-card glass-panel">
            <div className="track-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2 .5 4 1.5 5.5L2 22l4.5-1.5C8 21.5 10 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                <path d="M8 12c1 0 2 1 3 3 1.5-3 3.5-5 5-6" />
              </svg>
            </div>
            <h3 className="track-title">Sowing the Seeds</h3>
            <p className="track-desc">Mapping rural and local challenges. Focus on early concepts, digital transformation frameworks, and public sector solutions.</p>
            <ul className="track-bullets">
              <li>
                <svg width="16" height="16" fill="var(--color-green)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Local Governance Tech
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-green)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Rural Connectivity
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-green)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Civic Awareness Platforms
              </li>
            </ul>
          </div>

          {/* Card 2: Growth */}
          <div className="track-card orange-card glass-panel">
            <div className="track-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="track-title">Nurturing Growth</h3>
            <p className="track-desc">Full-stack development, software craftsmanship, and API integrations. Turn mockups into live deployment systems.</p>
            <ul className="track-bullets">
              <li>
                <svg width="16" height="16" fill="var(--color-orange)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                AgriTech Tools & Hardware
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-orange)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Waste Management Systems
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-orange)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Health & Welfare Networks
              </li>
            </ul>
          </div>

          {/* Card 3: Harvest */}
          <div className="track-card pink-card glass-panel">
            <div className="track-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="track-title">The Harvest</h3>
            <p className="track-desc">Product launching, pitching, and commercialization. Learn how to transform code into working social businesses.</p>
            <ul className="track-bullets">
              <li>
                <svg width="16" height="16" fill="var(--color-pink)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Digital Tourism Commerce
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-pink)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Decentralized Logistics
              </li>
              <li>
                <svg width="16" height="16" fill="var(--color-pink)" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4"/></svg>
                Public Service Dashboards
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        /* Tracks Grid Layout */
        .tracks-section {
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .tracks-section .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .tracks-section .section-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        .tracks-section .section-desc {
          font-size: 1.1rem;
          opacity: 0.7;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .track-card {
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          position: relative;
        }

        .track-card:hover {
          transform: translateY(-8px);
        }

        .track-card.green-card {
          border-top: 6px solid var(--color-green);
        }
        .track-card.green-card:hover {
          box-shadow: 0 12px 40px rgba(40, 107, 59, 0.12);
        }

        .track-card.orange-card {
          border-top: 6px solid var(--color-orange);
        }
        .track-card.orange-card:hover {
          box-shadow: 0 12px 40px rgba(229, 126, 37, 0.12);
        }

        .track-card.pink-card {
          border-top: 6px solid var(--color-pink);
        }
        .track-card.pink-card:hover {
          box-shadow: 0 12px 40px rgba(216, 67, 129, 0.12);
        }

        .track-icon {
          width: 55px;
          height: 55px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .green-card .track-icon { background: rgba(40, 107, 59, 0.1); color: var(--color-green); }
        .orange-card .track-icon { background: rgba(229, 126, 37, 0.1); color: var(--color-orange); }
        .pink-card .track-icon { background: rgba(216, 67, 129, 0.1); color: var(--color-pink); }

        .track-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--color-black);
        }

        .track-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.75;
          margin-bottom: 20px;
        }

        .track-bullets {
          list-style: none;
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .track-bullets li {
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .track-bullets svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .tracks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
