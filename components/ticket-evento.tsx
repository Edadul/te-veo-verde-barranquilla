import { CalendarioAnimado } from "@/components/decor/calendario-animado"
import { RelojAnimado } from "@/components/decor/reloj-animado"
import { PinAnimado } from "@/components/decor/pin-animado"
import { HojaAnimada } from "@/components/decor/hoja-animada"
import { evento } from "@/lib/contenido"

export function TicketEvento({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative -rotate-1 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/10 transition-transform hover:rotate-0 ${className}`}
    >
      <HojaAnimada
        size={120}
        className="pointer-events-none absolute -bottom-6 -right-6 text-primary/6"
      />

      <div className="relative grid sm:grid-cols-[1fr_auto_1fr]">
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
          {/* muescas que simulan el boleto perforado */}
          {/* móvil: extremos izquierdo/derecho de la línea horizontal */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background sm:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute right-0 top-0 size-3.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-background sm:hidden"
          />
          {/* escritorio: extremos arriba/abajo de la línea vertical */}
          <span
            aria-hidden="true"
            className="absolute -left-1.75 -top-1.75 hidden size-3.5 rounded-full bg-background sm:block"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-1.75 -left-1.75 hidden size-3.5 rounded-full bg-background sm:block"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-muted-foreground">
            <PinAnimado size={18} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest">Lugar</span>
          </div>
          <p className="mt-1 font-heading text-xl text-foreground">{evento.lugar}</p>

          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">
            Evento realizado
          </p>
        </div>
      </div>
    </div>
  )
}
