import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Bird, Fish, Footprints } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EspecieCard } from "@/components/especie-card"
import { FaunaFlotante } from "@/components/decor/fauna-flotante"
import { EtiquetaSeccion } from "@/components/etiqueta-seccion"
import { MapaRecorrido } from "@/components/mapa-recorrido"
import { HeroParallax } from "@/components/hero-parallax"
import { withBasePath } from "@/lib/utils"
import {
  arboles,
  peces,
  faunaDestacada,
  resumenCienaga,
  type Categoria,
  type GrupoPez,
} from "@/lib/contenido"

export const metadata: Metadata = {
  title: "Guía de la ciénaga · Te Veo Verde Barranquilla",
  description:
    "Árboles de mangle, peces y fauna de la Ciénaga de Mallorquín: guía de campo para el recorrido de Te Veo Verde Barranquilla.",
}

const iconoPorEstadistica = {
  pez: Fish,
  ave: Bird,
  sendero: Footprints,
} as const

const gruposPeces: GrupoPez[] = ["Residentes", "Visitantes frecuentes", "Visitas ocasionales"]

const gruposFauna: { categoria: Categoria; titulo: string }[] = [
  { categoria: "ave", titulo: "Aves" },
  { categoria: "mamifero", titulo: "Mamíferos" },
  { categoria: "reptil", titulo: "Reptiles" },
  { categoria: "crustaceo", titulo: "Crustáceos" },
  { categoria: "molusco", titulo: "Moluscos" },
]

export default function GuiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden py-14 md:py-20">
          <HeroParallax
            src={withBasePath("/galeria/hereoguia.jpg")}
            overlay="bg-background/82"
            velocidad={0.25}
          />
          <FaunaFlotante variante="mixto" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-6">
            <Link
              href="/#inicio"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver al evento
            </Link>

            <h1 className="mt-4 text-balance font-heading text-4xl tracking-tight text-foreground md:text-6xl">
              Guía de la ciénaga
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {resumenCienaga.definicion}
            </p>

            <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-3 gap-y-6 rounded-2xl border border-border bg-card px-4 pb-5 pt-4 shadow-sm sm:grid-cols-4 sm:divide-x sm:divide-border">
              {resumenCienaga.estadisticas.map((stat) => {
                const Icono = iconoPorEstadistica[stat.icono]
                return (
                  <div key={stat.etiqueta} className="px-1 text-center sm:px-3">
                    <dt className="font-heading text-2xl text-primary">{stat.valor}</dt>
                    <div className="relative my-5 border-t border-border">
                      <span className="absolute left-1/2 top-0 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card shadow-sm">
                        <Icono className="size-4 text-primary" aria-hidden="true" />
                      </span>
                    </div>
                    <dd className="text-xs leading-snug text-muted-foreground">{stat.etiqueta}</dd>
                  </div>
                )
              })}
            </dl>
            <p className="mt-4 text-[11px] text-muted-foreground/70">Fuente: {resumenCienaga.fuente}</p>
          </div>
        </section>

        <MapaRecorrido />

        <section id="arboles" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SeccionTitulo
              etiqueta="Flora"
              titulo="Árboles del manglar"
              descripcion="La Ciénaga de Mallorquín alberga cuatro especies de mangle. Apréndete sus nombres y características antes del recorrido: así sabrás qué estás fotografiando y cuál te gustaría adoptar."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {arboles.map((arbol) => (
                <EspecieCard key={arbol.cientifico} especie={arbol} />
              ))}
            </div>
          </div>
        </section>

        <section id="peces" className="relative scroll-mt-20 overflow-hidden bg-secondary/40 py-16 md:py-24">
          <FaunaFlotante variante="agua" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
            <SeccionTitulo
              etiqueta="Fauna acuática"
              titulo="Peces de la ciénaga"
              descripcion="17 especies registradas, agrupadas según su presencia en el estudio: las residentes se encuentran todo el año, las frecuentes llegan con la influencia marina, y las ocasionales aparecieron solo en muestreos puntuales."
            />

            {gruposPeces.map((grupo) => {
              const especiesGrupo = peces.filter((pez) => pez.grupo === grupo)
              if (especiesGrupo.length === 0) return null
              return (
                <div key={grupo} className="mt-10 first:mt-10">
                  <h3 className="font-heading text-2xl tracking-wide text-foreground">{grupo}</h3>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {especiesGrupo.map((pez) => (
                      <EspecieCard key={pez.cientifico} especie={pez} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="fauna" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SeccionTitulo
              etiqueta="Próximamente"
              titulo="Más habitantes de la ciénaga"
              descripcion="Aves, mamíferos, reptiles y moluscos también hacen parte de este ecosistema. Esta es una primera lista; iremos sumando ficha completa y fotografía propia de cada especie."
            />

            {gruposFauna.map(({ categoria, titulo }) => {
              const especies = faunaDestacada.filter((e) => e.categoria === categoria)
              if (especies.length === 0) return null
              return (
                <div key={categoria} className="mt-10">
                  <h3 className="font-heading text-2xl tracking-wide text-foreground">{titulo}</h3>
                  <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {especies.map((especie) => (
                      <EspecieCard key={especie.cientifico} especie={especie} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function SeccionTitulo({
  etiqueta,
  titulo,
  descripcion,
}: {
  etiqueta: string
  titulo: string
  descripcion: string
}) {
  return (
    <div className="max-w-2xl">
      <EtiquetaSeccion>{etiqueta}</EtiquetaSeccion>
      <h2 className="mt-2 text-balance font-heading text-4xl tracking-tight text-foreground md:text-5xl">
        {titulo}
      </h2>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{descripcion}</p>
    </div>
  )
}
