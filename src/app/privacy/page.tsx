import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — Linguu",
  description:
    "Como o Linguu coleta, usa e compartilha dados — incluindo o uso de serviços de IA da OpenAI para transcrição e geração de respostas do tutor.",
};

const UPDATED_AT = "5 de maio de 2026";

export default function PrivacyPage() {
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
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
        Última atualização: {UPDATED_AT}
      </p>

      <div className="prose-styles mt-8 space-y-6 text-base leading-relaxed">
        <p>
          O Linguu é um aplicativo educacional de inglês para crianças
          brasileiras de 6 a 8 anos. Esta política descreve quais dados
          coletamos, como os usamos e com quem os compartilhamos. Levamos a
          privacidade infantil a sério — nada do que coletamos é usado para
          publicidade ou perfil comercial.
        </p>

        <Section title="1. Quem somos">
          <p>
            O serviço é oferecido pelo Linguu. Para questões sobre privacidade,
            contate{" "}
            <a
              href="mailto:contato@linguu.app"
              style={{ color: "var(--primary)", fontWeight: 700 }}
            >
              contato@linguu.app
            </a>
            .
          </p>
        </Section>

        <Section title="2. Dados que coletamos">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Conta do responsável:</strong> e-mail e senha
              (criptografada).
            </li>
            <li>
              <strong>Perfil da criança:</strong> primeiro nome e idade,
              fornecidos pelo responsável.
            </li>
            <li>
              <strong>Áudio durante missões:</strong> a fala da criança é
              gravada apenas enquanto o botão de microfone está pressionado. O
              áudio é enviado para transcrição e descartado em seguida — não
              armazenamos gravações.
            </li>
            <li>
              <strong>Texto transcrito e respostas:</strong> guardamos a
              transcrição da fala (texto), as respostas do tutor e métricas de
              progresso (precisão, palavras aprendidas) para acompanhar a
              evolução da criança.
            </li>
            <li>
              <strong>Status de assinatura:</strong> recebemos da App Store /
              Google Play (via RevenueCat) se a assinatura está ativa, mas
              nunca temos acesso a número de cartão.
            </li>
          </ul>
        </Section>

        <Section title="3. Compartilhamento com serviços de IA (OpenAI)">
          <p>
            Para que o tutor entenda a criança e responda em português com
            inglês contextual, enviamos os seguintes dados à{" "}
            <strong>OpenAI, Inc. (Estados Unidos)</strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Áudio bruto da fala</strong> da criança → enviado ao
              modelo Whisper para transcrição em texto.
            </li>
            <li>
              <strong>Texto transcrito</strong> + contexto da conversa atual →
              enviado a modelos GPT para gerar a próxima fala do tutor.
            </li>
            <li>
              <strong>Texto da fala do tutor</strong> → enviado ao modelo de
              síntese de voz (TTS) para gerar o áudio do mascote.
            </li>
          </ul>
          <p className="mt-3">
            A OpenAI processa esses dados conforme a{" "}
            <a
              href="https://openai.com/policies/api-data-usage-policies"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)", fontWeight: 700 }}
              className="hover:underline"
            >
              política de uso de dados da API da OpenAI
            </a>
            : os dados <strong>não são usados para treinar modelos</strong> e
            são retidos por no máximo 30 dias para detecção de abuso, sendo
            depois excluídos. O Linguu não envia o nome real da criança nem o
            e-mail do responsável à OpenAI.
          </p>
          <p className="mt-3">
            O usuário (responsável) precisa{" "}
            <strong>aceitar explicitamente</strong> esse compartilhamento na
            primeira vez que abre o app. Sem esse consentimento, o app não
            envia áudio para a OpenAI e o tutor não funciona.
          </p>
        </Section>

        <Section title="4. Outros processadores de dados">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Supabase Inc.</strong> — hospedagem do banco de dados e
              autenticação. Dados são armazenados em servidores criptografados.
            </li>
            <li>
              <strong>RevenueCat, Inc.</strong> — controle do status da
              assinatura. Apenas o identificador interno do usuário é
              compartilhado.
            </li>
            <li>
              <strong>Apple App Store / Google Play</strong> — processamento
              do pagamento e renovação da assinatura. Não temos acesso a dados
              financeiros.
            </li>
          </ul>
          <p className="mt-3">
            Todos esses processadores estão sujeitos a contratos que exigem
            nível de proteção equivalente ao desta política.
          </p>
        </Section>

        <Section title="5. Como usamos os dados">
          <ul className="list-disc pl-6 space-y-2">
            <li>Para fornecer e personalizar as missões de aprendizado.</li>
            <li>Para acompanhar o progresso e gerar relatórios para o responsável.</li>
            <li>Para garantir o funcionamento da assinatura e do trial.</li>
            <li>Para detectar erros, falhas e abuso do serviço.</li>
          </ul>
          <p className="mt-3">
            <strong>Não usamos</strong> dados da criança para publicidade,
            marketing direcionado ou venda a terceiros.
          </p>
        </Section>

        <Section title="6. Direitos do responsável">
          <p>O responsável pode, a qualquer momento, dentro do app:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Excluir a conta</strong> — apaga permanentemente todos os
              dados do responsável, da criança, do progresso e das transcrições.
              A exclusão é irreversível e ocorre em até 30 dias.
            </li>
            <li>Restaurar compras anteriores via App Store / Google Play.</li>
            <li>Sair da conta a qualquer momento.</li>
          </ul>
          <p className="mt-3">
            Para solicitações adicionais (acesso, retificação, portabilidade,
            limitação de tratamento) previstas pela LGPD, escreva para{" "}
            <a
              href="mailto:contato@linguu.app"
              style={{ color: "var(--primary)", fontWeight: 700 }}
            >
              contato@linguu.app
            </a>
            .
          </p>
        </Section>

        <Section title="7. Crianças e LGPD">
          <p>
            O Linguu coleta dados sobre crianças apenas com o consentimento
            verificável do responsável legal, no momento do cadastro. O nome e
            idade da criança são fornecidos pelo responsável e usados
            exclusivamente para personalizar a experiência do app.
          </p>
        </Section>

        <Section title="8. Retenção e exclusão">
          <p>
            Dados são retidos enquanto a conta estiver ativa. Áudio bruto não
            é armazenado por nós (apenas processado em tempo real). Ao excluir
            a conta no app, todos os dados em nossos sistemas são apagados em
            até 30 dias.
          </p>
        </Section>

        <Section title="9. Mudanças nesta política">
          <p>
            Atualizações materiais nesta política serão comunicadas no app
            antes de entrarem em vigor.
          </p>
        </Section>

        <Section title="10. Contato">
          <p>
            <a
              href="mailto:contato@linguu.app"
              style={{ color: "var(--primary)", fontWeight: 700 }}
            >
              contato@linguu.app
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
