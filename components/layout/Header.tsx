import Link from "next/link";

// Header del sitio público. Logo + nav + CTA.
// Sticky con backdrop blur en scroll para que el contenido respire.
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-block h-6 w-6 rounded-md bg-primary" />
          DietApp
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Funcionalidades
          </Link>
          <Link
            href="/#how-it-works"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Cómo funciona
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
