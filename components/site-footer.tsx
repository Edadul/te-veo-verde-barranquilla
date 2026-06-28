import { Leaf } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-lg tracking-wide text-primary">
            Te Veo Verde Barranquilla
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Un proyecto para conectar con la naturaleza · Ciénaga de Mallorquín, Barranquilla
        </p>
      </div>
    </footer>
  )
}
