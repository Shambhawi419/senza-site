import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import s from "../inner.module.css";
import c from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact · Senza AI",
  description:
    "Tell us where you're losing calls and we'll show you an agent that catches them. Book a demo with Senza AI.",
};

export default function ContactPage() {
  return (
    <>
      <header className={s.pageHeader}>
        <div className="container">
          <div className={s.pageHeadInner}>
            <span className="eyebrow">Contact</span>
            <h1 className={`${s.pageTitle} display`}>
              Let&rsquo;s put a voice <br /> on your <em>business.</em>
            </h1>
            <p className={s.pageLead}>
              Tell us where you&rsquo;re losing calls and we&rsquo;ll show you
              an agent that catches them.
            </p>
          </div>
        </div>
      </header>

      <section className="section">
        <div className={`${c.layout} container`}>
          <Reveal className={c.formCol}>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className={c.sideCol}>
            <div className={c.block}>
              <span className="eyebrow">Book instantly</span>
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
                data-hover
                style={{ alignSelf: "flex-start" }}
              >
                Grab a 30-min slot
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>

            <div className={c.block}>
              <span className="eyebrow">Direct</span>
              <a className={c.big} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a
                className={c.big}
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {site.whatsapp}
              </a>
            </div>

            <div className={c.block}>
              <span className="eyebrow">Why now</span>
              <p className={c.reason}>
                Every unanswered call is a customer walking away. The sooner an
                agent is live, the sooner none of them do.
              </p>
            </div>

            <p className={c.footerLine}>{site.footerLine}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
