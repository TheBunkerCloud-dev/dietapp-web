# DietApp Web

Sitio público de marketing + documentos legales de DietApp.

**Producción**: [`https://dietapp.life`](https://dietapp.life)

Stack: **Next.js 14** (App Router) · **React 18** · **TypeScript** · **Tailwind CSS v3** · **shadcn/ui** (legacy, copiado al repo) · **lucide-react** · **Geist** font.

Coherente visualmente con [`admin.dietapp.life`](https://admin.dietapp.life) (mismas variables HSL, mismo Button/Card, mismo registro tipográfico).

## Setup local

```bash
git clone https://github.com/TheBunkerCloud-dev/dietapp-web.git
cd dietapp-web
npm install
npm run dev
# http://localhost:3000
```

Build de producción:

```bash
npm run build
npm run start
```

## Estructura

```
app/
├── page.tsx           # Landing (Hero + Features + How it works + Privacy callout)
├── privacy/page.tsx   # Política de Privacidad (RGPD-ready)
├── terms/page.tsx     # Términos de Servicio
├── contact/page.tsx   # Contacto (mailto DevTeam@dietapp.life)
├── layout.tsx         # Root layout con metadata Open Graph + Geist fonts
└── globals.css        # Tailwind directives + CSS variables HSL theme

components/
├── layout/
│   ├── Header.tsx     # Logo + nav + CTA (sticky con backdrop blur)
│   ├── Footer.tsx     # Links legales + contacto + copyright
│   └── LegalPage.tsx  # Wrapper común para /privacy y /terms
└── ui/
    ├── button.tsx     # shadcn legacy + tamaño `xl` para hero CTA
    └── card.tsx       # shadcn legacy

lib/utils.ts           # cn() helper
```

## Despliegue

Vercel auto-deploy en cada push a `main` vía Vercel GitHub App
(misma instalación que dieta-admin — añadir el repo `dietapp-web` a
"Only select repositories" en `github.com/apps/vercel/installations`).

Dominio: el apex `dietapp.life` apunta a Vercel con A records (la
config exacta la da Vercel al añadir el dominio; coexisten con los MX
de Outlook sin conflicto porque MX y A son tipos distintos).

## Convenciones

- **Idioma**: español de España. Tono cercano pero profesional.
- **Sin tracking**: no analytics de terceros, no cookies de seguimiento (la web pública es estática).
- **Performance**: sin imágenes externas en el bundle inicial. Cuando añadamos screenshots de la app, optimizadas vía `next/image`.
- **Legal**: los textos de `/privacy` y `/terms` son borrador serio adaptado a DietApp. NO sustituyen revisión profesional — apto para Apple App Store review + GDPR baseline.

## Roadmap próximo

- Screenshots reales de la app cuando haya TestFlight build estable.
- Sección "Equipo" cuando DietApp se constituya como sociedad.
- i18n EN/ES si llegan users internacionales.
- OG image dinámica para sharing.
