/** Pin de ubicación con un pulso tipo radar debajo, como un "estás aquí". */
export function PinAnimado({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 mx-auto size-2 rounded-full bg-current opacity-40 motion-reduce:hidden"
        style={{ animation: "pin-pulso 2.4s ease-out infinite" }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="relative"
      >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </span>
  )
}
