import Image from "next/image"
import Link from "next/link"
import { Camera, Images, TreeDeciduous } from "lucide-react"
import { evento, resultadosEvento } from "@/lib/contenido"
import { withBasePath } from "@/lib/utils"
import { HojaAnimada } from "@/components/decor/hoja-animada"
import { TicketEvento } from "@/components/ticket-evento"
import { CompartirEvento } from "@/components/compartir-evento"
import { FaunaFlotante } from "@/components/decor/fauna-flotante"
import { TituloOnda } from "@/components/titulo-onda"
import { HeroParallax } from "@/components/hero-parallax"

export function HeroEvento() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <HeroParallax />
      <FaunaFlotante variante="mixto" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
        {/* Texto */}
        <div id="evento" className="scroll-mt-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 font-script text-lg text-secondary-foreground">
            <HojaAnimada size={16} />
            <TituloOnda>Conecta con la naturaleza</TituloOnda>
          </span>

          <h1 className="mt-5 font-heading text-5xl leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Te Veo Verde
            <span className="block text-primary">Barranquilla</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {evento.descripcion}
          </p>

          <TicketEvento className="mt-8" />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Camera className="size-4" aria-hidden="true" />
            {resultadosEvento.participantes} participantes · {resultadosEvento.guias} guía · {resultadosEvento.fecha}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#galeria"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 active:translate-y-0 sm:w-auto"
            >
              <Images className="size-5" aria-hidden="true" />
              Ver galería de fotos
            </a>
            <Link
              href="/guia"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-primary/25 bg-secondary/70 px-7 py-4 text-base font-bold text-primary backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-secondary active:scale-[0.98] sm:w-auto"
            >
              <TreeDeciduous className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
              Conoce la ciénaga
            </Link>
          </div>

        </div>

        {/* Flyer */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 -rotate-2 rounded-3xl bg-secondary" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <Image
              src={withBasePath("/flyer-te-veo-verde.png")}
              alt="Flyer del evento Te Veo Verde Barranquilla en la Ciénaga de Mallorquín, 03 de julio a las 8:00 AM"
              width={1080}
              height={1350}
              priority
              className="h-auto w-full"
            />
            <CompartirEvento />
          </div>
        </div>
      </div>
    </section>
  )
}
