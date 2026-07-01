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
  overlay = "bg-background/60",
  velocidad = 0.3,
}: Props) {
  const imgRef = useRef<HTMLDivElement>(null)
  const imagen = src ?? withBasePath("/hero/hereocie.avif")

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) return

    const el = imgRef.current
    if (!el) return

    let raf: number

    function update() {
      if (!el) return
      const wrapper = el.parentElement
      if (!wrapper) return
      const rect = wrapper.getBoundingClientRect()
      const elemCenter = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      // translate3d activa la composición en GPU para mayor fluidez
      el.style.transform = `translate3d(0, ${(elemCenter - viewCenter) * velocidad}px, 0)`
    }

    function onScroll() {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
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
          transition: "transform 80ms linear",
        }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  )
}
