"use client";



interface Leader {
  initials: string;
  name: string;
  role: string;
  org: string;
}

const leaders: Leader[] = [
  {
    initials: "VU",
    name: "Dr. P. V. Unnikrishnan",
    role: "Chairperson",
    org: "KDISC"
  },
  {
    initials: "MN",
    name: "Ar. Meera Nair",
    role: "Program Director",
    org: "Vinjana Keralam"
  },
  {
    initials: "AM",
    name: "Smt. Anjali Menon",
    role: "Executive Director",
    org: "Kudumbashree"
  },
  {
    initials: "JS",
    name: "Mr. Joseph Sebastian",
    role: "Community Lead",
    org: "µLearn"
  },
  {
    initials: "RP",
    name: "Dr. R. Prakash",
    role: "Academic Advisor",
    org: "APJ KTU"
  },
  {
    initials: "LP",
    name: "Ms. Lakshmi Pillai",
    role: "Mentor Network",
    org: "Startup Mission"
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="leadership-section">
      <div className="container">
        <div className="leadership-header">
          <h2 className="leadership-title">
            BACKED BY <span className="text-green">KERALA'S</span>
            <br />
            <span className="text-green">LEADERSHIP</span>
          </h2>
          <p className="leadership-desc">
            A coalition of government bodies, academic institutions, and community networks championing the next wave of public-good innovation.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leadership-card">
              <div className="leader-avatar">
                {leader.initials}
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <span className="leader-org-badge">{leader.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Leadership Section Styles */
        .leadership-section {
          background-color: #ffffff;
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .leadership-header {
          text-align: left;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }

        .leadership-title {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .leadership-title .text-green {
          color: var(--color-green);
        }

        .leadership-desc {
          font-size: 1.05rem;
          color: var(--color-gray);
          line-height: 1.5;
          max-width: 700px;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .leadership-card {
          background: #ffffff;
          border: 1px solid rgba(40, 107, 59, 0.08);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
        }

        .leadership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(40, 107, 59, 0.06);
          border-color: rgba(40, 107, 59, 0.18);
        }

        .leader-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: var(--color-green);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(40, 107, 59, 0.15);
        }

        .leader-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .leader-name {
          font-family: var(--font-display);
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 4px;
          line-height: 1.2;
        }

        .leader-role {
          font-size: 0.88rem;
          color: var(--color-gray);
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .leader-org-badge {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-green);
          background-color: rgba(40, 107, 59, 0.1);
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        @media (max-width: 1200px) {
          .leadership-grid, .leadership-header {
            max-width: 90%;
          }
        }

        @media (max-width: 992px) {
          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .leadership-section {
            padding: 60px 0;
          }
          .leadership-title {
            font-size: 2.2rem !important;
          }
        }

        @media (max-width: 576px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
