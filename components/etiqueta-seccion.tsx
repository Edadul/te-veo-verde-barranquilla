import { DiafragmaAnimado } from "@/components/decor/diafragma-animado"

export function EtiquetaSeccion({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
      <DiafragmaAnimado size={16} />
      {children}
    </span>
  )
}
