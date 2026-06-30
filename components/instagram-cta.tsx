import { ArrowUpRight } from "lucide-react"
import { InstagramIcon } from "@/components/decor/instagram-icon"
import { INSTAGRAM_URL } from "@/lib/contenido"

export function InstagramCta() {
  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-secondary/40 p-6 text-center sm:flex-row sm:text-left">
      <div className="flex items-center gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <InstagramIcon size={20} />
        </span>
        <div>
          <p className="font-heading text-xl tracking-wide text-foreground">@bqverde_fotos</p>
          <p className="text-sm text-muted-foreground">
            Más fotos del manglar y próximos recorridos en Instagram.
          </p>
        </div>
      </div>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Seguir en Instagram
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}
