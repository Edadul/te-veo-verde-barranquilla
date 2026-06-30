"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"
import { withBasePath } from "@/lib/utils"

const TITULO = "Te Veo Verde Barranquilla"
const TEXTO =
  "Te invito a Te Veo Verde Barranquilla: un recorrido fotográfico y de conservación en la Ciénaga de Mallorquín, el 3 de julio. ¡Acompáñame!"

export function CompartirEvento({ className = "" }: { className?: string }) {
  const [copiado, setCopiado] = useState(false)

  async function compartir() {
    const url = `${window.location.origin}${window.location.pathname}`

    // Intenta compartir junto con la imagen del flyer (mismo arte que el post de Instagram)
    try {
      const respuesta = await fetch(withBasePath("/flyer-te-veo-verde.png"))
      const blob = await respuesta.blob()
      const archivo = new File([blob], "te-veo-verde-barranquilla.png", { type: blob.type })

      if (navigator.canShare?.({ files: [archivo] })) {
        await navigator.share({ title: TITULO, text: TEXTO, url, files: [archivo] })
        return
      }
    } catch {
      // si falla traer la imagen, seguimos con las siguientes opciones
    }

    if (navigator.share) {
      try {
        await navigator.share({ title: TITULO, text: TEXTO, url })
        return
      } catch {
        // el usuario canceló el share o el navegador lo rechazó; seguimos al respaldo
      }
    }

    try {
      await navigator.clipboard.writeText(url)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // sin permiso de portapapeles: no hay más respaldo disponible
    }
  }

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <p className="text-sm text-muted-foreground">Invita a un amigo a este recorrido</p>
      <button
        type="button"
        onClick={compartir}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        {copiado ? (
          <Check className="size-3.5" aria-hidden="true" />
        ) : (
          <Share2 className="size-3.5" aria-hidden="true" />
        )}
        {copiado ? "¡Enlace copiado!" : "Compartir invitación"}
      </button>
    </div>
  )
}
