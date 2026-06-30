// Enlace al formulario de inscripción.
// Reemplaza este valor con el link real (Google Forms, Typeform, etc.).
export const FORM_INSCRIPCION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebyv2ZoGQYci5vzYdRg3w4_WJluRr64J4sVHhOkQq1iUvzXQ/viewform?usp=dialog"; // p. ej. "https://forms.gle/tu-formulario"

export const INSTAGRAM_URL = "https://www.instagram.com/bqverde_fotos/";

// El evento es 2026-07-03, 8:00 a. m. hora de Bogotá (UTC-5 fijo, sin horario de verano).
// Duración estimada de 3 horas (8:00-11:00 a. m.); ajusta DTEND si la duración real es otra.
const CALENDARIO_INICIO_UTC = "20260703T130000Z";
const CALENDARIO_FIN_UTC = "20260703T160000Z";

export const calendario = {
  googleUrl: `https://calendar.google.com/calendar/render?${new URLSearchParams({
    action: "TEMPLATE",
    text: "Te Veo Verde Barranquilla",
    dates: `${CALENDARIO_INICIO_UTC}/${CALENDARIO_FIN_UTC}`,
    details:
      "Recorrido fotográfico y de conservación en la Ciénaga de Mallorquín. Trae tu cámara y adopta un árbol de manglar.",
    location: "Ciénaga de Mallorquín, Barranquilla",
  }).toString()}`,
  icsPath: "/te-veo-verde-barranquilla.ics",
};

export const evento = {
  titulo: "Te Veo Verde",
  ciudad: "Barranquilla",
  fecha: "03 de Julio",
  hora: "8:00 AM",
  lugar: "Ciénaga de Mallorquín",
  descripcion:
    "Una mañana para reconectar con la naturaleza: caminaremos por los senderos de la Ciénaga de Mallorquín, fotografiaremos sus manglares y aprenderemos a cuidarlos. Cada participante podrá adoptar un árbol del manglar y darle seguimiento.",
};

export type Categoria =
  | "arbol"
  | "pez"
  | "ave"
  | "mamifero"
  | "reptil"
  | "molusco";

export type GrupoPez = "Residentes" | "Visitantes frecuentes" | "Visitas ocasionales";

export type Especie = {
  nombre: string;
  cientifico: string;
  categoria: Categoria;
  /** Ruta de imagen optimizada. Si falta, la tarjeta muestra un ícono de respaldo. */
  imagen?: string;
  descripcion: string;
  datos: { etiqueta: string; valor: string }[];
  /** Etiqueta corta tipo badge, p. ej. "Dominante" o "Visitante ocasional". */
  estado?: string;
  /** Subgrupo de despliegue dentro de la categoría "pez". */
  grupo?: GrupoPez;
  /** Cita de la fuente de los datos. */
  fuente?: string;
};

export const resumenCienaga = {
  definicion:
    "Es una laguna costera donde el agua dulce del río Magdalena se mezcla con el agua salada del mar Caribe, formando lo que se conoce como agua salobre.",
  estadisticas: [
    { valor: "42", etiqueta: "especies de peces registradas", icono: "pez" as const },
    { valor: "24", etiqueta: "familias de peces", icono: "pez" as const },
    { valor: "155", etiqueta: "especies de aves registradas", icono: "ave" as const },
    { valor: "4.5 km", etiqueta: "de senderos elevados en el ecoparque", icono: "sendero" as const },
  ],
  fuente:
    "Arrieta & de la Rosa (2003), Bol. Invest. Mar. Cost. 32(1), INVEMAR · Ecoparque Ciénaga de Mallorquín",
};

