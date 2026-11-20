import { profile } from "@/data/content";
import GlassCard from "../GlassCard";

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-svh max-w-6xl items-center px-5 pt-28 pb-16 sm:px-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
            <span className="size-2 rounded-full bg-fg" /> Sẵn sàng cho cơ hội mới
          </p>
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            Xin chào, tôi là
            <br />
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {profile.role}. {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-80">
              Xem dự án
            </a>
            <a href="#contact" className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium">
              Liên hệ
            </a>
          </div>
        </div>

        <GlassCard className="aspect-square w-full max-w-sm justify-self-center p-6 lg:justify-self-end">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-xs text-muted">
              <span>portfolio.ts</span>
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full border border-current" />
                <span className="size-2.5 rounded-full border border-current" />
                <span className="size-2.5 rounded-full bg-current" />
              </span>
            </div>
            <div className="mx-auto flex size-40 items-center justify-center rounded-full border border-line text-5xl font-semibold">
              {profile.name
                .split(" ")
                .slice(-2)
                .map((w) => w[0])
                .join("")}
            </div>
            <pre className="font-mono text-xs leading-relaxed text-muted">
              {`const me = {\n  role: "${profile.role}",\n  based: "${profile.location}",\n};`}
            </pre>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
