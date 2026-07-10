"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend yet, so compose a mailto so the message actually goes somewhere.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Demo request: " + (company || name)
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label className={styles.field}>
          <span>Company</span>
          <input name="company" type="text" placeholder="Your business" />
        </label>
      </div>
      <label className={styles.field}>
        <span>Email or phone</span>
        <input
          name="contact"
          type="text"
          required
          placeholder="How we reach you"
        />
      </label>
      <label className={styles.field}>
        <span>Where are you losing calls?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="After hours, peak lunch rush, overflow, missed follow-ups…"
        />
      </label>

      <button type="submit" className="btn btn--primary" data-hover>
        {sent ? "Opening your mail…" : "Send it over"}
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </button>
      <p className={styles.note}>
        Prefer to talk? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> or WhatsApp{" "}
        <a href={site.whatsappHref} target="_blank" rel="noreferrer">
          {site.whatsapp}
        </a>
        .
      </p>
    </form>
  );
}
