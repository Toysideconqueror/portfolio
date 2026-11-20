import { skills } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Technical skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <GlassCard key={s.group} className="p-6">
            <h3 className="mb-4 font-mono text-sm text-muted">{s.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
