"use client";

import { profile, socials } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";
import { useLang } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { ui } = useLang();
  return (
    <Section id="contact" index="06" title={ui.sections.contact}>
      <GlassCard hover={false} className="p-8 text-center sm:p-16">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{ui.contact.heading}</h3>
        <p className="mx-auto mt-4 max-w-lg text-muted">{ui.contact.body}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-fg px-8 py-4 font-medium text-bg transition-opacity hover:opacity-80"
        >
          {profile.email}
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer" className="glass glass-hover inline-block rounded-full px-5 py-2 text-sm">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </GlassCard>
    </Section>
  );
}
