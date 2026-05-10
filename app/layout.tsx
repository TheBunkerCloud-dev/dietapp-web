import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dietapp.life"),
  title: {
    default: "DietApp — tu coach nutricional con IA",
    template: "%s · DietApp",
  },
  description:
    "Saca foto de tus comidas, charla con el coach IA, recibe feedback al instante. Plan de calorías y macros adaptado a tus objetivos. Datos de salud cifrados.",
  keywords: [
    "DietApp",
    "coach nutricional",
    "IA",
    "macros",
    "calorías",
    "diario alimenticio",
    "fotos comida",
  ],
  openGraph: {
    title: "DietApp — tu coach nutricional con IA",
    description:
      "Saca foto, charla con el coach, registra tus comidas en segundos. Plan adaptado a tus objetivos.",
    url: "https://dietapp.life",
    siteName: "DietApp",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DietApp — tu coach nutricional con IA",
    description:
      "Saca foto, charla con el coach, registra comidas en segundos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(geistSans.variable, geistMono.variable)}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
