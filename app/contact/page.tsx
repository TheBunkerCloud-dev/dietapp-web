import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contacto",
  description: "Contacta con el equipo de DietApp.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Bug, pregunta, idea o queja sobre privacidad? Escribe.
            Respondemos cada email.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              title="Email"
              description="Para soporte general, bugs, preguntas sobre cuenta o solicitudes GDPR."
              cta="DevTeam@dietapp.life"
              href="mailto:DevTeam@dietapp.life"
            />
            <ContactCard
              icon={<MessageCircle className="h-5 w-5" />}
              title="Privacidad y datos"
              description="Para ejercer derechos GDPR (acceso, borrado, portabilidad) o reportar acceso indebido a datos de salud."
              cta="DevTeam@dietapp.life"
              href="mailto:DevTeam@dietapp.life?subject=Privacidad%20%2F%20GDPR"
            />
          </div>

          <div className="mt-10 rounded-lg border bg-muted/20 p-6 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Tiempos de respuesta</strong>:
              soporte general en 48h hábiles. Solicitudes GDPR (acceso/borrado)
              en máximo 30 días según el RGPD.
            </p>
            <p className="mt-3">
              Si quieres borrar tu cuenta inmediatamente y ya tienes la app
              instalada, puedes hacerlo desde Ajustes → Cuenta → Eliminar
              cuenta.
            </p>
          </div>

          <div className="mt-8">
            <Button variant="ghost" asChild>
              <Link href="/">← Volver a inicio</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactCard({
  icon,
  title,
  description,
  cta,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-col gap-2 rounded-lg border p-5 transition-colors hover:bg-muted/50"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="mt-2 text-sm font-medium text-primary">{cta} →</p>
    </a>
  );
}
