/** Calendario con la casilla del día del evento resaltada y pulsando. */
export function CalendarioAnimado({ size = 18, className = "" }: { size?: number; className?: string }) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" className="opacity-60" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <circle
        cx="16"
        cy="18"
        r="1.6"
        fill="currentColor"
        stroke="none"
        className="anim-calendario-resalte"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animationDuration: "2.2s",
        }}
      />
    </svg>
  )
}
