
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-white">
      <div className="container">
        <div className="footer-grid">
          {/* Left Column: Logo & Description */}
          <div className="footer-left-col">
            <div className="footer-logo-container">
              <Image
                src="/logo-v2.png"
                alt="Visionhack Logo"
                width={200}
                height={70}
                style={{ width: "auto", height: "auto", maxHeight: "55px", display: "block" }}
              />
            </div>
            <p className="footer-desc">
              A statewide innovation challenge by KDISC, Vinjana Keralam, Kudumbashree, and µLearn — empowering students to build Kerala's digital future.
            </p>
            <div className="footer-org-pills">
              <span className="org-pill">KDISC</span>
              <span className="org-pill">Vinjana Keralam</span>
              <span className="org-pill">Kudumbashree</span>
              <span className="org-pill">μLearn</span>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="footer-middle-col">
            <h4 className="footer-title-header">QUICK LINKS</h4>
            <ul className="footer-nav-links">
              <li><a href="#hero">Vision</a></li>
              <li><a href="#tracks">Challenge</a></li>
              <li><a href="#countdown">Timeline</a></li>
              <li><a href="#footer">Committee</a></li>
              <li><a href="#faqs">FAQ</a></li>
              <li><a href="#register" className="link-register">Register</a></li>
            </ul>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="footer-right-col">
            <h4 className="footer-title-header">CONTACT</h4>
            <ul className="footer-contact-info">
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:hello@visionhack.in">hello@visionhack.in</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <a href="tel:+914840000000">+91 484 000 0000</a>
              </li>
              <li>
                <span className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span>Thiruvananthapuram, Kerala</span>
              </li>
            </ul>

            <div className="footer-social-links">
              <a href="#" className="social-circle">IG</a>
              <a href="#" className="social-circle">X</a>
              <a href="#" className="social-circle">LI</a>
              <a href="#" className="social-circle">YT</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            &copy; 2026 Vision Hack. All rights reserved.
          </div>
          <div className="bottom-right">
            Made with care in Kerala 🌴
          </div>
        </div>
      </div>

      <style>{`
        /* White Footer Layout Styles */
        .footer-white {
          background-color: #ffffff;
          color: var(--color-black);
          padding: 80px 0 30px 0;
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .footer-white .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 50px;
          margin-bottom: 50px;
          align-items: start;
        }

        .footer-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-logo-container {
          margin-bottom: 25px;
        }

        .footer-desc {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-black);
          opacity: 0.9;
          margin-bottom: 25px;
          max-width: 440px;
        }

        .footer-org-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .org-pill {
          background-color: #FAF8F5;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 12px;
          padding: 6px 14px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-gray);
          font-family: var(--font-display);
        }

        .footer-title-header {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-black);
          margin-bottom: 25px;
          text-align: left;
        }

        .footer-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          text-align: left;
        }

        .footer-nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-black);
          opacity: 0.75;
          transition: opacity 0.2s, color 0.2s;
        }

        .footer-nav-links a:hover {
          opacity: 1;
          color: var(--color-green);
        }

        .footer-nav-links .link-register {
          color: var(--color-green);
          font-weight: 700;
          opacity: 1;
        }

        .footer-contact-info {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
          margin-bottom: 25px;
        }

        .footer-contact-info li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-black);
          opacity: 0.85;
        }

        .footer-contact-info a {
          color: var(--color-black);
          transition: color 0.2s;
        }

        .footer-contact-info a:hover {
          color: var(--color-green);
        }

        .contact-icon {
          color: var(--color-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-social-links {
          display: flex;
          gap: 12px;
        }

        .social-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background-color: #ffffff;
          color: var(--color-black);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-display);
          transition: all 0.2s;
        }

        .social-circle:hover {
          border-color: var(--color-green);
          color: var(--color-green);
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(40, 107, 59, 0.08);
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-gray);
          opacity: 0.85;
        }

        @media (max-width: 1200px) {
          .footer-grid, .footer-bottom-bar {
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
