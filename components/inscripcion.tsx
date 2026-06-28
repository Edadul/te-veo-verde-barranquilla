import { ArrowRight, TreeDeciduous } from "lucide-react"
import { FORM_INSCRIPCION_URL } from "@/lib/contenido"

export function Inscripcion() {
  const tieneForm = FORM_INSCRIPCION_URL.trim().length > 0

  return (
    <section id="inscripcion" className="scroll-mt-20 bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
          <TreeDeciduous className="size-4" aria-hidden="true" />
          Adopta un árbol
        </span>

        <h2 className="mt-5 text-balance font-heading text-4xl tracking-tight md:text-5xl">
          Reserva tu cupo para el 03 de julio
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          Los cupos son limitados. Completa el formulario de inscripción para
          acompañarnos en la Ciénaga de Mallorquín, fotografiar el manglar y adoptar
          tu propio árbol.
        </p>

        <div className="mt-8 flex justify-center">
          {tieneForm ? (
            <a
              href={FORM_INSCRIPCION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Ir al formulario de inscripción
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <div className="rounded-2xl border border-dashed border-primary-foreground/40 bg-primary-foreground/5 px-6 py-5 text-left text-sm text-primary-foreground/85">
              <p className="font-semibold text-primary-foreground">
                Espacio para el link del formulario
              </p>
              <p className="mt-1">
                Pega la URL de tu formulario en{" "}
                <code className="rounded bg-primary-foreground/15 px-1.5 py-0.5 font-mono text-xs">
                  FORM_INSCRIPCION_URL
                </code>{" "}
                dentro de{" "}
                <code className="rounded bg-primary-foreground/15 px-1.5 py-0.5 font-mono text-xs">
                  lib/contenido.ts
                </code>{" "}
                y el botón aparecerá automáticamente.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
