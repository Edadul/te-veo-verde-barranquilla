import { SiteHeader } from "@/components/site-header"
import { HeroEvento } from "@/components/hero-evento"
import { GuiaTeaser } from "@/components/guia-teaser"
import { GaleriaFotos } from "@/components/galeria-fotos"
import { Inscripcion } from "@/components/inscripcion"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroEvento />
        <GuiaTeaser />
        <GaleriaFotos />
        <Inscripcion />
      </main>
      <SiteFooter />
    </div>
  )
}
