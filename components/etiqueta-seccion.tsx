import { HojaAnimada } from "@/components/decor/hoja-animada"

export function EtiquetaSeccion({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
      <HojaAnimada size={16} />
      {children}
    </span>
  )
}