export const arboles: Especie[] = [
  {
    nombre: "Mangle Rojo",
    cientifico: "Rhizophora mangle",
    categoria: "arbol",
    imagen: "/guia/mangle-rojo.png",
    descripcion:
      "Reconocible por sus raíces aéreas en forma de zancos que se hunden en el agua. Es la primera línea de defensa de la costa: estabiliza el suelo y sirve de refugio para peces y crustáceos.",
    datos: [
      { etiqueta: "Altura", valor: "Hasta 25 m" },
      { etiqueta: "Raíz", valor: "Zancos aéreos" },
      { etiqueta: "Hábitat", valor: "Borde del agua" },
      { etiqueta: "Rol", valor: "Vivero de peces" },
    ],
  },
  {
    nombre: "Mangle Negro",
    cientifico: "Avicennia germinans",
    categoria: "arbol",
    imagen: "/guia/mangle-negro.png",
    descripcion:
      "Crece detrás del mangle rojo y se distingue por los neumatóforos: pequeñas raíces que sobresalen del lodo como lápices para respirar. Excreta sal por sus hojas.",
    datos: [
      { etiqueta: "Altura", valor: "Hasta 20 m" },
      { etiqueta: "Raíz", valor: "Neumatóforos" },
      { etiqueta: "Hábitat", valor: "Suelo lodoso" },
      { etiqueta: "Rol", valor: "Filtra la sal" },
    ],
  },
  {
    nombre: "Mangle Blanco",
    cientifico: "Laguncularia racemosa",
    categoria: "arbol",
    imagen: "/guia/mangle-blanco.png",
    descripcion:
      "De hojas redondeadas y verde claro, suele ubicarse en zonas más altas y secas. Sus glándulas en el peciolo segregan azúcar y atraen a numerosos insectos polinizadores.",
    datos: [
      { etiqueta: "Altura", valor: "Hasta 18 m" },
      { etiqueta: "Hojas", valor: "Redondeadas" },
      { etiqueta: "Hábitat", valor: "Zonas altas" },
      { etiqueta: "Rol", valor: "Atrae polinizadores" },
    ],
  },
  {
    nombre: "Mangle Botoncillo",
    cientifico: "Conocarpus erectus",
    categoria: "arbol",
    imagen: "/guia/mangle-botoncillo.png",
    descripcion:
      "El más terrestre del grupo. Tiene corteza rugosa y frutos pequeños en forma de botón. Marca la transición entre el manglar y la tierra firme, protegiendo del viento y la erosión.",
    datos: [
      { etiqueta: "Altura", valor: "Hasta 12 m" },
      { etiqueta: "Fruto", valor: "Tipo botón" },
      { etiqueta: "Hábitat", valor: "Tierra firme" },
      { etiqueta: "Rol", valor: "Frena la erosión" },
    ],
  },
];

const FUENTE_PECES = "Arrieta & de la Rosa (2003), Bol. Invest. Mar. Cost. 32(1), INVEMAR";

