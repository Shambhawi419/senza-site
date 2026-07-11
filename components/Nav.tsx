"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile drawer is open. Lenis drives the
  // scroll programmatically, so it must be stopped too — overflow:hidden
  // alone doesn't stop it.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } })
      .__lenis;
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Senza AI home">
          <span className={styles.mark}>S</span>
          <span className={styles.word}>enza</span>
          <span className={styles.dot} aria-hidden="true">
            AI
          </span>
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.active : ""}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className={`${styles.cta} btn btn--primary`}
          >
            Book a Demo
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ""} />
          <span className={open ? styles.barMid : ""} />
        </button>
      </div>
    </header>
  );
}
