"use client";

import { useEffect, useState } from "react";

const EXIT_DURATION = 850;
const LOADING_DURATION = 2600;

export default function WelcomeIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const dismiss = () => {
    if (!isReady) return;
    setIsLeaving(true);
  };

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => setIsReady(true), LOADING_DURATION);
    return () => window.clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLeaving) return;

    const hideTimer = window.setTimeout(() => setIsVisible(false), EXIT_DURATION);
    return () => window.clearTimeout(hideTimer);
  }, [isLeaving]);

  if (!isVisible) return null;

  return (
    <div
      className={`welcome-intro ${isLeaving ? "welcome-intro--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Welcome to Portfolio Team"
    >
      <div className="welcome-intro__orb welcome-intro__orb--cyan" />
      <div className="welcome-intro__orb welcome-intro__orb--purple" />

      <div className="welcome-intro__content">
        <div className="welcome-intro__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="welcome-intro__eyebrow">PORTFOLIO TEAM</p>
        <h1>
          Welcome<span>.</span>
        </h1>
        <p className="welcome-intro__message">
          Menyiapkan karya digital terbaik untukmu
        </p>
        <div className="welcome-intro__progress" aria-hidden="true">
          <span />
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="welcome-intro__skip"
          disabled={!isReady}
        >
          {isReady ? "Masuk ke portofolio" : "Menyiapkan portofolio..."}
        </button>
      </div>
    </div>
  );
}
