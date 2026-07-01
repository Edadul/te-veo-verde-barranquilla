"use client"

import { useEffect, useRef } from "react"
import { withBasePath } from "@/lib/utils"

interface Props {
  /** Ruta pública de la imagen de fondo (usa withBasePath antes de pasar) */
  src?: string
  /** Clase Tailwind del overlay de color que se pone encima de la foto */
  overlay?: string
  /** Velocidad del parallax: 0 = foto fija, 1 = va igual que el scroll. Default 0.3 */
  velocidad?: number
}

export function HeroParallax({
  src,
  overlay = "bg-background/78",
  velocidad = 0.3,
}: Props) {
  const imgRef = useRef<HTMLDivElement>(null)
  const imagen = src ?? withBasePath("/galeria/hereocie.avif")

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) return

    const el = imgRef.current
    if (!el) return

    let raf: number

    function update() {
      if (!el) return
      // Calcula offset relativo al viewport: cuando el centro de la sección
      // coincide con el centro del viewport, el offset es 0 (imagen centrada).
      // Funciona tanto para secciones al tope como en cualquier punto de la página.
      const wrapper = el.parentElement
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const elemCenter = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      el.style.transform = `translateY(${(elemCenter - viewCenter) * velocidad}px)`
    }

    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update() // posición inicial antes del primer scroll
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [velocidad])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={imgRef}
        className="absolute -top-[30%] left-0 h-[160%] w-full"
        style={{
          backgroundImage: `url(${imagen})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          willChange: "transform",
        }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  )
}
