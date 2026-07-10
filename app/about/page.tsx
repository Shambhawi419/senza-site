import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { about, pillars, site } from "@/lib/content";
import s from "../inner.module.css";

export const metadata: Metadata = {
  title: "About · Senza AI",
  description:
    "Senza means without. We build AI voice agents that answer every call, so you have business without the missed call, the hold time, or the front desk you can't staff around the clock.",
};

export default function AboutPage() {
  return (
    <>
      <header className={s.pageHeader}>
        <div className="container">
          <div className={s.pageHeadInner}>
            <span className="eyebrow">About</span>
            <h1 className={`${s.pageTitle} display`}>
              We build the voice <br /> your business is <em>missing.</em>
            </h1>
          </div>
        </div>
      </header>

      <section className="section">
        <div className={`${s.twoCol} container`}>
          <Reveal>
            <p className={`${s.statement} display`}>
              Every unanswered call is a customer <em>walking away.</em>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={s.pageLead} style={{ maxWidth: "52ch" }}>
              {about.mission}
            </p>
            <p className={s.statementNote}>
              The name says it: <em>senza</em> means <em>without.</em>{" "}
              {about.missionNote.replace(
                "The name says it: senza means without. ",
                ""
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className={s.eyebrowRow} style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">What we stand for</span>
          </Reveal>
          <div className={s.pillars}>
            {pillars.map((p) => (
              <Reveal key={p.title} className={s.pillar}>
                <h3 className={s.pillarTitle}>{p.title}</h3>
                <p className={s.pillarCopy}>{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ paddingTop: 0, borderTop: "1px solid var(--line)" }}
      >
        <div className={`${s.twoCol} container`} style={{ paddingTop: "clamp(4rem,10vh,7rem)" }}>
          <Reveal>
            <span className="eyebrow">The team</span>
            <p className={`${s.statement} display`} style={{ marginTop: "1.5rem" }}>
              A long-term game with <em>long-term people.</em>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={s.pageLead} style={{ maxWidth: "54ch" }}>
              {about.team}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal className={s.cta}>
          <h2 className={`${s.ctaTitle} display`}>
            Let&rsquo;s build <em>yours.</em>
          </h2>
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
        </Reveal>
      </section>
    </>
  );
}
