import Link from "next/link";
import { site, nav } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.top}>
          <p className={`${styles.big} display`}>
            Let&rsquo;s put a voice <br /> on your <em>business.</em>
          </p>
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            Book a Demo
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <hr className="divider" />

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <em>S</em>enza <span>AI</span>
            </span>
            <p className={styles.note}>{site.footerLine}</p>
          </div>

          <nav className={styles.col}>
            <span className={styles.colHead}>Menu</span>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className={styles.col}>
            <span className={styles.colHead}>Contact</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {site.whatsapp}
            </a>
          </div>
        </div>

        <div className={styles.legal}>
          <span>© {new Date().getFullYear()} Senza AI</span>
          <span>senza · business without the missed call.</span>
        </div>
      </div>
    </footer>
  );
}
