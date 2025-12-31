"use client";

import { useState } from "react";
import LoginForm from "@/components/login/loginform";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="login-page">
      <LoginForm
        email={email}
        password={password}
        rememberMe={rememberMe}
        setEmail={setEmail}
        setPassword={setPassword}
        setRememberMe={setRememberMe}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: url("/sky.jpg") center / cover no-repeat;
        }
      `
      }} />
    </div>
  );
}
