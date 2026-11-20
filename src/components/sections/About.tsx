import { about } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <GlassCard className="space-y-4 p-8 text-lg leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "" : "text-muted"}>
              {p}
            </p>
          ))}
        </GlassCard>
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          {about.facts.map((f) => (
            <GlassCard key={f.label} className="flex flex-col justify-center p-6">
              <span className="text-4xl font-semibold">{f.value}</span>
              <span className="mt-1 text-sm text-muted">{f.label}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
