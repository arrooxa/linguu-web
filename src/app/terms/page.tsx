import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso — Linguu",
  description:
    "Termos de uso do Linguu, incluindo regras de assinatura, renovação automática e cancelamento.",
};

const UPDATED_AT = "5 de maio de 2026";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="inline-block text-sm hover:underline"
        style={{ color: "var(--text-muted)" }}
      >
        ← Voltar para o site
      </Link>

      <h1
        className="mt-6 text-3xl sm:text-4xl"
        style={{ color: "var(--primary)", fontWeight: 900 }}
      >
        Termos de Uso
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
        Última atualização: {UPDATED_AT}
      </p>

      <div className="prose-styles mt-8 space-y-6 text-base leading-relaxed">
        <p>
          Estes Termos regulam o uso do aplicativo Linguu. Ao criar uma conta
          ou usar o app, você (responsável legal pela criança) concorda com
          estas regras.
        </p>

        <Section title="1. O serviço">
          <p>
            O Linguu é um aplicativo de aprendizado de inglês por voz para
            crianças de 6 a 8 anos. O conteúdo é em português brasileiro, com
            palavras em inglês introduzidas no contexto da conversa. O
            aplicativo usa serviços de inteligência artificial (OpenAI) para
            transcrever a fala e gerar respostas do tutor — veja a{" "}
            <Link
              href="/privacy"
              style={{ color: "var(--primary)", fontWeight: 700 }}
              className="hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </Section>

        <Section title="2. Conta e elegibilidade">
          <p>
            A conta deve ser criada por um responsável legal maior de 18 anos.
            O responsável é responsável pela supervisão do uso pela criança e
            pela veracidade das informações fornecidas (nome e idade da
            criança).
          </p>
        </Section>

        <Section title="3. Trial gratuito e assinatura">
          <p>
            Toda conta começa com uma <strong>missão de boas-vindas grátis</strong>{" "}
            (trial). Após o trial, o acesso ao conteúdo diário exige uma
            assinatura ativa.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>
              <strong>Plano:</strong> Linguu Mensal.
            </li>
            <li>
              <strong>Duração:</strong> 1 mês (renovação automática).
            </li>
            <li>
              <strong>Preço:</strong> R$ 49,00 por mês (ou o valor exibido na
              tela de assinatura no momento da compra, na moeda local
              configurada na App Store / Google Play).
            </li>
            <li>
              <strong>Renovação automática:</strong> a assinatura é renovada
              automaticamente ao final de cada período, pelo mesmo valor, até
              que seja cancelada. A cobrança é feita pela Apple App Store ou
              Google Play, conforme a plataforma usada na compra.
            </li>
            <li>
              <strong>Cancelamento:</strong> pode ser feito a qualquer momento
              nas configurações de assinatura da App Store ou Google Play. O
              cancelamento entra em vigor ao final do período já pago — não há
              reembolso proporcional.
            </li>
          </ul>
        </Section>

        <Section title="4. Pagamentos">
          <p>
            Todos os pagamentos são processados pela Apple App Store ou Google
            Play. O Linguu não tem acesso a dados de cartão de crédito.
            Reembolsos seguem a política da loja onde a compra foi feita.
          </p>
        </Section>

        <Section title="5. Uso aceitável">
          <p>O usuário concorda em não:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tentar acessar dados de outras contas;</li>
            <li>Usar o serviço para atividades ilegais ou abusivas;</li>
            <li>
              Tentar fazer engenharia reversa, descompilar ou extrair os
              modelos de IA usados pelo app;
            </li>
            <li>
              Inserir dados pessoais sensíveis durante as missões — o app é
              configurado para detectar e bloquear esse tipo de informação.
            </li>
          </ul>
        </Section>

        <Section title="6. Conteúdo gerado por IA">
          <p>
            As respostas do tutor são geradas por modelos de linguagem. Apesar
            de filtros de segurança, conteúdo gerado por IA pode
            ocasionalmente conter imprecisões. O Linguu não substitui ensino
            formal de inglês — é uma ferramenta complementar.
          </p>
        </Section>

        <Section title="7. Encerramento da conta">
          <p>
            O responsável pode encerrar a conta a qualquer momento na tela de
            Configurações do app. A exclusão remove permanentemente os dados
            associados em até 30 dias. O cancelamento da assinatura deve ser
            feito separadamente na App Store ou Google Play.
          </p>
        </Section>

        <Section title="8. Limitação de responsabilidade">
          <p>
            O Linguu é fornecido &quot;como está&quot;. Na máxima extensão
            permitida por lei, não somos responsáveis por danos indiretos
            decorrentes do uso do app. Nada nestes Termos limita os direitos
            garantidos pelo Código de Defesa do Consumidor.
          </p>
        </Section>

        <Section title="9. Alterações">
          <p>
            Podemos atualizar estes Termos. Mudanças materiais serão
            comunicadas no app antes de entrarem em vigor.
          </p>
        </Section>

        <Section title="10. Lei aplicável">
          <p>
            Estes Termos são regidos pelas leis do Brasil. Foro: comarca do
            domicílio do consumidor.
          </p>
        </Section>

        <Section title="11. Contato">
          <p>
            <a
              href="mailto:contato@linguu.com.br"
              style={{ color: "var(--primary)", fontWeight: 700 }}
            >
              contato@linguu.com.br
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2
        className="text-xl sm:text-2xl mb-3"
        style={{ color: "var(--text)", fontWeight: 800 }}
      >
        {title}
      </h2>
      <div style={{ color: "var(--text)" }}>{children}</div>
    </section>
  );
}
