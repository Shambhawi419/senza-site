import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { servicesTeaser, testimonials } from "@/lib/content";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <Hero />

      {/* ---------- INTRO STATEMENT ---------- */}
      <section className={`${styles.intro} section`}>
        <div className="container">
          <Reveal>
            <p className={`${styles.introText} display`}>
              We build AI voice agents that answer, qualify, book, and follow
              up, <em>inbound and outbound</em>, in a voice your customers
              can&rsquo;t tell from human.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.introSub}>
              You keep serving clients. <strong>Senza handles the phone.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- SERVICES TEASER ---------- */}
      <section className={`${styles.services} section`}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="eyebrow">What we do</span>
            <h2 className={`${styles.sectionTitle} display`}>
              From the first ring <br /> to the <em>booked appointment.</em>
            </h2>
          </Reveal>

          <div className={styles.serviceGrid}>
            {servicesTeaser.map((s, i) => (
              <Reveal
                key={s.title}
                className={styles.serviceTile}
                delay={i * 0.05}
              >
                <span className={styles.serviceNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceCopy}>{s.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.servicesLink}>
            <Link href="/services" className="btn btn--ghost" data-hover>
              Explore all services
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- CLIENT STORIES ---------- */}
      <section className={`${styles.stories} section`}>
        <div className="container">
          <Reveal className={styles.sectionHead}>
            <span className="eyebrow">Client Stories</span>
            <h2 className={`${styles.sectionTitle} display`}>
              Trusted by businesses <br /> across <em>industries.</em>
            </h2>
          </Reveal>

          <div className={styles.storyGrid}>
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.05}
                className={`${styles.story} ${
                  t.featured ? styles.storyWide : ""
                }`}
              >
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.person}>
                  <span className={styles.avatar} aria-hidden="true">
                    {t.name
                      .replace(/^Dr\.\s/, "")
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className={styles.personMeta}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </span>
                  <span className={styles.tag}>{t.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
