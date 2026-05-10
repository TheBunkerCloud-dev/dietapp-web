import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Wrapper común para páginas legales (Privacy + Terms). Estilo:
//   - Container estrecho (lectura cómoda)
//   - Título grande + fecha de última revisión
//   - Prose-like spacing entre secciones (sin plugin @tailwindcss/typography
//     porque el sitio es liviano y no nos hace falta)
export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container py-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Última actualización: {lastUpdated}
          </p>

          <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </div>

          <div className="mt-12 border-t pt-8">
            <Button variant="ghost" asChild>
              <Link href="/">← Volver a inicio</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

// Helper para secciones de la página legal — heading + content vertical.
export function LegalSection({
  number,
  title,
  children,
}: {
  number: number | string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold tracking-tight">
        {number}. {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}
