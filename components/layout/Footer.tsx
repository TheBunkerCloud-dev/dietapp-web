import Link from "next/link";

// Footer del sitio público. Links legales obligatorios para Apple
// App Store + GDPR (Política de Privacidad, Términos, Contacto).
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20 py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="inline-block h-5 w-5 rounded bg-primary" />
            DietApp
          </Link>
          <p className="text-xs text-muted-foreground">
            © {year} DietApp. Todos los derechos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/privacy" className="hover:text-foreground">
            Política de Privacidad
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Términos
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contacto
          </Link>
          <a
            href="mailto:DevTeam@dietapp.life"
            className="hover:text-foreground"
          >
            DevTeam@dietapp.life
          </a>
        </nav>
      </div>
    </footer>
  );
}
