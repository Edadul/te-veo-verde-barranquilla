import Image from "next/image"
import { arboles } from "@/lib/contenido"

export function GuiaArboles() {
  return (
    <section id="guia" className="scroll-mt-20 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Guía de campo
          </span>
          <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
            Los árboles del manglar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            La Ciénaga de Mallorquín alberga cuatro especies de mangle. Apréndete sus
            nombres y características antes del recorrido: así sabrás qué estás
            fotografiando y cuál te gustaría adoptar.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {arboles.map((arbol) => (
            <article
              key={arbol.cientifico}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={arbol.imagen || "/placeholder.svg"}
                  alt={`${arbol.nombre} (${arbol.cientifico})`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {arbol.cientifico}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-2xl tracking-wide text-foreground">
                  {arbol.nombre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {arbol.descripcion}
                </p>

                <dl className="mt-4 grid grid-cols-2 gap-2">
                  {arbol.datos.map((dato) => (
                    <div
                      key={dato.etiqueta}
                      className="rounded-lg bg-secondary/60 px-3 py-2"
                    >
                      <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                        {dato.etiqueta}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {dato.valor}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
