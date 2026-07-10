"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

/**
 * Full-screen intro loader: brand mark fades in, the red bar fills,
 * then the whole screen wipes upward. Fires "senza:loaded" so the hero
 * entrance can start as the wipe begins.
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const finish = () => {
      document.documentElement.dataset.loaded = "true";
      window.dispatchEvent(new Event("senza:loaded"));
    };

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || document.documentElement.dataset.loaded === "true") {
      el.style.display = "none";
      finish();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(`.${styles.brand}`, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          `.${styles.fill}`,
          { scaleX: 1, duration: 1.5, ease: "power2.inOut" },
          "-=0.3"
        )
        .add(finish, "+=0.15")
        .to(el, { yPercent: -100, duration: 0.85, ease: "power4.inOut" })
        .set(el, { display: "none" });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className={styles.overlay} aria-hidden="true">
      <noscript>
        <style>{`.${styles.overlay}{display:none}`}</style>
      </noscript>
      <div className={styles.brand}>
        <span className={styles.mark}>
          <em>S</em>enza
        </span>
        <span className={styles.ai}>AI</span>
      </div>
      <div className={styles.track}>
        <div className={styles.fill} />
      </div>
    </div>
  );
}
