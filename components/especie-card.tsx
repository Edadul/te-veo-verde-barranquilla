import Image from "next/image"
import { Bird, Fish, Leaf, PawPrint, Shell, Turtle } from "lucide-react"
import { withBasePath } from "@/lib/utils"
import type { Especie } from "@/lib/contenido"

const iconoPorCategoria = {
  arbol: Leaf,
  pez: Fish,
  ave: Bird,
  mamifero: PawPrint,
  reptil: Turtle,
  molusco: Shell,
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
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        {especie.imagen ? (
          <Image
            src={withBasePath(especie.imagen)}
            alt={`${especie.nombre} (${especie.cientifico})`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Icono className="size-10 text-primary/30" strokeWidth={1.25} aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {especie.cientifico}
        </span>
        {especie.estado && (
          <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
            {especie.estado}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-heading text-2xl tracking-wide text-foreground">{especie.nombre}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{especie.descripcion}</p>

        {especie.datos.length > 0 && (
          <dl className="mt-4 grid grid-cols-2 gap-2">
            {especie.datos.map((dato) => (
              <div key={dato.etiqueta} className="rounded-lg bg-secondary/60 px-3 py-2">
                <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  {dato.etiqueta}
                </dt>
                <dd className="text-sm font-medium text-foreground">{dato.valor}</dd>
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
