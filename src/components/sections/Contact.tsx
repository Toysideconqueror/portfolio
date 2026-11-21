"use client";

import { profile, socials } from "@/data/content";
import GlassCard from "../GlassCard";
import TechIcon from "../TechIcon";
import Section from "../Section";
import ContactForm from "../ContactForm";
import { useLang } from "@/i18n/LanguageProvider";

export default function Contact() {
  const { ui } = useLang();
  return (
    <Section id="contact" index="06" title={ui.sections.contact}>
      <GlassCard hover={false} className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{ui.contact.heading}</h3>
          <p className="mt-4 max-w-lg text-muted">{ui.contact.body}</p>

          <div className="mt-8 lg:mt-auto lg:pt-10">
            <p className="text-sm text-muted">{ui.contact.orEmail}</p>
            <a href={`mailto:${profile.email}`} className="mt-1 inline-block text-lg font-medium underline-offset-4 hover:underline">
              {profile.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="glass glass-hover inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm">
                    <TechIcon name={s.label} className="size-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </GlassCard>
    </Section>
  );
}
