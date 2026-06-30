import { CalendarioAnimado } from "@/components/decor/calendario-animado"
import { RelojAnimado } from "@/components/decor/reloj-animado"
import { PinAnimado } from "@/components/decor/pin-animado"
import { evento, calendario } from "@/lib/contenido"
import { withBasePath } from "@/lib/utils"

export function TicketEvento({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative -rotate-1 rounded-2xl border border-border bg-card shadow-sm transition-transform hover:rotate-0 ${className}`}
    >
      <div className="grid sm:grid-cols-[1fr_auto_1fr]">
        <div className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarioAnimado size={18} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest">Fecha</span>
          </div>
          <p className="mt-1 font-heading text-2xl text-foreground">{evento.fecha}</p>
          <div className="mt-3 flex items-center gap-2 text-muted-foreground">
            <RelojAnimado size={16} className="text-primary" />
            <span className="text-sm font-medium">{evento.hora}</span>
          </div>
        </div>

        <div className="relative mx-5 border-t border-dashed border-border sm:mx-0 sm:border-l sm:border-t-0">
          <span
            aria-hidden="true"
            className="absolute -left-[7px] -top-[7px] size-3.5 rounded-full bg-background max-sm:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-[7px] -left-[7px] size-3.5 rounded-full bg-background max-sm:hidden"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <PinAnimado size={18} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest">Lugar</span>
          </div>
          <p className="mt-1 font-heading text-xl text-foreground">{evento.lugar}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={calendario.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <CalendarioAnimado size={14} />
              Agregar al calendario
            </a>
            <a
              href={withBasePath(calendario.icsPath)}
              download
              className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Descargar .ics
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
