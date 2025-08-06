export default function AngleDivider({ color = "#0a0a0a", height = 60, flip = false }) {
  // Renders an angled SVG wedge that "bleeds" into the next section color
  return (
    <div
      className={`w-full ${flip ? "scale-y-[-1]" : ""}`}
      style={{ lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
      >
        {/* Slanted top edge; fill with the next section’s background color */}
        <polygon points="0,10 100,0 100,10 0,10" fill={color} />
      </svg>
    </div>
  );
}
