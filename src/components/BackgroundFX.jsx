"use client";



export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(252, 129, 74, 0.93) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 82, 220, 0.93) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 95%)",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(51, 156, 255, 0.93), transparent 80%)",
        }}
        animate={{ x: [0, 80, -40, 0], y: [0, -40, 60, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute bottom-[-120px] right-[-120px] w-[520px] h-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(51, 156, 255, 0.93), transparent 60%)", // turquoise
        }}
        animate={{ x: [0, -60, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[360px] h-[360px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(51, 156, 255, 0.93), transparent 50%)",
        }}
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radar sweep ring */}
      <div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(51, 156, 255, 0.93)]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />

      {/* Scanlines */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_1px,rgba(51, 156, 255, 0.93)_1px)] z-[-1]" />
    </div>
  );
}
