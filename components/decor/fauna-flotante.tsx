import { Fish, Leaf } from "lucide-react"

type Pez = { top: string; size: number; duration: string; delay: string; bobDuration: string }
type Hoja = { topInicio: string; topFin: string; size: number; duration: string; delay: string }

const peces: Pez[] = [
  { top: "10%", size: 24, duration: "54s", delay: "-6s", bobDuration: "5s" },
  { top: "32%", size: 16, duration: "66s", delay: "-24s", bobDuration: "6.5s" },
  { top: "58%", size: 28, duration: "48s", delay: "-14s", bobDuration: "4.5s" },
  { top: "78%", size: 18, duration: "72s", delay: "-42s", bobDuration: "5.5s" },
]

const hojas: Hoja[] = [
  { topInicio: "5%", topFin: "68%", size: 18, duration: "38s", delay: "-5s" },
  { topInicio: "42%", topFin: "92%", size: 14, duration: "44s", delay: "-19s" },
  { topInicio: "70%", topFin: "22%", size: 16, duration: "50s", delay: "-31s" },
]

export function FaunaFlotante({
  variante = "agua",
}: {
  variante?: "agua" | "manglar" | "mixto"
}) {
  const mostrarPeces = variante === "agua" || variante === "mixto"
  const mostrarHojas = variante === "manglar" || variante === "mixto"

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {mostrarPeces &&
        peces.map((pez, i) => (
          <span
            key={`pez-${i}`}
            className="absolute motion-reduce:hidden"
            style={{
              top: pez.top,
              left: "-8%",
              animation: `drift-x ${pez.duration} linear infinite`,
              animationDelay: pez.delay,
            }}
          >
            <span
              className="block text-primary/[0.08]"
              style={{ animation: `drift-bob ${pez.bobDuration} ease-in-out infinite` }}
            >
              <Fish size={pez.size} strokeWidth={1.25} />
            </span>
          </span>
        ))}
      {mostrarHojas &&
        hojas.map((hoja, i) => (
          <span
            key={`hoja-${i}`}
            className="absolute text-primary/[0.09] motion-reduce:hidden"
            style={
              {
                left: "-6%",
                "--leaf-top-inicio": hoja.topInicio,
                "--leaf-top-fin": hoja.topFin,
                animation: `drift-leaf ${hoja.duration} linear infinite`,
                animationDelay: hoja.delay,
              } as React.CSSProperties
            }
          >
            <Leaf size={hoja.size} strokeWidth={1.25} />
          </span>
        ))}
    </div>
  )
}
