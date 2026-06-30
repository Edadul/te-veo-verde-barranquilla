import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Anton } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Te Veo Verde Barranquilla · Ciénaga de Mallorquín",
  description:
    "Únete a Te Veo Verde Barranquilla: conecta con la naturaleza en la Ciénaga de Mallorquín, fotografía sus manglares y adopta un árbol.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: withBasePath("/icon-light-32x32.png"), sizes: "32x32" },
      {
        url: withBasePath("/icon-light-32x32.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
        url: withBasePath("/icon-dark-32x32.png"),
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: withBasePath("/apple-icon.png"),
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#2f5e2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`light ${geistSans.variable} ${anton.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
