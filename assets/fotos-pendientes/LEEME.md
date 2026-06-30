# Fotos pendientes de optimizar

Esta carpeta es solo una bandeja de entrada temporal. Las fotos que pongas
aquí **no se publican solas** — hay que correr el comando de conversión
para que pasen a `public/` ya optimizadas.

## Cómo usarla

1. Crea una subcarpeta con el mismo nombre que va a tener en `public/`.
   Por ejemplo, para una foto de pez: `assets/fotos-pendientes/peces/`.
2. Guarda la foto adentro con el nombre final que quieres que tenga,
   por ejemplo `lisa.jpg` (cualquier formato sirve: jpg, png, webp, heic).
3. Desde la raíz del proyecto corre:

   ```bash
   corepack pnpm optimizar-fotos
   ```

4. Eso genera `public/peces/lisa.webp`, redimensionada y comprimida.
   Ya puedes usar `"/peces/lisa.webp"` como `imagen` en `lib/contenido.ts`.

El contenido de esta carpeta no se sube al repositorio (son los archivos
"crudos", pesados, antes de optimizar) — lo que sí se sube es el
resultado ya convertido en `public/`.
