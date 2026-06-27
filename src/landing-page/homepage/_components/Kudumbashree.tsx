"use client";



export default function Kudumbashree() {
  return (
    <section id="kudumbashree" className="kudumbashree-section">
      <div className="container">
        <div className="kudumbashree-header">
          <h2 className="kudumbashree-title">
            Next-Generation
            <br />
            <span className="text-green">Kudumbashree</span>
          </h2>
        </div>

        <div className="kudumbashree-grid">
          {/* Card 1 */}
          <div className="kudumbashree-card">
            <div className="kudumbashree-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="kudumbashree-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="kudumbashree-card-title">Skill Call</h3>
            <p className="kudumbashree-card-desc">
              Enable skilled Kudumbashree members to connect seamlessly with citizens seeking services — across districts, languages, and time zones.
            </p>
          </div>

          {/* Card 2 */}
          <div className="kudumbashree-card">
            <div className="kudumbashree-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="kudumbashree-icon">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="kudumbashree-card-title">Shop Door</h3>
            <p className="kudumbashree-card-desc">
              Create smarter digital commerce experiences that help Kudumbashree products reach more customers, from neighborhoods to nation.
            </p>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="kudumbashree-challenge-box">
          <div className="kudumbashree-challenge-text">
            <h4 className="kudumbashree-challenge-tag">CHALLENGE STATEMENT</h4>
            <p className="kudumbashree-challenge-desc">
              How can technology create a more connected, efficient, and accessible ecosystem for Kudumbashree's services and products?
            </p>
          </div>
          <div className="kudumbashree-challenge-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="kudumbashree-challenge-icon">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <circle cx="6" cy="18" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        /* Kudumbashree Section Styles */
        .kudumbashree-section {
          background-color: #e2f4e9;
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .kudumbashree-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .kudumbashree-title {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
        }

        .kudumbashree-title .text-green {
          color: var(--color-green);
        }

        .kudumbashree-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto 30px auto;
        }

        .kudumbashree-card {
          background: radial-gradient(circle at top right, rgba(40, 107, 59, 0.08) 0%, rgba(255, 255, 255, 0) 65%), #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.15);
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .kudumbashree-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.06);
        }

        .kudumbashree-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--color-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .kudumbashree-icon {
          width: 22px;
          height: 22px;
        }

        .kudumbashree-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .kudumbashree-card-desc {
          font-size: 1.02rem;
          color: var(--color-gray);
          line-height: 1.55;
        }

        /* Bottom Challenge Box */
        .kudumbashree-challenge-box {
          background-color: #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.15);
          border-radius: 20px;
          padding: 30px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }

        .kudumbashree-challenge-text {
          flex: 1;
        }

        .kudumbashree-challenge-tag {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-green);
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .kudumbashree-challenge-desc {
          font-size: 1.05rem;
          color: var(--color-black);
          font-weight: 500;
          line-height: 1.5;
        }

        .kudumbashree-challenge-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background-color: var(--color-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .kudumbashree-challenge-icon {
          width: 26px;
          height: 26px;
        }

        @media (max-width: 1024px) {
          .kudumbashree-grid, .kudumbashree-header, .kudumbashree-challenge-box {
            max-width: 90%;
          }
        }

        @media (max-width: 768px) {
          .kudumbashree-section {
            padding: 60px 0;
          }
          .kudumbashree-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .kudumbashree-title {
            font-size: 2.2rem !important;
          }
          .kudumbashree-challenge-box {
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 20px;
            gap: 20px;
          }
          .kudumbashree-challenge-icon-wrapper {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
