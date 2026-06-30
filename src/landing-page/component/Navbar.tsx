"use client";

import { useState } from "react";

import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Sticky Header Nav */}
      <header className="glass-panel">
        {/* Logo from public folder */}
        <a href="#hero" className="logo-visionhack-container">
          <Image
            src="/logo-v2.png"
            alt="Visionhack Logo"
            width={280}
            height={100}
            priority
            style={{ width: "auto", height: "auto", maxHeight: "70px", display: "block" }}
          />
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Vision</a></li>
            <li><a href="#tracks">Challenge</a></li>
            <li><a href="#countdown">Timeline</a></li>
            <li><a href="#footer">Committee</a></li>
            <li><a href="#faqs">FAQ</a></li>
          </ul>
        </nav>

        <div>
          <a href="https://portal.mulearn.org" id="btn-header-join" className="btn-register-pill">
            Register ↗
          </a>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <ul className="mobile-drawer-links">
          <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Vision</a></li>
          <li><a href="#tracks" onClick={() => setMobileMenuOpen(false)}>Challenge</a></li>
          <li><a href="#countdown" onClick={() => setMobileMenuOpen(false)}>Timeline</a></li>
          <li><a href="#footer" onClick={() => setMobileMenuOpen(false)}>Committee</a></li>
          <li><a href="#faqs" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
        </ul>
        <a
          href="https://portal.mulearn.org"
          onClick={() => setMobileMenuOpen(false)}
          className="btn-register-pill"
          style={{ width: "100%", textAlign: "center", display: "block", marginTop: "20px" }}
        >
          Register ↗
        </a>
      </div>

      <style>{`
        /* Header Navigation Styles */
        header.glass-panel {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100%;
          height: 102px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 50px;
          z-index: 100;
          border-radius: 0;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: none;
          transform: none;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .logo-visionhack-container {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .btn-register-pill {
          background-color: var(--color-black);
          color: #ffffff !important;
          border-radius: 50px;
          padding: 10px 24px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, background-color 0.2s;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-register-pill:hover {
          transform: translateY(-1px) scale(1.02);
          background-color: #1a1a1a;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .nav-links a {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-black);
          opacity: 0.75;
          transition: opacity 0.2s, color 0.2s;
        }

        .nav-links a:hover {
          opacity: 1;
          color: var(--color-green);
        }

        /* Hamburger Button */
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 110;
        }

        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2.5px;
          background-color: var(--color-black);
          margin: 5px 0;
          transition: all 0.3s;
          border-radius: 2px;
        }

        /* Mobile Hamburger Transform */
        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Drawer Overlay */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: rgba(250, 248, 245, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
          z-index: 105;
          display: flex;
          flex-direction: column;
          padding: 100px 40px 40px;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-left: 1px solid rgba(40, 107, 59, 0.15);
        }

        .mobile-drawer.open {
          right: 0;
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 25px;
          list-style: none;
          margin-bottom: 50px;
        }

        .mobile-drawer-links a {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-black);
          transition: color 0.2s;
        }

        .mobile-drawer-links a:hover {
          color: var(--color-green);
        }

        @media (max-width: 768px) {
          header.glass-panel {
            padding: 0 20px;
            width: 100%;
            max-width: 100%;
            top: 0;
            left: 0;
            transform: none;
            height: 80px;
            border-radius: 0;
          }
          .nav-links {
            display: none;
          }
          header .button-primary {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
