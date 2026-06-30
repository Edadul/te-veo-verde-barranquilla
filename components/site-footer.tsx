import Image from "next/image"
import { withBasePath } from "@/lib/utils"
import { InstagramIcon } from "@/components/decor/instagram-icon"
import { INSTAGRAM_URL } from "@/lib/contenido"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div className="flex items-center gap-2.5">
          <span className="relative size-10 overflow-hidden rounded-full">
            <Image
              src={withBasePath("/logo.png")}
              alt="Barranquilla Verde Fotografía"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="font-heading text-lg tracking-wide text-primary">
            Te Veo Verde Barranquilla
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          Un proyecto para conectar con la naturaleza · Ciénaga de Mallorquín, Barranquilla
        </p>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Barranquilla Verde Fotografía"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <InstagramIcon size={20} />
        </a>
      </div>
    </footer>
  )
}
