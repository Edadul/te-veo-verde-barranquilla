import Image from "next/image"
import { CalendarDays, Clock, MapPin, Camera, TreeDeciduous } from "lucide-react"
import { evento } from "@/lib/contenido"
import { withBasePath } from "@/lib/utils"

export function HeroEvento() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-6 md:py-20">
        {/* Texto */}
        <div id="evento" className="scroll-mt-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary-foreground">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Conecta con la naturaleza
          </span>

          <h1 className="mt-5 font-heading text-5xl leading-[0.92] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Te Veo Verde
            <span className="block text-primary">Barranquilla</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {evento.descripcion}
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <InfoItem icon={CalendarDays} label="Fecha" value={evento.fecha} />
            <InfoItem icon={Clock} label="Hora" value={evento.hora} />
            <InfoItem icon={MapPin} label="Lugar" value={evento.lugar} />
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#inscripcion"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Inscríbete al recorrido
            </a>
            <a
              href="#guia"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conoce los árboles
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Camera className="size-4 text-primary" aria-hidden="true" />
              Trae tu cámara o celular
            </span>
            <span className="inline-flex items-center gap-2">
              <TreeDeciduous className="size-4 text-primary" aria-hidden="true" />
              Adopta un árbol del manglar
            </span>
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
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <dt className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  )
}
