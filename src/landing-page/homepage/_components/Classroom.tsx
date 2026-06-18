"use client";



export default function Classroom() {
  return (
    <section id="classroom" className="classroom-section">
      <div className="container">
        <div className="classroom-header">
          <h2 className="classroom-title">
            A journey from <span className="text-green">classroom</span>
            <br />
            <span className="text-green">to deployment</span>
          </h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* Step 1 */}
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <span className="timeline-step">STEP 01</span>
              <h3 className="timeline-item-title">Student Registration</h3>
              <p className="timeline-item-desc">
                Sign up individually or as a team via your institution.
              </p>
            </div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div className="timeline-space"></div>
          </div>

          {/* Step 2 */}
          <div className="timeline-item timeline-right">
            <div className="timeline-space"></div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-step">STEP 02</span>
              <h3 className="timeline-item-title">Institution-Level Hackathon</h3>
              <p className="timeline-item-desc">
                Internal hackathons run by participating colleges.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <span className="timeline-step">STEP 03</span>
              <h3 className="timeline-item-title">Top 5 Teams Selected</h3>
              <p className="timeline-item-desc">
                Each institution nominates its strongest teams.
              </p>
            </div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                <path d="M12 2a6 6 0 0 0-6 6v2c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4V8a6 6 0 0 0-6-6z" />
              </svg>
            </div>
            <div className="timeline-space"></div>
          </div>

          {/* Step 4 */}
          <div className="timeline-item timeline-right">
            <div className="timeline-space"></div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-step">STEP 04</span>
              <h3 className="timeline-item-title">State-Level Semifinals</h3>
              <p className="timeline-item-desc">
                Teams across Kerala converge to defend their ideas.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-item timeline-left">
            <div className="timeline-content">
              <span className="timeline-step">STEP 05</span>
              <h3 className="timeline-item-title">Grand Finale</h3>
              <p className="timeline-item-desc">
                A statewide showcase, mentorship and demo day.
              </p>
            </div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <div className="timeline-space"></div>
          </div>

          {/* Step 6 */}
          <div className="timeline-item timeline-right">
            <div className="timeline-space"></div>
            <div className="timeline-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.5 2.5 6l11.5-11.5M12 2c5.5 0 10 4.5 10 10 0 2.5-1 4.5-2.5 6L8 6.5" />
                <path d="M9 15l-3 3M15 9l3-3M16 5l3 3M5 16l3 3" />
              </svg>
            </div>
            <div className="timeline-content">
              <span className="timeline-step">STEP 06</span>
              <h3 className="timeline-item-title">Future Deployment</h3>
              <p className="timeline-item-desc">
                Winning ideas enter the Kudumbashree pilot pipeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Classroom Timeline Section */
        .classroom-section {
          background-color: #eef8f3; /* very soft light mint green tint */
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .classroom-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 60px auto;
        }

        .classroom-title {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
        }

        .classroom-title .text-green {
          color: var(--color-green);
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background-color: rgba(40, 107, 59, 0.2);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .timeline-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 4px 10px rgba(40, 107, 59, 0.2);
          z-index: 3;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .timeline-item:hover .timeline-badge {
          transform: scale(1.1);
          box-shadow: 0 6px 15px rgba(40, 107, 59, 0.35);
        }

        .timeline-content {
          padding: 10px 20px;
          transition: transform 0.25s ease;
        }

        .timeline-left .timeline-content {
          text-align: right;
        }

        .timeline-right .timeline-content {
          text-align: left;
        }

        .timeline-step {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--color-green);
          letter-spacing: 1px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .timeline-item-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 8px;
        }

        .timeline-item-desc {
          font-size: 0.95rem;
          color: var(--color-gray);
          line-height: 1.45;
          max-width: 380px;
          display: inline-block;
        }

        .timeline-left .timeline-item-desc {
          margin-left: auto;
        }

        /* Responsive Layout */
        @media (max-width: 1200px) {
          .classroom-header, .timeline-container {
            max-width: 90%;
          }
        }

        @media (max-width: 768px) {
          .classroom-section {
            padding: 60px 0;
          }
          
          .classroom-title {
            font-size: 2.2rem !important;
          }

          .timeline-line {
            left: 20px;
            transform: none;
          }

          .timeline-item {
            grid-template-columns: 40px 1fr;
            gap: 20px;
          }

          .timeline-item.timeline-left {
            direction: ltr;
          }

          .timeline-left .timeline-content, .timeline-right .timeline-content {
            text-align: left;
            padding: 5px 0;
          }

          .timeline-space {
            display: none;
          }

          .timeline-badge {
            margin: 0;
            grid-column: 1;
          }

          .timeline-content {
            grid-column: 2;
          }

          .timeline-left .timeline-item-desc {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
