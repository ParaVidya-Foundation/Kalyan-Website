"use client";

import styled from "styled-components";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  ctaText?: string;
};

export default function PricingCard({
  title,
  price,
  features,
  ctaText = "Get started",
}: PricingCardProps) {
  return (
    <StyledWrapper>
      <div className="card">
        <h3 className="title">{title}</h3>

        <p className="price">{price}</p>

        <ul className="lists">
          {features.map((item, index) => (
            <li key={index} className="list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  fill="#ffffff"
                  d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289Z"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a href="#" className="action">
          {ctaText}
        </a>
      </div>
    </StyledWrapper>
  );
}

/* ---------------- STYLES ---------------- */

const StyledWrapper = styled.div`
  .card {
    max-width: 380px; /* ⬅️ bigger */
    min-height: 520px;
    display: flex;
    flex-direction: column;
    border-radius: 2rem; /* smoother, premium */
    background-color: #000;
    padding: 2.5rem 2.25rem; /* more breathing room */
    box-shadow:
      0 30px 80px rgba(0, 0, 0, 0.55),
      inset 0 0 0 1px rgba(255, 255, 255, 0.06);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow:
      0 45px 120px rgba(0, 0, 0, 0.65),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .title {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
  }

  .price {
    margin-top: 1rem;
    font-size: 3.75rem; /* ⬅️ bigger price */
    font-weight: 600;
    line-height: 1;
    color: #ffffff;
  }

  .lists {
    margin-top: 2.75rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem; /* more spacing */
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.92);
  }

  .list {
    display: flex;
    align-items: center;
    line-height: 1.4;
  }

  .list svg {
    height: 1.1rem;
    width: 1.1rem;
    flex-shrink: 0;
    opacity: 0.95;
  }

  .list span {
    margin-left: 1rem;
  }

  .action {
    margin-top: auto; /* pushes CTA to bottom */
    width: 100%;
    border: 2px solid #ffffff;
    border-radius: 9999px;
    background-color: #ffffff;
    padding: 0.9rem 1.75rem; /* bigger button */
    font-weight: 600;
    text-align: center;
    font-size: 0.95rem;
    color: #000000;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .action:hover {
    background-color: transparent;
    color: #ffffff;
  }
`;
