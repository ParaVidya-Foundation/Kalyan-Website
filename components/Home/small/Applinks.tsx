"use client";

import React from "react";
import styled from "styled-components";

const Applinks: React.FC = () => {
  return (
    <Wrapper>
      <ButtonGroup>
        {/* Google Play */}
        <StoreButton
          href="https://play.google.com/store/apps/details?id=co.khal.qpvln&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on Google Play"
        >
          <Icon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-hidden
          >
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
          </Icon>

          <TextWrapper>
            <TextLine1>GET IT ON</TextLine1>
            <TextLine2>Google Play</TextLine2>
          </TextWrapper>
        </StoreButton>

        {/* App Store */}
        <StoreButton
          href="https://apps.apple.com/us/app/classplus/id1324522260"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on App Store"
        >
          <Icon
            viewBox="-52.01 0 560.035 560.035"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
          </Icon>

          <TextWrapper>
            <TextLine1>Download on</TextLine1>
            <TextLine2>App Store</TextLine2>
          </TextWrapper>
        </StoreButton>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Applinks;

/* =========================
   STYLES — DARK THEME
========================= */

const Wrapper = styled.div`
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const StoreButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 14px 20px;

  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.02)
    ),
    #0b0b0e;

  color: #ffffff;
  text-decoration: none;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  transition:
    transform 220ms cubic-bezier(.19,1,.22,1),
    box-shadow 220ms cubic-bezier(.19,1,.22,1),
    border-color 220ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(168, 85, 247, 0.6);
    box-shadow:
      0 14px 50px rgba(168, 85, 247, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
  }
`;

const Icon = styled.svg`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  color: #ffffff;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.05;
`;

const TextLine1 = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  opacity: 0.75;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
`;

const TextLine2 = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;
