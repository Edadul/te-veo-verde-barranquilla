const aspas = [
  "m14.31 8 5.74 9.94",
  "M9.69 8h11.48",
  "m7.38 12 5.74-9.94",
  "M9.69 16 3.95 6.06",
  "M14.31 16H2.83",
  "m16.62 12-5.74 9.94",
]

/** Diafragma de cámara animado: las aspas respiran lentamente, como un lente enfocando. */
export function DiafragmaAnimado({
  size = 20,
  className = "",
}: {
  size?: number
  className?: string
}) {
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
      <circle cx="12" cy="12" r="9.6" className="opacity-30" />
      {aspas.map((d, i) => (
        <path
          key={d}
          d={d}
          className="anim-diafragma-aspa"
          style={{
            transformBox: "view-box",
            transformOrigin: "12px 12px",
            animationDuration: "6s",
            animationDelay: `${i * -1}s`,
          }}
        />
      ))}
    </svg>
  )
}
