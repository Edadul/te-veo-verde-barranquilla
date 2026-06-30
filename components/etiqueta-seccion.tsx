import { HojaAnimada } from "@/components/decor/hoja-animada"
import { TituloOnda } from "@/components/titulo-onda"

export function EtiquetaSeccion({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-script text-xl text-primary">
      <HojaAnimada size={18} />
      <TituloOnda>{children}</TituloOnda>
    </span>
  )
}
