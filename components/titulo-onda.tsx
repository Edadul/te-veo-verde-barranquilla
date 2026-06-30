/** Envuelve cada letra en su propio span para animarla con un leve desfase, creando un efecto de ola. */
const ESPACIO_FIJO = " "

export function TituloOnda({
  children,
  className = "",
}: {
  children: string
  className?: string
}) {
  return (
    <span className={className} aria-label={children}>
      {children.split("").map((letra, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="anim-onda-letra inline-block"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {letra === " " ? ESPACIO_FIJO : letra}
        </span>
      ))}
    </span>
  )
}
