import Link from "next/link"
import { ArrowRight, Bird, Fish, Leaf } from "lucide-react"
import { EtiquetaSeccion } from "@/components/etiqueta-seccion"

export function GuiaTeaser() {
  return (
    <section id="guia" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <EtiquetaSeccion>Guía de campo</EtiquetaSeccion>
          <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
            Conoce lo que vas a encontrar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            La Ciénaga de Mallorquín alberga manglares, decenas de especies de peces y la fauna
            que se mueve entre ellos. Repasa la guía completa antes del recorrido para reconocer
            qué estás fotografiando.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <ResumenItem
            icon={Leaf}
            titulo="4 especies de mangle"
            detalle="Rojo, negro, blanco y botoncillo"
            giro="-rotate-2"
          />
          <ResumenItem
            icon={Fish}
            titulo="17 especies de peces"
            detalle="Residentes y visitantes de la ciénaga"
            giro="rotate-1"
          />
          <ResumenItem
            icon={Bird}
            titulo="Fauna de la ciénaga"
            detalle="Aves, mamíferos, reptiles y moluscos"
            giro="-rotate-1"
          />
        </div>

        <div className="mt-8">
          <Link
            href="/guia"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explorar la guía completa
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ResumenItem({
  icon: Icon,
  titulo,
  detalle,
  giro,
}: {
  icon: React.ComponentType<{ className?: string }>
  titulo: string
  detalle: string
  giro: string
}) {
  return (
    <div
      className={`relative rounded-xl border border-border bg-card p-4 shadow-sm transition-transform duration-300 hover:rotate-0 hover:shadow-md ${giro}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2 left-6 h-4 w-10 -rotate-3 rounded-sm bg-accent/40"
      />
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <p className="mt-2 font-medium text-foreground">{titulo}</p>
      <p className="text-sm text-muted-foreground">{detalle}</p>
    </div>
  )
}
