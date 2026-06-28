import { Leaf } from "lucide-react"

const navItems = [
  { label: "El evento", href: "#evento" },
  { label: "Guía de árboles", href: "#guia" },
  { label: "Galería", href: "#galeria" },
  { label: "Inscripción", href: "#inscripcion" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg leading-none tracking-wide text-primary">
            Te Veo Verde
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#inscripcion"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quiero ir
        </a>
      </div>
    </header>
  )
}
