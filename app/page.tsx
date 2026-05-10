import Link from "next/link";
import {
  Camera,
  MessageSquare,
  Target,
  ShieldCheck,
  Sparkles,
  Apple,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Landing pública. Server Component (estático). Estructura:
//   1. Hero — headline + sub + CTA
//   2. Features — 4 cards con icon
//   3. How it works — 4 steps
//   4. Privacy callout — cifrado + GDPR
//   5. Footer
//
// Sin imágenes externas para mantener el bundle ligero. Cuando tengamos
// screenshots de la app, las añadimos en /public.
export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <PrivacyCallout />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3 w-3" />
          Powered by GPT-4o
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
          Tu coach nutricional con IA
        </h1>
        <p className="mt-6 text-balance text-lg text-muted-foreground md:text-xl">
          Saca foto, charla con el coach y registra cada comida en segundos.
          Plan de calorías y macros adaptado a tus objetivos. Tus datos de
          salud, cifrados.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="xl" disabled aria-disabled>
            <Apple className="mr-2 h-4 w-4" />
            Pronto en App Store
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href="#how-it-works">Ver cómo funciona</Link>
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          En desarrollo · TestFlight cerrado disponible próximamente
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="border-t bg-muted/20 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pensado para que registrar comidas no sea trabajo
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sin formularios kilométricos. Sin buscar marcas en bases de datos.
            Habla con el coach o saca foto y listo.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          <FeatureCard
            icon={<MessageSquare className="h-5 w-5" />}
            title="Coach por chat"
            description="Habla con el coach como con un amigo. Te entiende, te pregunta lo necesario y registra macros sin que tengas que pensar en gramos."
          />
          <FeatureCard
            icon={<Camera className="h-5 w-5" />}
            title="Foto de la comida"
            description="Saca foto al plato. El coach reconoce ingredientes, raciones y calcula calorías + macros (proteína, carbos, grasa, purinas)."
          />
          <FeatureCard
            icon={<Target className="h-5 w-5" />}
            title="Plan a tu medida"
            description="Calorías y distribución de macros adaptadas a tu objetivo. Lo edita el coach contigo cuando tu cuerpo o tus metas cambien."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Tu salud, cifrada"
            description="Condiciones, alergias y medicación cifradas con AWS KMS. Solo se descifran con tu permiso explícito y queda registrado."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Crea tu cuenta",
      description:
        "Email, Apple o Google. Te preguntamos lo justo: edad, objetivo, alergias y condiciones (opcional).",
    },
    {
      n: 2,
      title: "Define tu plan",
      description:
        "El coach te propone calorías y macros para tu objetivo. Lo aceptas o lo ajustas charlando.",
    },
    {
      n: 3,
      title: "Registra al vuelo",
      description:
        "Saca foto o cuéntale al coach lo que comiste. Él hace el cálculo y guarda en tu diario.",
    },
    {
      n: 4,
      title: "Ajusta si hace falta",
      description:
        "Edita comidas o el plan en cualquier momento. El coach se adapta a tu progreso.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Cómo funciona
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cuatro pasos. Sin curva de aprendizaje.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="text-base font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PrivacyCallout() {
  return (
    <section className="border-t bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-lg border bg-card p-8 md:p-10">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            Tu salud no se vende. Punto.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Las condiciones, alergias y medicación que registras viajan
            cifradas con AWS KMS y solo se descifran cuando tú lo autorizas.
            Cada acceso queda registrado en un audit log inmutable.
          </p>
          <p className="mt-3 text-muted-foreground">
            En cualquier momento puedes <strong>exportar todos tus datos</strong>{" "}
            o <strong>borrar tu cuenta</strong> — derecho GDPR garantizado y
            implementado.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/privacy">Política de Privacidad</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/terms">Términos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
