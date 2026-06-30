/** Reloj con manecilla que gira lentamente, decorativo (no marca la hora real). */
export function RelojAnimado({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" className="opacity-50" />
      <line x1="12" y1="12" x2="12" y2="7.5" />
      <line
        x1="12"
        y1="12"
        x2="15.5"
        y2="12"
        className="anim-reloj-tic"
        style={{
          transformBox: "view-box",
          transformOrigin: "12px 12px",
          animationDuration: "7s",
        }}
      />
    </svg>
  )
}
