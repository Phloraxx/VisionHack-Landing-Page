"use client";



export default function Impact() {
  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <div className="impact-header">
          <h2 className="impact-title">
            BUILT ON IMPACT, <span className="text-green">MEASURED</span>
            <br />
            <span className="text-green">IN LIVES</span>
          </h2>
        </div>

        <div className="impact-grid">
          {/* Card 1 */}
          <div className="impact-card">
            <div className="impact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="impact-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="impact-card-number">250+</h3>
            <h4 className="impact-card-label">Real Problems</h4>
            <p className="impact-card-desc">
              Live community challenges sourced from Kudumbashree districts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="impact-card">
            <div className="impact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="impact-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="impact-card-number">4.5M+</h3>
            <h4 className="impact-card-label">Real Users</h4>
            <p className="impact-card-desc">
              Members across Kerala's largest women-led network.
            </p>
          </div>

          {/* Card 3 */}
          <div className="impact-card">
            <div className="impact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="impact-icon">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <line x1="9" y1="18" x2="15" y2="18" />
                <line x1="10" y1="22" x2="14" y2="22" />
              </svg>
            </div>
            <h3 className="impact-card-number">100+</h3>
            <h4 className="impact-card-label">Real Innovation</h4>
            <p className="impact-card-desc">
              Student-built prototypes evaluated by industry mentors.
            </p>
          </div>

          {/* Card 4 */}
          <div className="impact-card">
            <div className="impact-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="impact-icon">
                <path d="M12 22V12" />
                <path d="M12 12a5 5 0 0 0 5-5H12Z" />
                <path d="M12 17a7 7 0 0 1-7-7h7Z" />
              </svg>
            </div>
            <h3 className="impact-card-number">14</h3>
            <h4 className="impact-card-label">Real Change</h4>
            <p className="impact-card-desc">
              Districts deploying winning solutions across Kerala.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Impact Section Styles */
        .impact-section {
          background-color: var(--background-color);
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .impact-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .impact-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
          text-transform: uppercase;
        }

        .impact-title .text-green {
          color: var(--color-green);
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .impact-card {
          background: #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.08);
          border-radius: 20px;
          padding: 35px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .impact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.06);
          border-color: rgba(40, 107, 59, 0.18);
        }

        .impact-icon-wrapper {
          color: var(--color-green);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .impact-icon {
          width: 28px;
          height: 28px;
        }

        .impact-card-number {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--color-black);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .impact-card-label {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .impact-card-desc {
          font-size: 0.95rem;
          color: var(--color-gray);
          line-height: 1.5;
        }

        @media (max-width: 1200px) {
          .impact-grid, .impact-header {
            max-width: 90%;
          }
        }

        @media (max-width: 992px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .impact-section {
            padding: 60px 0;
          }
          .impact-title {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 576px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
