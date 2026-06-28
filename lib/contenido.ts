// Enlace al formulario de inscripción.
// Reemplaza este valor con el link real (Google Forms, Typeform, etc.).
export const FORM_INSCRIPCION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebyv2ZoGQYci5vzYdRg3w4_WJluRr64J4sVHhOkQq1iUvzXQ/viewform?usp=dialog"; // p. ej. "https://forms.gle/tu-formulario"

export const evento = {
  titulo: "Te Veo Verde",
  ciudad: "Barranquilla",
  fecha: "03 de Julio",
  hora: "8:00 AM",
  lugar: "Ciénaga de Mallorquín",
  descripcion:
    "Una mañana para reconectar con la naturaleza: caminaremos por los senderos de la Ciénaga de Mallorquín, fotografiaremos sus manglares y aprenderemos a cuidarlos. Cada participante podrá adoptar un árbol del manglar y darle seguimiento.",
};

export type Arbol = {
  nombre: string;
  cientifico: string;
  imagen: string;
  descripcion: string;
  datos: { etiqueta: string; valor: string }[];
};

export const arboles: Arbol[] = [
  {
    nombre: "Mangle Rojo",
    cientifico: "Rhizophora mangle",
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

export const galeria = [
  { src: "/galeria/sendero.png", alt: "Sendero de madera entre los manglares" },
  { src: "/galeria/aves.png", alt: "Garzas en la ciénaga" },
  {
    src: "/galeria/atardecer.png",
    alt: "Atardecer sobre la Ciénaga de Mallorquín",
  },
  {
    src: "/galeria/raices.png",
    alt: "Raíces del mangle rojo reflejadas en el agua",
  },
  {
    src: "/galeria/visitantes.png",
    alt: "Visitantes fotografiando el manglar",
  },
  {
    src: "/galeria/plantula.png",
    alt: "Plántula de mangle lista para sembrar",
  },
];
