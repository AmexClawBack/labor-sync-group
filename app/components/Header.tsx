"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo-wrap">
          <Image
            src="/logo.png"
            alt="Labor Sync Group"
            width={220}
            height={60}
            priority
          />
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="/employers" onClick={() => setMenuOpen(false)}>
            Employers
          </a>
          <a href="/jobs" onClick={() => setMenuOpen(false)}>
            Job Seekers
          </a>
          <a href="/industries" onClick={() => setMenuOpen(false)}>
            Industries
          </a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
  href="/apply"
  className="resume-nav-btn"
>
  Upload Resume
</a>
        </nav>
      </div>
    </header>
  );
}