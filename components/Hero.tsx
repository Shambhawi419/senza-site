"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { site } from "@/lib/content";
import styles from "@/app/home.module.css";

// Headline words; "answer" renders in italic.
const words = [
  { text: "Voice" },
  { text: "agents" },
  { text: "that" },
  { text: "answer", em: true },
  { text: "every" },
  { text: "call." },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      el.classList.add(styles.heroReady);
      return;
    }

    let ctx: gsap.Context | undefined;
    let started = false;
    let fallback: ReturnType<typeof setTimeout> | undefined;

    // Start the entrance as the preloader wipes away (or immediately if
    // it already ran, e.g. on client-side navigation back to home).
    const start = () => {
      if (started) return;
      started = true;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.25 });
        tl.to(`.${styles.word}`, {
          y: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.09,
        })
          .to(
            `.${styles.heroMotto}`,
            { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out" },
            "-=0.55"
          )
          .to(
            `.${styles.heroFade}`,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.12,
            },
            "-=0.5"
          );
      }, el);
    };

    if (document.documentElement.dataset.loaded === "true") {
      start();
    } else {
      window.addEventListener("senza:loaded", start, { once: true });
      // Safety net in case the loader never fires.
      fallback = setTimeout(start, 4500);
    }

    return () => {
      window.removeEventListener("senza:loaded", start);
      if (fallback) clearTimeout(fallback);
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={root} className={styles.hero}>
      <div className={`${styles.heroInner} container`}>
        <h1 className={`${styles.heroTitle} display`}>
          {words.map((w, i) => (
            <span key={i} className={styles.wordMask}>
              <span className={styles.word}>
                {w.em ? <em>{w.text}</em> : w.text}
              </span>
            </span>
          ))}
        </h1>

        <p className={`${styles.heroMotto} serif-italic`}>{site.footerLine}</p>

        <div className={`${styles.heroBottom} ${styles.heroFade}`}>
          <p className={styles.heroLead}>{site.tagline}</p>
          <div className={styles.heroActions}>
            <a
              href={site.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
              data-hover
            >
              Book a Demo
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${styles.scrollHint} ${styles.heroFade}`}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
