export default function AngleDivider({ height = 120, flip = false }) {
  return (
    <div
      className={`relative w-full overflow-hidden ${flip ? "scale-y-[-1]" : ""}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
      >
        <defs>
          <linearGradient id="layerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bfff" />
            <stop offset="50%" stopColor="var(--accent-light)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>

        {/* Layer 1: Wide wedge */}
        <polygon
          points="0,0 15,100 100,100 0,0"
          fill="url(#layerGradient)"
        />

        {/* Layer 2: Triangle */}
        <polygon
          points="0,100 0,0 100,100"
          fill="url(#layerGradient)"
          opacity="0.8"
        />

        {/* Layer 3: Trapezoid */}
        <polygon
          points="100,100 0,0 0,15 100,115"
          fill="url(#layerGradient)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
