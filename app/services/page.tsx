import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { services, processSteps, site } from "@/lib/content";
import s from "../inner.module.css";

export const metadata: Metadata = {
  title: "Services · Senza AI",
  description:
    "Voice automation, end to end: 24/7 inbound reception, outbound campaigns, missed-call recovery, appointment automation, custom voice design, and CRM integration.",
};

export default function ServicesPage() {
  return (
    <>
      <header className={`${s.pageHeader}`}>
        <div className="container">
          <div className={s.pageHeadInner}>
            <span className="eyebrow">What we build</span>
            <h1 className={`${s.pageTitle} display`}>
              Voice automation, <br />
              <em>end to end.</em>
            </h1>
            <p className={s.pageLead}>
              From the first ring to the booked appointment, everything wired
              into the tools you already run.
            </p>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className={s.list}>
            {services.map((svc) => (
              <Reveal key={svc.id} className={s.row}>
                <span className={s.rowNum}>{svc.id}</span>
                <div className={s.rowBody}>
                  <h2 className={s.rowTitle}>{svc.title}</h2>
                  <p className={s.rowCopy}>{svc.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2
              className="display"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 3.4rem)",
                fontWeight: 300,
                margin: "1.25rem 0 clamp(2rem, 5vh, 3.5rem)",
              }}
            >
              Live in weeks, <em style={{ color: "var(--accent)" }}>not months.</em>
            </h2>
          </Reveal>

          <div className={s.process}>
            {processSteps.map((step) => (
              <Reveal key={step.id} className={s.step}>
                <span className={s.stepNum}>{step.id}</span>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepCopy}>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <Reveal className={s.cta}>
          <h2 className={`${s.ctaTitle} display`}>
            Ready to stop <em>missing calls?</em>
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
