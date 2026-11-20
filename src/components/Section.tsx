import type { ReactNode } from "react";

type Props = { id: string; index: string; title: string; children: ReactNode };

export default function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-sm text-muted">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <span className="ml-2 h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}
