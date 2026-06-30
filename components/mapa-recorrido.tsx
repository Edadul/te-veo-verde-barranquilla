import Image from "next/image"
import { Download } from "lucide-react"
import { withBasePath } from "@/lib/utils"
import { EtiquetaSeccion } from "@/components/etiqueta-seccion"

export function MapaRecorrido() {
  return (
    <section id="mapa" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="max-w-2xl">
          <EtiquetaSeccion>Orientación</EtiquetaSeccion>
          <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
            Mapa del recorrido
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Los senderos Manglar y Estuario, y el parqueadero habilitado sobre la Circunvalar de
            la Prosperidad. Descárgalo para tenerlo a la mano durante la caminata.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src={withBasePath("/mapa-cienaga.jpg")}
            alt="Mapa de los senderos Manglar y Estuario en la Ciénaga de Mallorquín, con el parqueadero habilitado sobre la Circunvalar de la Prosperidad"
            width={768}
            height={294}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href={withBasePath("/mapa-cienaga.jpg")}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden="true" />
            Descargar mapa
          </a>
        </div>
      </div>
    </section>
  )
}
