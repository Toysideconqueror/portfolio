import { profile, socials } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";

export default function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <GlassCard hover={false} className="p-8 text-center sm:p-16">
        <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">Cùng làm điều gì đó nhé?</h3>
        <p className="mx-auto mt-4 max-w-lg text-muted">Tôi luôn sẵn lòng trò chuyện về dự án, cơ hội việc làm hoặc chỉ đơn giản là chào hỏi.</p>
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
