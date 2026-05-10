import { LegalPage, LegalSection } from "@/components/layout/LegalPage";

export const metadata = {
  title: "Términos de Servicio",
  description: "Términos y condiciones de uso de DietApp.",
};

// Términos de Servicio. Borrador adaptado por el equipo. Apto para
// Apple App Store review + cobertura básica de responsabilidad. Cuando
// crezcamos, revisión profesional.
export default function TermsPage() {
  return (
    <LegalPage title="Términos de Servicio" lastUpdated="10 de mayo de 2026">
      <p>
        Bienvenido a DietApp. Al usar nuestros servicios aceptas estos
        Términos. Léelos con calma. Si no estás de acuerdo, simplemente no
        uses la app.
      </p>

      <LegalSection number={1} title="Quiénes somos y qué ofrecemos">
        <p>
          DietApp es una aplicación de seguimiento nutricional asistida por
          IA. Ofrecemos: registro de comidas (texto y foto), cálculo
          automático de macros, plan de calorías personalizado y un coach
          conversacional basado en GPT-4o.
        </p>
        <p>
          La app es propiedad de DietApp (operada por Jorge Quesada hasta su
          constitución como sociedad). Contacto:{" "}
          <a
            href="mailto:DevTeam@dietapp.life"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            DevTeam@dietapp.life
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection number={2} title="No somos profesionales sanitarios">
        <p>
          <strong>
            DietApp no proporciona consejo médico, nutricional clínico, ni
            psicológico.
          </strong>{" "}
          La información del coach IA es orientativa y se basa en patrones
          generales — no sustituye la consulta con un médico, nutricionista
          colegiado, endocrino o cualquier profesional sanitario.
        </p>
        <p>
          Si tienes una condición de salud (diabetes, enfermedad renal,
          trastornos alimenticios, embarazo, etc.) consulta con tu médico
          ANTES de seguir cualquier plan o recomendación de DietApp.
        </p>
      </LegalSection>

      <LegalSection number={3} title="Tu cuenta">
        <p>
          Para usar DietApp necesitas crear una cuenta. Al hacerlo, aceptas:
        </p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>Proporcionar información veraz (al menos email funcional).</li>
          <li>
            Mantener tus credenciales seguras: la contraseña es tuya, no la
            compartas.
          </li>
          <li>
            Notificarnos si detectas un acceso no autorizado:{" "}
            <a
              href="mailto:DevTeam@dietapp.life"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              DevTeam@dietapp.life
            </a>
            .
          </li>
          <li>Tener al menos 16 años (ver Política de Privacidad §11).</li>
        </ul>
      </LegalSection>

      <LegalSection number={4} title="Uso aceptable">
        <p>Mientras uses DietApp NO puedes:</p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            Hacer scraping, ingeniería inversa o automatizar el uso del
            coach con fines comerciales.
          </li>
          <li>
            Subir contenido ilegal, ofensivo o que infrinja derechos de
            terceros.
          </li>
          <li>
            Intentar saltarte límites técnicos o acceder a datos de otros
            usuarios.
          </li>
          <li>
            Usar la app para promocionar dietas extremas, productos médicos
            sin licencia o desinformación sanitaria.
          </li>
          <li>
            Crear cuentas falsas, spammear el coach o hacer pruebas de carga
            sin nuestro permiso.
          </li>
        </ul>
        <p>
          Nos reservamos el derecho de suspender o eliminar cuentas que
          infrinjan estos términos. En caso de uso fraudulento o ilegal,
          podríamos colaborar con autoridades competentes.
        </p>
      </LegalSection>

      <LegalSection number={5} title="Propiedad intelectual">
        <p>
          La marca DietApp, el logo, el diseño de la app, el código fuente y
          el contenido editorial son propiedad nuestra (o de nuestros
          licenciantes). Te concedemos una licencia personal, no exclusiva,
          no transferible y revocable para usar la app conforme a estos
          Términos.
        </p>
        <p>
          Tus datos (lo que registras: comidas, fotos, conversaciones,
          plan) siguen siendo tuyos. Nos das una licencia limitada para
          procesarlos y servirte el producto, según se detalla en la
          Política de Privacidad.
        </p>
      </LegalSection>

      <LegalSection number={6} title="Disponibilidad del servicio">
        <p>
          Hacemos todo lo razonable para que DietApp esté disponible
          24/7, pero no garantizamos uptime al 100%. Pueden producirse
          interrupciones por mantenimiento, errores, problemas con
          terceros (AWS, OpenAI) o causas ajenas (fuerza mayor).
        </p>
        <p>
          Podemos modificar funcionalidades o descontinuar servicios. Si lo
          hacemos con cambios sustanciales, te avisaremos por email.
        </p>
      </LegalSection>

      <LegalSection number={7} title="Limitación de responsabilidad">
        <p>
          DietApp se ofrece <strong>"tal cual"</strong>, sin garantías
          expresas o implícitas más allá de las exigidas por la ley
          aplicable.
        </p>
        <p>
          En la medida máxima permitida por la legislación española:
        </p>
        <ul className="ml-6 list-disc space-y-1.5">
          <li>
            No somos responsables de daños derivados del uso o imposibilidad
            de uso de la app.
          </li>
          <li>
            No somos responsables de decisiones que tomes basándote
            exclusivamente en lo que diga el coach IA — siempre consulta con
            un profesional.
          </li>
          <li>
            No somos responsables de imprecisiones en cálculos de macros si
            se basan en datos parciales o ambiguos que tú proporciones.
          </li>
        </ul>
        <p>
          Esto no limita tus derechos como consumidor en virtud del Real
          Decreto Legislativo 1/2007 (Texto Refundido de la Ley General
          para la Defensa de los Consumidores y Usuarios) ni de la
          legislación europea aplicable.
        </p>
      </LegalSection>

      <LegalSection number={8} title="Precio">
        <p>
          DietApp está actualmente en desarrollo. Cuando publiquemos
          versiones de pago o suscripciones, los términos económicos se
          comunicarán claramente antes de cualquier cobro y aceptarás
          explícitamente tarifa y periodicidad.
        </p>
      </LegalSection>

      <LegalSection number={9} title="Terminación">
        <p>
          Puedes terminar tu cuenta en cualquier momento desde Ajustes →
          Cuenta → Eliminar cuenta o escribiendo a{" "}
          <a
            href="mailto:DevTeam@dietapp.life"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            DevTeam@dietapp.life
          </a>
          .
        </p>
        <p>
          Podemos terminar o suspender tu cuenta si: incumples estos
          Términos, hay sospecha fundada de fraude o uso ilícito, o nos
          requiere una autoridad competente. En esos casos te avisaremos
          siempre que sea legalmente posible.
        </p>
      </LegalSection>

      <LegalSection number={10} title="Cambios a estos Términos">
        <p>
          Si actualizamos estos Términos te avisaremos por email con al
          menos 14 días de antelación si los cambios son sustanciales.
          Si continúas usando DietApp tras la entrada en vigor, aceptas
          los nuevos Términos. Si no estás de acuerdo, puedes cerrar
          cuenta.
        </p>
      </LegalSection>

      <LegalSection number={11} title="Ley aplicable y jurisdicción">
        <p>
          Estos Términos se rigen por la legislación española y la
          normativa europea aplicable. Para cualquier disputa, las partes
          se someten a los Juzgados y Tribunales de la ciudad donde tenga
          domicilio el consumidor, o al fuero correspondiente según la
          normativa de protección al consumidor.
        </p>
      </LegalSection>

      <LegalSection number={12} title="Contacto">
        <p>
          Para cualquier consulta sobre estos Términos:{" "}
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
