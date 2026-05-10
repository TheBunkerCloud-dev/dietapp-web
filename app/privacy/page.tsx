import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo recopilamos, usamos y protegemos tus datos en DietApp. Cumplimiento RGPD.",
};

// Política de Privacidad. Borrador adaptado a DietApp por el equipo.
// NO sustituye a una revisión por abogado — apto para Apple App Store
// review + GDPR baseline. Cuando crezcamos, revisión profesional.
export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidad" lastUpdated="10 de mayo de 2026">
      <p>
        En DietApp respetamos tu privacidad. Esta Política explica qué datos
        recopilamos, por qué, cómo los protegemos y los derechos que tienes
        sobre ellos. Si tienes dudas, escribe a{" "}
        <a
          href="mailto:DevTeam@dietapp.life"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          DevTeam@dietapp.life
        </a>
        .
      </p>

      <LegalSection number={1} title="Quién es responsable de tus datos">
        <p>
          El responsable del tratamiento es DietApp (operada por Jorge
          Quesada hasta migración a entidad legal en curso), con dirección de
          contacto <strong>DevTeam@dietapp.life</strong>. Si en el futuro
          DietApp se constituye como sociedad mercantil, esta Política se
          actualizará para reflejarlo.
        </p>
      </LegalSection>

      <LegalSection number={2} title="Qué datos recopilamos">
        <p>
          Recopilamos solo los datos necesarios para que el servicio funcione:
        </p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            <strong>Identificación</strong>: email (al registrarte o al iniciar
            sesión con Apple/Google) y, si lo proporcionas, nombre.
          </li>
          <li>
            <strong>Perfil nutricional</strong>: edad, sexo (opcional),
            altura, peso, nivel de actividad, objetivo (perder peso, ganar
            masa, controlar ácido úrico, etc.) y preferencias.
          </li>
          <li>
            <strong>Datos de salud (opcionales)</strong>: condiciones médicas,
            alergias, medicación. Estos datos se cifran con AWS KMS antes de
            persistirlos. Solo se descifran con tu autorización explícita o
            por intervención puntual del equipo (con audit log + email
            automático notificándote).
          </li>
          <li>
            <strong>Diario alimenticio</strong>: cada comida que registras
            (descripción, calorías, macros, fotografía) y la conversación con
            el coach IA.
          </li>
          <li>
            <strong>Fotos de comida</strong>: imágenes que subes para que el
            coach analice. Se almacenan en AWS S3 (bucket privado) y se
            sirven con URLs firmadas de TTL corto.
          </li>
          <li>
            <strong>Datos técnicos</strong>: tipo de dispositivo, versión del
            sistema operativo y diagnóstico de errores (anónimo) para
            mantener la app funcionando.
          </li>
        </ul>
        <p>
          NO recopilamos: ubicación, contactos, calendario, micrófono ni
          cualquier dato no listado arriba.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Para qué usamos tus datos">
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            Operar el servicio: autenticarte, registrar comidas, calcular tu
            plan, mostrarte tu histórico.
          </li>
          <li>
            Permitir que el coach IA te dé recomendaciones contextualizadas
            (basadas en tu objetivo, condiciones y consumo reciente).
          </li>
          <li>
            Mejorar la app: análisis agregado y anónimo de uso para detectar
            fallos. NO usamos datos personales identificables para
            entrenar modelos IA propios.
          </li>
          <li>
            Cumplir obligaciones legales (responder requerimientos de
            autoridad competente cuando sea legalmente exigible).
          </li>
        </ul>
        <p>
          <strong>NO vendemos ni cedemos tus datos a terceros</strong> con
          fines comerciales. Punto.
        </p>
      </LegalSection>

      <LegalSection number={4} title="Base legal del tratamiento">
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            <strong>Consentimiento</strong> para datos de salud (categoría
            especial RGPD art. 9).
          </li>
          <li>
            <strong>Ejecución de contrato</strong> para los datos
            indispensables del servicio (cuenta, plan, diario).
          </li>
          <li>
            <strong>Interés legítimo</strong> para diagnóstico técnico anónimo
            y prevención de abuso del servicio.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={5} title="Cómo protegemos tus datos">
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            <strong>Cifrado en tránsito</strong>: HTTPS/TLS en todas las
            comunicaciones.
          </li>
          <li>
            <strong>Cifrado en reposo</strong>: tablas DynamoDB y bucket S3
            con cifrado AWS por defecto. Datos de salud cifrados a mayores
            con AWS KMS (clave gestionada por DietApp con rotación anual).
          </li>
          <li>
            <strong>Audit log inmutable</strong>: cada acceso administrativo
            a tu cuenta queda registrado en AWS DynamoDB (tabla
            AdminAuditLog) con identidad del admin, IP, razón y timestamp.
          </li>
          <li>
            <strong>Autenticación reforzada</strong>: cuentas administrativas
            con autenticación en dos pasos (TOTP) obligatoria.
          </li>
          <li>
            <strong>Acceso restringido</strong>: solo personal estrictamente
            necesario tiene credenciales para acceder al backend.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={6} title="Servicios de terceros">
        <p>Para prestar el servicio, los datos viajan a estos terceros:</p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            <strong>Amazon Web Services (AWS)</strong>: hosting,
            almacenamiento (DynamoDB, S3), autenticación (Cognito), cifrado
            (KMS), email (SES). Región eu-north-1 (Estocolmo). DPA firmado.
          </li>
          <li>
            <strong>OpenAI (GPT-4o)</strong>: el coach usa la API de OpenAI
            para entender tus mensajes y analizar fotos. Las llamadas son
            zero-retention (OpenAI no entrena con nuestros datos según su DPA
            comercial).
          </li>
          <li>
            <strong>Apple Inc.</strong> y <strong>Google LLC</strong>: si
            inicias sesión con Apple ID o Google. Ellos te autentican y nos
            devuelven un identificador anónimo + tu email.
          </li>
          <li>
            <strong>Vercel</strong>: hosting de las webs públicas
            (dietapp.life y admin.dietapp.life). Sin acceso a la base de
            datos.
          </li>
          <li>
            <strong>Microsoft 365</strong>: buzón de correo
            DevTeam@dietapp.life para soporte.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={7} title="Transferencias internacionales">
        <p>
          Los datos se almacenan en AWS Estocolmo (UE). OpenAI opera desde
          Estados Unidos: las transferencias se amparan en las Standard
          Contractual Clauses de la Comisión Europea. Apple y Google operan
          servicios globales con marcos de cumplimiento equivalentes (DPF /
          SCCs).
        </p>
      </LegalSection>

      <LegalSection number={8} title="Cuánto tiempo guardamos tus datos">
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            Mientras tengas cuenta activa, conservamos tus datos para
            prestarte el servicio.
          </li>
          <li>
            Si solicitas borrado, eliminamos tu cuenta y todos los datos
            asociados (perfil, plan, diario, fotos, conversaciones) en un
            plazo máximo de 30 días.
          </li>
          <li>
            El audit log de acciones administrativas se conserva 5 años por
            política de seguridad y posibles requerimientos legales (esto NO
            incluye contenido tuyo: solo registra QUÉ admin hizo QUÉ acción
            sobre TU cuenta).
          </li>
          <li>
            Si la cuenta queda inactiva 24 meses, te avisamos por email y, si
            no hay respuesta, procedemos al borrado.
          </li>
        </ul>
      </LegalSection>

      <LegalSection number={9} title="Tus derechos (RGPD)">
        <p>Sobre tus datos, tienes derecho a:</p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            <strong>Acceder</strong> y obtener una copia de los datos que
            tenemos sobre ti.
          </li>
          <li>
            <strong>Rectificar</strong> datos inexactos.
          </li>
          <li>
            <strong>Suprimir</strong> tu cuenta y datos asociados (derecho al
            olvido).
          </li>
          <li>
            <strong>Portabilidad</strong>: exportar tus datos en formato
            estructurado (JSON).
          </li>
          <li>
            <strong>Oponerte</strong> a tratamientos basados en interés
            legítimo.
          </li>
          <li>
            <strong>Limitar</strong> el tratamiento mientras se resuelve una
            disputa.
          </li>
          <li>
            <strong>Retirar el consentimiento</strong> en cualquier momento.
          </li>
          <li>
            <strong>Reclamar</strong> ante la Agencia Española de Protección
            de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              www.aepd.es
            </a>
            ).
          </li>
        </ul>
        <p>
          Para ejercer estos derechos: escribe a{" "}
          <a
            href="mailto:DevTeam@dietapp.life?subject=Privacidad%20%2F%20GDPR"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            DevTeam@dietapp.life
          </a>{" "}
          o usa la opción <em>Eliminar cuenta</em> directamente desde la app.
          Respondemos en máximo 30 días.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Cookies y tecnologías similares">
        <p>
          La web pública (dietapp.life) NO usa cookies de seguimiento ni
          analytics de terceros.
        </p>
        <p>
          El panel administrativo (admin.dietapp.life) usa cookies HttpOnly de
          sesión gestionadas por AWS Cognito vía Amplify SSR adapter. Son
          estrictamente necesarias para la autenticación y caducan al cerrar
          sesión.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Menores">
        <p>
          DietApp no está dirigida a menores de 16 años. Si detectamos que
          una cuenta corresponde a un menor sin autorización parental,
          procederemos al borrado.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Cambios a esta política">
        <p>
          Si actualizamos esta Política, te avisaremos por email (a la
          dirección registrada) con al menos 14 días de antelación si los
          cambios son sustanciales. La fecha de última actualización aparece
          al inicio del documento.
        </p>
      </LegalSection>

      <LegalSection number={13} title="Contacto">
        <p>
          Para cualquier consulta sobre privacidad o datos:{" "}
          <a
            href="mailto:DevTeam@dietapp.life"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            DevTeam@dietapp.life
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
