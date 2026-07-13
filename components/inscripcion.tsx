import { Camera, TreeDeciduous, Users } from "lucide-react";
import { HeroParallax } from "@/components/hero-parallax";
import { withBasePath } from "@/lib/utils";
import { resultadosEvento } from "@/lib/contenido";

export function Inscripcion() {
  return (
    <section
      id="inscripcion"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-16 text-primary-foreground md:py-24"
    >
      <HeroParallax
        src={withBasePath("/galeria/manglar.jpg")}
        overlay="bg-primary/88"
        velocidad={0.2}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          <TreeDeciduous className="size-4" aria-hidden="true" />
          Evento finalizado · {resultadosEvento.fecha}
        </span>

        <h2 className="mt-5 text-balance font-heading text-4xl tracking-tight md:text-5xl">
          ¡Fue una mañana increíble!
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Gracias a quienes nos acompañaron en los senderos de la Ciénaga de Mallorquín. Fotografiamos el manglar, conocimos sus especies y adoptamos árboles que seguiremos cuidando.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Users className="size-5 text-primary-foreground/70" aria-hidden="true" />
              <span className="font-heading text-5xl">{resultadosEvento.participantes}</span>
            </div>
            <span className="text-sm text-primary-foreground/75">participantes</span>
          </div>

          <div className="hidden h-12 w-px bg-primary-foreground/20 sm:block" aria-hidden="true" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <TreeDeciduous className="size-5 text-primary-foreground/70" aria-hidden="true" />
              <span className="font-heading text-5xl">{resultadosEvento.guias}</span>
            </div>
            <span className="text-sm text-primary-foreground/75">guía</span>
          </div>

          <div className="hidden h-12 w-px bg-primary-foreground/20 sm:block" aria-hidden="true" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <Camera className="size-5 text-primary-foreground/70" aria-hidden="true" />
              <span className="font-heading text-5xl">{resultadosEvento.participantes + resultadosEvento.guias}</span>
            </div>
            <span className="text-sm text-primary-foreground/75">cámaras en el manglar</span>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#galeria"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15"
          >
            <Camera className="size-4" aria-hidden="true" />
            Ver galería de fotos
          </a>
        </div>
      </div>
    </section>
  );
}
