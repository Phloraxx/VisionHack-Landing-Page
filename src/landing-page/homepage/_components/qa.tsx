"use client";

import { useState } from "react";

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    question: "Who can participate?",
    answer: "Any student enrolled in a recognized Kerala-based engineering institution can participate. Interdisciplinary teams are welcomed and encouraged."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, there is absolutely no registration fee. Entry to GTech μlearn Visionhack '26 is completely free of charge for all eligible students."
  },
  {
    question: "Can students form teams later?",
    answer: "Yes, you can register individually and form or finalize your teams with other registered peers before the internal hackathon phase begins."
  },
  {
    question: "How many teams can an institution nominate?",
    answer: "Each participating institution can nominate up to 5 of their top-performing teams to represent them at the state-level semifinals."
  },
  {
    question: "Are interdisciplinary teams allowed?",
    answer: "Yes, absolutely! We highly encourage teams that combine engineering students with designers, business students, or domain experts to build holistic solutions."
  },
  {
    question: "What happens after the semifinals?",
    answer: "The top-performing teams from the semifinals will advance to the Grand Finale, where they receive expert mentorship, showcase working prototypes, and pitch for deployment and pilot project opportunities."
  }
];

export default function Qa() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="qa" className="qa-section">
      <div className="container">
        <div className="qa-layout">
          {/* Left Column: Heading and Subtitle */}
          <div className="qa-left-col">
            <h2 className="qa-title">
              QUESTIONS,
              <br />
              <span className="text-green">ANSWERED</span>
            </h2>
            <p className="qa-subtitle">
              Couldn't find what you're looking for? Reach out to the Vision Hack team and we'll get back to you within 48 hours.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="qa-right-col">
            <div className="qa-list">
              {qaData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={`qa-item ${isOpen ? "active" : ""}`}>
                    <button className="qa-trigger" onClick={() => toggleItem(index)}>
                      <span className="qa-question">{item.question}</span>
                      <span className="qa-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease"
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div className="qa-content-wrapper">
                      <div className="qa-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* QA Section Styles */
        .qa-section {
          background-color: #e3f4e3; /* Soft light mint green background */
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .qa-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
        }

        .qa-left-col {
          text-align: left;
          position: sticky;
          top: 100px;
        }

        .qa-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.1;
          color: var(--color-black);
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .qa-title .text-green {
          color: var(--color-green);
        }

        .qa-subtitle {
          font-size: 1.05rem;
          color: var(--color-black);
          line-height: 1.5;
          max-width: 380px;
          opacity: 0.95;
        }

        .qa-right-col {
          display: flex;
          flex-direction: column;
        }

        .qa-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .qa-item {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .qa-item:hover {
          box-shadow: 0 8px 25px rgba(40, 107, 59, 0.05);
        }

        .qa-trigger {
          width: 100%;
          padding: 24px 30px;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .qa-question {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-black);
          padding-right: 20px;
        }

        .qa-icon {
          color: var(--color-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .qa-content-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        }

        .qa-item.active .qa-content-wrapper {
          max-height: 1000px; /* High enough limit to contain text */
          transition: max-height 0.4s cubic-bezier(1, 0, 1, 0);
        }

        .qa-content {
          padding: 0 30px 24px 30px;
          font-size: 0.95rem;
          color: var(--color-gray);
          line-height: 1.6;
        }

        @media (max-width: 1200px) {
          .qa-layout {
            max-width: 90%;
            gap: 40px;
          }
        }

        @media (max-width: 992px) {
          .qa-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .qa-left-col {
            position: relative;
            top: 0;
          }
          .qa-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .qa-section {
            padding: 60px 0;
          }
          .qa-title {
            font-size: 2.5rem !important;
          }
          .qa-trigger {
            padding: 20px 24px;
          }
          .qa-content {
            padding: 0 24px 20px 24px;
          }
        }
      `}</style>
    </section>
  );
}
