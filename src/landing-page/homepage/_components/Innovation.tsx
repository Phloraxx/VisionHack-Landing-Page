
import Image from "next/image";
import rocketLogo from "../../../../public/rocket.png";

export default function Innovation() {
  return (
    <section id="innovation" className="innovation-section">
      <div className="container">
        <div className="innovation-header">
          <h2 className="innovation-title">
            REIMAGINING <span className="text-green">COMMUNITY</span>
            <br />
            <span className="text-green">INNOVATION</span>
          </h2>
          <p className="innovation-desc">
            A platform where student innovation meets community impact — and where ideas travel from notebook to deployment.
          </p>
        </div>

        <div className="innovation-grid">
          {/* Card 1 */}
          <div className="innovation-card">
            <div className="innovation-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="innovation-icon">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="innovation-card-title">Community Impact</h3>
            <p className="innovation-card-desc">
              Create technology that serves real people and communities across Kerala.
            </p>
          </div>

          {/* Card 2 */}
          <div className="innovation-card">
            <div className="innovation-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="innovation-icon">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6" />
                <path d="M10 22h4" />
              </svg>
            </div>
            <h3 className="innovation-card-title">Innovation</h3>
            <p className="innovation-card-desc">
              Solve meaningful challenges through creative, first-principles thinking.
            </p>
          </div>

          <div className="innovation-card">
            <div className="innovation-icon-wrapper">
              <Image
                src={rocketLogo}
                alt="Digital Transformation Rocket Icon"
                width={24}
                height={24}
                style={{ width: "24px", height: "24px", objectFit: "contain", display: "block", filter: "invert(1)" }}
              />
            </div>
            <h3 className="innovation-card-title">Digital Transformation</h3>
            <p className="innovation-card-desc">
              Build scalable, accessible solutions for Kerala's future economy.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Innovation Section Styles */
        .innovation-section {
          padding: 80px 0;
          position: relative;
          z-index: 2;
        }

        .innovation-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .innovation-title {
          font-size: 2.8rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin-bottom: 24px;
          color: var(--color-black);
        }

        .innovation-title .text-green {
          color: var(--color-green);
        }

        .innovation-desc {
          font-size: 1.5rem;
          max-width: 900px;
          line-height: 1.45;
          color: var(--color-black);
          font-weight: 500;
        }

        .innovation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .innovation-card {
          background: radial-gradient(circle at top right, rgba(40, 107, 59, 0.08) 0%, rgba(255, 255, 255, 0) 65%), #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.15);
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .innovation-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.06);
        }

        .innovation-icon-wrapper {
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

        .innovation-icon {
          width: 22px;
          height: 22px;
        }

        .innovation-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 12px;
        }

        .innovation-card-desc {
          font-size: 1rem;
          color: var(--color-gray);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .innovation-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px;
          }
          .innovation-title {
            font-size: 2rem !important;
          }
          .innovation-desc {
            font-size: 1.25rem !important;
          }
          .innovation-header {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}
