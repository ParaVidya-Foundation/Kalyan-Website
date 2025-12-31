"use client";

import React from "react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
}) => {
  return (
    <article className="testimonial-card group">
      {/* Glow layer */}
      <span className="glow" aria-hidden />

      {/* Stars */}
      <div className="stars">★★★★★</div>

      {/* Quote */}
      <p className="quote">{quote}</p>

      {/* Footer */}
      <footer className="author">
        <div className="avatar">{name.charAt(0)}</div>
        <div className="identity">
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </div>
      </footer>

      {/* Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .testimonial-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          padding: 1.75rem 1.75rem 1.6rem;
          background: linear-gradient(
            145deg,
            #1a0f0a 0%,
            #24150e 45%,
            #140b07 100%
          );
          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.45),
            inset 0 0 0 1px rgba(255, 200, 90, 0.12);
          transition:
            transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
            box-shadow 0.4s ease;
        }

        /* Hover lift */
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.6),
            inset 0 0 0 1px rgba(255, 200, 90, 0.25);
        }

        /* Soft animated glow */
        .glow {
          position: absolute;
          inset: -40%;
          background: radial-gradient(
            circle,
            rgba(255, 200, 90, 0.18),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .testimonial-card:hover .glow {
          opacity: 1;
        }

        .stars {
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: #f5c26b;
          margin-bottom: 1rem;
        }

        .quote {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #f6d77a;
          margin: 0;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: #140b07;
          background: linear-gradient(
            135deg,
            #f5c26b,
            #ff9f43
          );
          box-shadow: 0 0 0 2px rgba(255, 200, 90, 0.25);
          flex-shrink: 0;
        }

        .identity {
          line-height: 1.2;
        }

        .name {
          font-size: 0.85rem;
          font-weight: 500;
          color: #f6e7b8;
        }

        .role {
          font-size: 0.72rem;
          color: rgba(246, 215, 122, 0.6);
        }
      `}} />
    </article>
  );
};

export default TestimonialCard;