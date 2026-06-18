"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    // Set target date (e.g. October 24, 2026)
    const targetDate = new Date("2026-10-24T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsLive(true);
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num: number) => {
    return String(num).padStart(2, "0");
  };

  return (
    <section id="countdown" className="countdown-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">COUNTING DOWN TO LAUNCH</h2>
          <p className="section-desc">
            Vision Hack 2026 is a statewide innovation challenge that brings together Kerala's brightest student innovators to reimagine the future of Kudumbashree through technology, creativity, and community-driven problem solving.
          </p>
        </div>

        <div className="countdown-grid">
          <div className="countdown-card">
            <div className="countdown-num">{isLive ? "00" : formatTime(timeLeft.days)}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-num">{isLive ? "00" : formatTime(timeLeft.hours)}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-num">{isLive ? "00" : formatTime(timeLeft.minutes)}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-card">
            <div className="countdown-num">{isLive ? "00" : formatTime(timeLeft.seconds)}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        <div className="countdown-buttons">
          <a href="#rulebook" className="countdown-btn-green">
            Rule Book
          </a>
          <a href="#problems" className="countdown-btn-outline">
            Explore Problem Statements
          </a>
        </div>
      </div>

      <style>{`
        /* Countdown Card Grid */
        .countdown-section {
          padding: 60px 0;
          position: relative;
          z-index: 2;
        }

        #countdown .section-header {
          text-align: left;
          max-width: 860px;
          margin: 0 auto 40px auto;
        }

        #countdown .section-title {
          font-size: 2.2rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.5px;
          margin-bottom: 20px;
          text-align: left;
        }

        #countdown .section-desc {
          font-size: 1.25rem;
          opacity: 0.95;
          max-width: 860px;
          margin: 0;
          text-align: left;
          line-height: 1.5;
        }

        .countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 860px;
          margin: 0 auto;
        }

        .countdown-card {
          background-color: #D8D8D8;
          border: 1.5px solid var(--color-green);
          border-radius: 12px;
          padding: 24px 16px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: none;
        }

        .countdown-num {
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--color-black);
          line-height: 1;
          margin-bottom: 8px;
        }

        .countdown-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-black);
          text-transform: none;
          letter-spacing: normal;
        }

        .countdown-buttons {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 40px;
        }

        .countdown-btn-green {
          background-color: var(--color-green);
          color: #ffffff !important;
          border: none;
          padding: 12px 32px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .countdown-btn-green:hover {
          background-color: #1f502c;
          transform: translateY(-1px);
        }

        .countdown-btn-outline {
          background-color: #ffffff;
          color: var(--color-green) !important;
          border: 1.5px solid var(--color-green);
          padding: 12px 32px;
          border-radius: 12px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .countdown-btn-outline:hover {
          background-color: rgba(40, 107, 59, 0.05);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .countdown-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            padding: 0 10px;
          }
          .countdown-buttons {
            flex-direction: column;
            gap: 12px;
            padding: 0 20px;
            align-items: center;
          }
          .countdown-btn-green, .countdown-btn-outline {
            width: 100%;
            max-width: 320px;
          }
          #countdown .section-header {
            padding: 0 10px;
          }
        }
      `}</style>
    </section>
  );
}
