import Image from "next/image"
import Link from "next/link"
import { withBasePath } from "@/lib/utils"

const navItems = [
  { label: "El evento", href: "/#evento" },
  { label: "Guía de la ciénaga", href: "/guia" },
  { label: "Galería", href: "/#galeria" },
  { label: "Inscripción", href: "/#inscripcion" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/#inicio" className="flex items-center gap-2.5">
          <span className="relative size-10 overflow-hidden rounded-full">
            <Image
              src={withBasePath("/logo.png")}
              alt="Barranquilla Verde Fotografía"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="font-heading text-lg leading-none tracking-wide text-primary">
            Te Veo Verde
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#inscripcion"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Quiero ir
        </Link>
      </div>
    </header>
  )
}
