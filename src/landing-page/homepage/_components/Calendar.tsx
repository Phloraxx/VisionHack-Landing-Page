"use client";



export default function Calendar() {
  return (
    <section id="calendar" className="calendar-section">
      <div className="container">
        <div className="calendar-header">
          <h2 className="calendar-title">
            MARK YOUR <span className="text-green">CALENDAR</span>
          </h2>
        </div>

        <div className="calendar-grid">
          {/* Card 1 */}
          <div className="calendar-card">
            <div className="calendar-card-top">
              <span className="calendar-tag">M01</span>
              <div className="calendar-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="calendar-date">01 Jul 2026</h3>
            <h4 className="calendar-label">Registration Opens</h4>
            <p className="calendar-desc">
              Sign up your team across any participating institution.
            </p>
          </div>

          {/* Card 2 */}
          <div className="calendar-card">
            <div className="calendar-card-top">
              <span className="calendar-tag">M02</span>
              <div className="calendar-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="calendar-date">15 Jul — 15 Aug</h3>
            <h4 className="calendar-label">Internal Hackathon</h4>
            <p className="calendar-desc">
              Institution-level innovation sprints across Kerala.
            </p>
          </div>

          {/* Card 3 */}
          <div className="calendar-card">
            <div className="calendar-card-top">
              <span className="calendar-tag">M03</span>
              <div className="calendar-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="calendar-date">16 — 20 Aug</h3>
            <h4 className="calendar-label">Institution Nominations</h4>
            <p className="calendar-desc">
              Top performers nominated to state-level rounds.
            </p>
          </div>

          {/* Card 4 */}
          <div className="calendar-card">
            <div className="calendar-card-top">
              <span className="calendar-tag">M04</span>
              <div className="calendar-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="calendar-date">30 Aug 2026</h3>
            <h4 className="calendar-label">State Semifinals</h4>
            <p className="calendar-desc">
              Cross-district showdown with industry juries.
            </p>
          </div>

          {/* Card 5 */}
          <div className="calendar-card">
            <div className="calendar-card-top">
              <span className="calendar-tag">M05</span>
              <div className="calendar-icon-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
            <h3 className="calendar-date">20 Sep 2026</h3>
            <h4 className="calendar-label">Grand Finale</h4>
            <p className="calendar-desc">
              Demo day, deployment commitments, awards night.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Calendar Section Styles */
        .calendar-section {
          background-color: #ffffff;
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .calendar-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .calendar-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
          text-transform: uppercase;
        }

        .calendar-title .text-green {
          color: var(--color-green);
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .calendar-card {
          background: #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.08);
          border-radius: 20px;
          padding: 30px 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .calendar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.06);
          border-color: rgba(40, 107, 59, 0.18);
        }

        .calendar-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 24px;
        }

        .calendar-tag {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-green);
          letter-spacing: 0.5px;
        }

        .calendar-icon-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(40, 107, 59, 0.1);
          color: var(--color-green);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .calendar-date {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--color-black);
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .calendar-label {
          font-family: var(--font-display);
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .calendar-desc {
          font-size: 0.9rem;
          color: var(--color-gray);
          line-height: 1.45;
        }

        @media (max-width: 1200px) {
          .calendar-grid, .calendar-header {
            max-width: 90%;
          }
        }

        @media (max-width: 992px) {
          .calendar-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .calendar-section {
            padding: 60px 0;
          }
          .calendar-title {
            font-size: 2.2rem !important;
          }
          .calendar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .calendar-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
