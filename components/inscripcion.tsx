import { ArrowRight, TreeDeciduous } from "lucide-react";
import { FORM_INSCRIPCION_URL } from "@/lib/contenido";
import { HeroParallax } from "@/components/hero-parallax";
import { withBasePath } from "@/lib/utils";

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
          Adopta un árbol
        </span>

        <h2 className="mt-5 text-balance font-heading text-4xl tracking-tight md:text-5xl">
          Reserva tu cupo para el 03 de julio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Los cupos son limitados. Completa el formulario de inscripción para
          acompañarnos en la Ciénaga de Mallorquín, fotografiar el manglar y
          adoptar tu propio árbol.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={FORM_INSCRIPCION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15"
          >
            Ir al formulario de inscripción
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
