import Image from "next/image"
import { galeria } from "@/lib/contenido"

export function GaleriaFotos() {
  return (
    <section id="galeria" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Galería
          </span>
          <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
            Capturado en la ciénaga
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Una selección de las fotografías tomadas durante el recorrido. ¿Tienes una
            foto que quieras compartir? Etiquétanos al subirla a tus redes.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galeria.map((foto, i) => (
            <figure
              key={foto.src}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card break-inside-avoid"
            >
              <Image
                src={foto.src || "/placeholder.svg"}
                alt={foto.alt}
                width={800}
                height={i % 2 === 0 ? 1000 : 600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3 text-sm font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                {foto.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
