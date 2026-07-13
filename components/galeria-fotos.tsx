import Image from "next/image"
import { galeriaEvento, galeriaReferencia } from "@/lib/contenido"
import { withBasePath } from "@/lib/utils"
import { EtiquetaSeccion } from "@/components/etiqueta-seccion"
import { InstagramCta } from "@/components/instagram-cta"

export function GaleriaFotos() {
  return (
    <section id="galeria" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* ── Encabezado ── */}
        <div className="max-w-2xl">
          <EtiquetaSeccion>Galería · 03 Jul 2026</EtiquetaSeccion>
          <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
            Así fue el recorrido
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Fotografías tomadas por los 13 participantes y el guía durante la mañana en los senderos de la Ciénaga de Mallorquín.
          </p>
        </div>

        {/* ── Fotos del evento — masonry ── */}
        <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3 *:mb-3">
          {galeriaEvento.map((foto, i) => (
            <figure
              key={foto.src}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
            >
              <Image
                src={withBasePath(foto.src)}
                alt={foto.alt}
                width={800}
                height={i % 3 === 0 ? 1067 : i % 3 === 1 ? 600 : 800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-4 py-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {foto.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        <InstagramCta />

        {/* ── Separador ── */}
        <div className="mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            La ciénaga
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* ── Fotos de referencia ── */}
        <div className="mt-6 max-w-xl">
          <EtiquetaSeccion>Fotografías de referencia</EtiquetaSeccion>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Imágenes del ecosistema para conocer la ciénaga antes de tu próxima visita.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {galeriaReferencia.map((foto) => (
            <figure
              key={foto.src}
              className="group relative aspect-4/3 overflow-hidden rounded-xl border border-border bg-card"
            >
              <Image
                src={withBasePath(foto.src)}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-3 py-2 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {foto.alt}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
