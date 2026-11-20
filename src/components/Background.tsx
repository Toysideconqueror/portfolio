// Các khối mờ đơn sắc phía sau, giúp hiệu ứng kính có chiều sâu
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob top-[-10%] left-[-10%] size-[45vw]" style={{ background: "var(--blob-a)" }} />
      <div className="blob top-[30%] right-[-15%] size-[40vw]" style={{ background: "var(--blob-b)", animationDelay: "-6s" }} />
      <div className="blob bottom-[-15%] left-[25%] size-[38vw]" style={{ background: "var(--blob-a)", animationDelay: "-12s" }} />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
