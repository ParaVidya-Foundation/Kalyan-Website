"use client";

import React from "react";
import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(({
  quote,
  name,
  role,
}) => {
  return (
    <article className={`${styles.testimonialCard} group`}>
      {/* Glow layer */}
      <span className={styles.glow} aria-hidden />

      {/* Stars */}
      <div className={styles.stars}>★★★★★</div>

      {/* Quote */}
      <p className={styles.quote}>{quote}</p>

      {/* Footer */}
      <footer className={styles.author}>
        <div className={styles.avatar}>{name.charAt(0)}</div>
        <div className={styles.identity}>
          <div className={styles.name}>{name}</div>
          <div className={styles.role}>{role}</div>
        </div>
      </footer>
    </article>
  );
});

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;