export const peces: Especie[] = [
  {
    nombre: "Lisa",
    cientifico: "Mugil incilis",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Dominante",
    descripcion:
      "Especie más abundante y de mayor biomasa en todo el período de estudio, con máximos en noviembre. Eurihalina: tolera amplias variaciones de salinidad.",
    datos: [
      { etiqueta: "Familia", valor: "Mugilidae" },
      { etiqueta: "Abundancia", valor: "40.6%" },
      { etiqueta: "Biomasa", valor: "62.4%" },
      { etiqueta: "Hábitat", valor: "Ciénagas y aguas salobres" },
      { etiqueta: "Alimentación", valor: "Omnívora" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Anchoa filtrador",
    cientifico: "Cetengraulis edentulus",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Dominante",
    descripcion:
      "Segunda especie más abundante. Aumenta notablemente en la época seca mayor, llegando a superar a la lisa en algunos meses.",
    datos: [
      { etiqueta: "Familia", valor: "Engraulidae" },
      { etiqueta: "Abundancia", valor: "26.6%" },
      { etiqueta: "Biomasa", valor: "14.5%" },
      { etiqueta: "Hábitat", valor: "Aguas marinas costeras" },
      { etiqueta: "Alimentación", valor: "Macrofiltradora" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Mojarra rayada",
    cientifico: "Diapterus rhombeus",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Dominante",
    descripcion:
      "Tercera especie en abundancia y especie típica de ciénagas. Aumenta considerablemente en febrero.",
    datos: [
      { etiqueta: "Familia", valor: "Gerreidae" },
      { etiqueta: "Abundancia", valor: "9.5%" },
      { etiqueta: "Hábitat", valor: "Ciénagas y aguas salobres" },
      { etiqueta: "Alimentación", valor: "Invertebrados pequeños" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Mojarra blanca",
    cientifico: "Eugerres plumieri",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Dominante",
    descripcion:
      "Cuarta especie en abundancia total. Dominante en época seca menor, con incremento marcado en febrero.",
    datos: [
      { etiqueta: "Familia", valor: "Gerreidae" },
      { etiqueta: "Abundancia", valor: "8.8%" },
      { etiqueta: "Biomasa", valor: "5.4%" },
      { etiqueta: "Hábitat", valor: "Ciénagas y aguas salobres" },
      { etiqueta: "Alimentación", valor: "Invertebrados pequeños" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Chivo mapalé",
    cientifico: "Cathorops spixii",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Residente",
    descripcion:
      "Quinta especie en abundancia, con pico en febrero. Pertenece a Ariidae, una de las tres familias más representativas de la ciénaga.",
    datos: [
      { etiqueta: "Familia", valor: "Ariidae" },
      { etiqueta: "Abundancia", valor: "3.1%" },
      { etiqueta: "Hábitat", valor: "Estuarios y ciénagas" },
      { etiqueta: "Alimentación", valor: "Omnívoro bentónico" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Sábalo",
    cientifico: "Arius bonillai",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Residente",
    descripcion:
      "Relevante en biomasa dentro de la familia Ariidae, que mantiene una fuerte presencia en la ciénaga.",
    datos: [
      { etiqueta: "Familia", valor: "Ariidae" },
      { etiqueta: "Biomasa", valor: "3%" },
      { etiqueta: "Hábitat", valor: "Estuarios costeros" },
      { etiqueta: "Alimentación", valor: "Omnívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Lisa grande",
    cientifico: "Mugil liza",
    categoria: "pez",
    grupo: "Residentes",
    estado: "Residente",
    descripcion:
      "Quinta especie en biomasa. Misma familia que la lisa común (Mugilidae), una de las más representativas del estudio.",
    datos: [
      { etiqueta: "Familia", valor: "Mugilidae" },
      { etiqueta: "Biomasa", valor: "2.7%" },
      { etiqueta: "Hábitat", valor: "Aguas salobres y marinas" },
      { etiqueta: "Alimentación", valor: "Herbívoro / detritívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Jurel",
    cientifico: "Carangidae spp.",
    categoria: "pez",
    grupo: "Visitantes frecuentes",
    estado: "Visitante frecuente",
    descripcion:
      "La familia Carangidae fue la más diversa del estudio, con 4 especies. Ingresa principalmente con la influencia marina.",
    datos: [
      { etiqueta: "Familia", valor: "Carangidae" },
      { etiqueta: "Captura total", valor: "11%" },
      { etiqueta: "Hábitat", valor: "Aguas marinas y estuarinas" },
      { etiqueta: "Alimentación", valor: "Carnívoro piscívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Bagres marinos",
    cientifico: "Ariidae spp.",
    categoria: "pez",
    grupo: "Visitantes frecuentes",
    estado: "Visitante frecuente",
    descripcion:
      "Familia representada con 3 especies. Además del chivo mapalé y el sábalo, incluye una tercera especie visitante.",
    datos: [
      { etiqueta: "Familia", valor: "Ariidae" },
      { etiqueta: "Captura total", valor: "8%" },
      { etiqueta: "Hábitat", valor: "Estuarios y aguas costeras" },
      { etiqueta: "Alimentación", valor: "Omnívoro bentónico" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Corvinas",
    cientifico: "Sciaenidae spp.",
    categoria: "pez",
    grupo: "Visitantes frecuentes",
    estado: "Visitante frecuente",
    descripcion:
      "Familia con 3 especies, presentes principalmente durante la influencia marina y la temporada lluviosa.",
    datos: [
      { etiqueta: "Familia", valor: "Sciaenidae" },
      { etiqueta: "Captura total", valor: "8%" },
      { etiqueta: "Hábitat", valor: "Costero-estuarino" },
      { etiqueta: "Alimentación", valor: "Carnívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Mojarra (Gerreido)",
    cientifico: "Gerreidae spp.",
    categoria: "pez",
    grupo: "Visitantes frecuentes",
    estado: "Visitante frecuente",
    descripcion:
      "Familia con 4 especies. Además de la mojarra rayada y la mojarra blanca, ya residentes, incluye otras dos especies visitantes frecuentes.",
    datos: [
      { etiqueta: "Familia", valor: "Gerreidae" },
      { etiqueta: "Captura total", valor: "11%" },
      { etiqueta: "Hábitat", valor: "Costero-estuarino" },
      { etiqueta: "Alimentación", valor: "Invertebrados bentónicos" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Róbalo",
    cientifico: "Centropomus ensiferus",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Registrado solo en muestreos preliminares. Especie de alto valor comercial.",
    datos: [
      { etiqueta: "Familia", valor: "Centropomidae" },
      { etiqueta: "Hábitat", valor: "Estuarios y manglares" },
      { etiqueta: "Alimentación", valor: "Carnívoro piscívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Dormilón manchado",
    cientifico: "Dormitator maculatus",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Capturado solo en muestreos preliminares. Especie tolerante a amplias variaciones de salinidad.",
    datos: [
      { etiqueta: "Familia", valor: "Eleotridae" },
      { etiqueta: "Hábitat", valor: "Aguas dulces y salobres" },
      { etiqueta: "Alimentación", valor: "Omnívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Gobio banana",
    cientifico: "Awaous banana",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Especie de agua dulce que llega ocasionalmente a la ciénaga. Registrada solo en muestreos preliminares.",
    datos: [
      { etiqueta: "Familia", valor: "Gobiidae" },
      { etiqueta: "Hábitat", valor: "Ríos y estuarios" },
      { etiqueta: "Alimentación", valor: "Omnívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Eleotris",
    cientifico: "Eleotris pisonis",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Habita sustratos fango-arenosos similares a los de Mallorquín. Registrada solo en muestreos preliminares.",
    datos: [
      { etiqueta: "Familia", valor: "Eleotridae" },
      { etiqueta: "Hábitat", valor: "Fondos vegetados estuarinos" },
      { etiqueta: "Alimentación", valor: "Carnívoro bentónico" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Guppy",
    cientifico: "Poecilia sphenops",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Única especie típica de agua dulce registrada en el estudio; llega a los estuarios de forma ocasional.",
    datos: [
      { etiqueta: "Familia", valor: "Poeciliidae" },
      { etiqueta: "Hábitat", valor: "Aguas dulces y salobres" },
      { etiqueta: "Alimentación", valor: "Omnívoro" },
    ],
    fuente: FUENTE_PECES,
  },
  {
    nombre: "Gobio estuarino",
    cientifico: "Gobionellus boleosoma",
    categoria: "pez",
    grupo: "Visitas ocasionales",
    estado: "Visitante ocasional",
    descripcion:
      "Especie típica de fondos blandos costero-estuarinos. Registrada solo en muestreos preliminares.",
    datos: [
      { etiqueta: "Familia", valor: "Gobiidae" },
      { etiqueta: "Hábitat", valor: "Fondos estuarinos" },
      { etiqueta: "Alimentación", valor: "Carnívoro bentónico" },
    ],
    fuente: FUENTE_PECES,
  },
];

const FUENTE_ECOPARQUE = "Ecoparque Ciénaga de Mallorquín";

// Lista reducida a propósito: de las especies que cita el ecoparque (sin estudio
// académico de respaldo), estas son las más esperables en un manglar/estuario del
// Caribe colombiano y con menor riesgo de ser un error o una exageración del listado
// original. El resto se deja por fuera hasta tener fuente y foto propias confirmadas.
export const faunaDestacada: Especie[] = [
  {
    nombre: "Cormorán neotropical",
    cientifico: "Nannopterum brasilianum",
    categoria: "ave",
    descripcion: "Una de las 155 especies de aves registradas en la ciénaga.",
    datos: [],
    fuente: FUENTE_ECOPARQUE,
  },
  {
    nombre: "Babilla",
    cientifico: "Caiman crocodilus fuscus",
    categoria: "reptil",
    descripcion: "Reptil registrado en los canales de la ciénaga.",
    datos: [],
    fuente: FUENTE_ECOPARQUE,
  },
  {
    nombre: "Iguana verde",
    cientifico: "Iguana iguana",
    categoria: "reptil",
    descripcion: "Reptil registrado en el área del ecoparque.",
    datos: [],
    fuente: FUENTE_ECOPARQUE,
  },
];

export const galeria = [
  { src: "/galeria/sendero.webp", alt: "Sendero de madera entre los manglares" },
  { src: "/galeria/aves.webp", alt: "Garza en la ciénaga" },
  {
    src: "/galeria/atardecer.webp",
    alt: "Atardecer sobre la Ciénaga de Mallorquín",
  },
  {
    src: "/galeria/raices.webp",
    alt: "Raíces del mangle rojo reflejadas en el agua",
  },
  {
    src: "/galeria/visitantes.webp",
    alt: "Grupo de visitantes en el sendero elevado del manglar",
  },
  {
    src: "/galeria/plantula.webp",
    alt: "Plántula de mangle lista para sembrar",
  },
];
