import Image from "next/image"
import { Bird, Fish, Leaf, PawPrint, Shell, Shrimp, Turtle } from "lucide-react"
import { withBasePath } from "@/lib/utils"
import type { Especie } from "@/lib/contenido"

const iconoPorCategoria = {
  arbol: Leaf,
  pez: Fish,
  ave: Bird,
  mamifero: PawPrint,
  reptil: Turtle,
  molusco: Shell,
  crustaceo: Shrimp,
} as const

export function EspecieCard({
  especie,
  priority = false,
}: {
  especie: Especie
  priority?: boolean
}) {
  const Icono = iconoPorCategoria[especie.categoria]

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 odd:-rotate-1 even:rotate-1 hover:z-10 hover:-translate-y-1 hover:rotate-0 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        {especie.imagen ? (
          <Image
            src={withBasePath(especie.imagen)}
            alt={`${especie.nombre} (${especie.cientifico})`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Icono className="size-10 text-primary/30" strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}

        {/* doblez de esquina, como una página de cuaderno de campo */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 size-6 bg-background/90 shadow-[-2px_2px_4px_rgba(0,0,0,0.15)]"
          style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        />

        {especie.estado && (
          <span className="absolute right-3 top-3 rotate-3 rounded-sm bg-primary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
            {especie.estado}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-2xl tracking-wide text-foreground">{especie.nombre}</h3>
        <p className="-mt-0.5 text-sm italic text-primary/80">{especie.cientifico}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{especie.descripcion}</p>

        {especie.datos.length > 0 && (
          <dl className="mt-4 space-y-1.5 border-t border-border pt-3">
            {especie.datos.map((dato) => (
              <div key={dato.etiqueta} className="flex items-baseline gap-2 text-sm">
                <dt className="shrink-0 text-muted-foreground">{dato.etiqueta}</dt>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 -translate-y-0.75 border-b border-dotted border-border"
                />
                <dd className="shrink-0 font-medium text-foreground">{dato.valor}</dd>
              </div>
            ))}
          </dl>
        )}

        {especie.fuente && (
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground/75">
            Fuente: {especie.fuente}
          </p>
        )}
      </div>
    </article>
  )
}
