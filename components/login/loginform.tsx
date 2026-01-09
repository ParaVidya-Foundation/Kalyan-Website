"use client";

import React from "react";
import styled from "styled-components";

type LoginFormProps = {
  email: string;
  password: string;
  rememberMe: boolean;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  setRememberMe: (v: boolean) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  rememberMe,
  setEmail,
  setPassword,
  setRememberMe,
}) => {
  return (
    <Wrapper>
      <form className="form">
        <h1 className="title">Sign in with email</h1>
        <p className="subtitle">
          Secure access to your account. No spam. No noise.
        </p>

        {/* EMAIL */}
        <label>Email</label>
        <div className="inputForm">
          <span className="icon">✉</span>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* PASSWORD */}
        <label>Password</label>
        <div className="inputForm">
          <span className="icon">🔒</span>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* OPTIONS */}
        <div className="row">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          <span className="link">Forgot password?</span>
        </div>

        {/* SUBMIT */}
        <button className="submit">Get Started</button>

        {/* SIGN UP */}
        <p className="text">
          Don’t have an account? <span className="link">Sign up</span>
        </p>

        {/* DIVIDER */}
        <div className="divider">
          <span>or continue with</span>
        </div>

        {/* OAUTH */}
        <div className="oauth">
          <button type="button">Google</button>
          <button type="button">Apple</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginForm;

/* ================= STYLES ================= */

const Wrapper = styled.div`
  .form {
    width: 420px;
    padding: 32px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 40px 120px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-family: ui-sans-serif, system-ui, -apple-system;
  }

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #111;
  }

  .subtitle {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  label {
    font-size: 13px;
    font-weight: 500;
    color: #333;
  }

  .inputForm {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 14px;
    gap: 10px;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
    background: white;
    transition: border 0.2s ease;
  }

  .inputForm:focus-within {
    border-color: #6366f1;
  }

  .icon {
    font-size: 16px;
    opacity: 0.6;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .checkbox {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
  }

  .link {
    font-size: 13px;
    color: #6366f1;
    cursor: pointer;
  }

  .submit {
    margin-top: 10px;
    height: 48px;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #111, #333);
    color: white;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.15s ease;
  }

  .submit:hover {
    transform: translateY(-1px);
  }

  .text {
    text-align: center;
    font-size: 13px;
    color: #555;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: #888;
    margin-top: 10px;
  }

  .divider::before,
  .divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }

  .oauth {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .oauth button {
    height: 44px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    background: white;
    font-size: 14px;
    cursor: pointer;
  }
`;
