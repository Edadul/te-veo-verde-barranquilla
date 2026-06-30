// Convierte las fotos de assets/fotos-pendientes/ a WebP optimizado dentro de public/,
// preservando la misma subcarpeta y nombre de archivo (solo cambia la extensión).
// Uso: corepack pnpm optimizar-fotos

import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const RAIZ = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ORIGEN = path.join(RAIZ, "assets", "fotos-pendientes");
const DESTINO = path.join(RAIZ, "public");

const EXTENSIONES_VALIDAS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
  ".avif",
  ".tiff",
  ".gif",
]);

const ANCHO_MAXIMO = 1200;
const CALIDAD_WEBP = 78;

async function* recorrerImagenes(carpeta) {
  const entradas = await readdir(carpeta, { withFileTypes: true });
  for (const entrada of entradas) {
    const rutaCompleta = path.join(carpeta, entrada.name);
    if (entrada.isDirectory()) {
      yield* recorrerImagenes(rutaCompleta);
    } else if (EXTENSIONES_VALIDAS.has(path.extname(entrada.name).toLowerCase())) {
      yield rutaCompleta;
    }
  }
}

function formatoKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  try {
    await stat(ORIGEN);
  } catch {
    console.log(`No existe ${ORIGEN}, nada que optimizar.`);
    return;
  }

  let procesadas = 0;
  let conError = 0;
  let pesoOriginalTotal = 0;
  let pesoFinalTotal = 0;

  for await (const rutaOrigen of recorrerImagenes(ORIGEN)) {
    const rutaRelativa = path.relative(ORIGEN, rutaOrigen);
    const sinExtension = rutaRelativa.slice(0, -path.extname(rutaRelativa).length);
    const rutaDestino = path.join(DESTINO, `${sinExtension}.webp`);

    try {
      const { size: pesoOriginal } = await stat(rutaOrigen);
      await mkdir(path.dirname(rutaDestino), { recursive: true });

      await sharp(rutaOrigen)
        .rotate() // respeta la orientación EXIF de fotos tomadas con celular
        .resize({ width: ANCHO_MAXIMO, withoutEnlargement: true })
        .webp({ quality: CALIDAD_WEBP })
        .toFile(rutaDestino);

      const { size: pesoFinal } = await stat(rutaDestino);
      pesoOriginalTotal += pesoOriginal;
      pesoFinalTotal += pesoFinal;
      procesadas++;

      const ahorro = pesoOriginal > 0 ? Math.round((1 - pesoFinal / pesoOriginal) * 100) : 0;
      console.log(
        `✓ ${rutaRelativa} -> ${path.relative(RAIZ, rutaDestino)}  (${formatoKB(pesoOriginal)} -> ${formatoKB(pesoFinal)}, -${ahorro}%)`
      );
    } catch (error) {
      conError++;
      console.error(`✗ ${rutaRelativa}: ${error instanceof Error ? error.message : error}`);
    }
  }

  if (procesadas === 0 && conError === 0) {
    console.log("No encontré fotos nuevas en assets/fotos-pendientes/.");
    return;
  }

  console.log("");
  console.log(`Listo: ${procesadas} foto(s) optimizada(s)${conError > 0 ? `, ${conError} con error` : ""}.`);
  if (procesadas > 0) {
    console.log(`Peso total: ${formatoKB(pesoOriginalTotal)} -> ${formatoKB(pesoFinalTotal)}`);
  }
}

main();
