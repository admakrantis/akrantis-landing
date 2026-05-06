"use client";

export function InfiniteGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right,  rgba(148, 163, 184, 0.10) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.10) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
      }}
    />
  );
}
