"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    department: "",
    yearOfStudy: "",
    district: "",
    teamName: "",
    teamMembers: "",
    ideaTitle: "",
    description: "",
    agree: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, submit to backend
    alert("Thank you for registering for Vision Hack 2026!");
    console.log("Form data submitted:", formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">
            READY TO <span className="text-green">BUILD THE FUTURE?</span>
          </h2>
          <p className="contact-desc">
            Join Vision Hack 2026 and become part of a state wide movement to create technology solutions that empower communities and shape Kerala's digital future.
          </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Aiswarya Krishnan"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@college.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+91 98xxxxxx"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* College Name */}
              <div className="form-group">
                <label htmlFor="collegeName">College Name</label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  placeholder="Government Engineering College"
                  value={formData.collegeName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Department */}
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Computer Science"
                  value={formData.department}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Year of Study */}
              <div className="form-group">
                <label htmlFor="yearOfStudy">Year of Study</label>
                <input
                  type="text"
                  id="yearOfStudy"
                  name="yearOfStudy"
                  placeholder="3rd Year"
                  value={formData.yearOfStudy}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* District */}
              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  placeholder="Ernakulam"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Team Name */}
              <div className="form-group">
                <label htmlFor="teamName">Team Name</label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  placeholder="Code Coconuts"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Number of Team Members */}
              <div className="form-group">
                <label htmlFor="teamMembers">Number of Team Members</label>
                <input
                  type="number"
                  id="teamMembers"
                  name="teamMembers"
                  placeholder="4"
                  value={formData.teamMembers}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Project Idea Title */}
              <div className="form-group">
                <label htmlFor="ideaTitle">Project Idea Title</label>
                <input
                  type="text"
                  id="ideaTitle"
                  name="ideaTitle"
                  placeholder="Skill@Call concept"
                  value={formData.ideaTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Short Description */}
              <div className="form-group col-span-2">
                <label htmlFor="description">Short Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="In a few sentences, describe the problem you want to solve."
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <label htmlFor="agree">
                I agree to the <a href="#" className="text-green-underline">rules and regulations</a> of Vision Hack 2026.
              </label>
            </div>

            {/* Submit Button */}
            <div className="form-submit-container">
              <button type="submit" className="form-submit-btn">
                REGISTER FOR VISION HACK 2026
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "8px" }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>

            {/* Feature Badges */}
            <div className="form-badges">
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Free for all students</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Mentorship included</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Path to deployment</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        /* Contact Section Styles */
        .contact-section {
          background: linear-gradient(135deg, #e3f4e3 0%, #ffffff 100%);
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .contact-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 50px auto;
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: 3.2rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1.15;
          color: var(--color-black);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .contact-title .text-green {
          color: var(--color-green);
        }

        .contact-desc {
          font-size: 1.05rem;
          color: var(--color-gray);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-form-container {
          max-width: 1000px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 32px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(40, 107, 59, 0.05);
          border: 1px solid rgba(40, 107, 59, 0.08);
        }

        .contact-form {
          width: 100%;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px 30px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .form-group.col-span-2 {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-black);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 20px;
          font-size: 0.95rem;
          font-family: var(--font-display);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background-color: #ffffff;
          color: var(--color-black);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #b0b0b0;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-green);
          box-shadow: 0 0 0 3px rgba(40, 107, 59, 0.1);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 35px;
          font-size: 0.95rem;
          color: var(--color-black);
          text-align: left;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--color-green);
          cursor: pointer;
        }

        .checkbox-group label {
          cursor: pointer;
          user-select: none;
        }

        .text-green-underline {
          color: var(--color-green);
          text-decoration: underline;
          font-weight: 600;
        }

        .form-submit-container {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .form-submit-btn {
          background-color: var(--color-green);
          color: #ffffff;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          padding: 16px 36px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(40, 107, 59, 0.2);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .form-submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(40, 107, 59, 0.35);
          background-color: #1f502c;
        }

        .form-submit-btn:active {
          transform: translateY(-1px);
        }

        .form-badges {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-black);
          opacity: 0.85;
        }

        .badge-icon {
          width: 18px;
          height: 18px;
          background-color: rgba(40, 107, 59, 0.1);
          color: var(--color-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: bold;
        }

        @media (max-width: 992px) {
          .contact-form-container {
            padding: 35px 24px;
            max-width: 90%;
          }
          .form-grid {
            grid-template-columns: 1fr;
          }
          .form-group.col-span-2 {
            grid-column: span 1;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 60px 0;
          }
          .contact-title {
            font-size: 2.2rem !important;
          }
          .form-badges {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
