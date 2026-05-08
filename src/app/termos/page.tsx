import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso — Akrantis",
  description: "Termos de uso da plataforma Akrantis de rastreabilidade ambiental.",
};

export default function TermosPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-slate-400 text-sm hover:text-slate-600 transition-colors"
        >
          ← Voltar
        </Link>

        <h1
          className="text-slate-950 mt-8 mb-2"
          style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.025em" }}
        >
          Termos de Uso
        </h1>
        <p className="text-slate-400 text-sm mb-12">
          Última atualização: maio de 2026
        </p>

        <div className="prose-custom space-y-10" style={{ fontSize: "0.9375rem", lineHeight: 1.8, color: "#334155" }}>

          {/* 1. Objeto */}
          <section>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              1. Objeto
            </h2>
            <p>
              Estes Termos de Uso regulam o acesso e a utilização da plataforma Akrantis
              (&quot;Plataforma&quot;), desenvolvida e operada pela Akrantis Infraestrutura Ambiental
              Ltda, CNPJ 65.493.422/0001-91, com sede na Av. Santos Dumont, 2828, Aldeota,
              Fortaleza-CE (&quot;Akrantis&quot;).
            </p>
            <p className="mt-4">
              A Plataforma oferece infraestrutura de rastreabilidade ambiental para gestão de
              licenças ambientais, condicionantes, Manifestos de Transporte de Resíduos (MTR),
              Certificados de Destinação Final (CDF), parceiros logísticos e documentação de
              compliance exigida pela legislação ambiental brasileira, incluindo a Política
              Nacional de Resíduos Sólidos (Lei 12.305/2010) e regulamentações do SINIR.
            </p>
          </section>

          {/* 2. Uso da Plataforma */}
          <section>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              2. Uso da Plataforma
            </h2>
            <p>
              O acesso à Plataforma é destinado exclusivamente a pessoas jurídicas e seus
              representantes legais devidamente autorizados (&quot;Cliente&quot;). O Cliente é responsável
              por manter as credenciais de acesso em sigilo e por todas as ações realizadas
              em sua conta.
            </p>
            <p className="mt-4">
              É vedado ao Cliente: (i) utilizar a Plataforma para finalidades ilícitas ou
              contrárias à legislação ambiental vigente; (ii) tentar acessar áreas restritas
              ou sistemas de terceiros; (iii) reproduzir, redistribuir ou sublicenciar a
              Plataforma sem autorização expressa; (iv) inserir dados falsos ou fraudulentos
              em documentos de compliance.
            </p>
            <p className="mt-4">
              A Akrantis se reserva o direito de suspender ou encerrar o acesso de qualquer
              Cliente que viole estes Termos, sem prejuízo das medidas legais cabíveis.
            </p>
          </section>

          {/* 3. Dados e Privacidade */}
          <section>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              3. Dados e Privacidade (LGPD)
            </h2>
            <p>
              A Akrantis trata dados pessoais e dados de compliance em conformidade com a
              Lei Geral de Proteção de Dados (Lei 13.709/2018 — LGPD). O Cliente, ao
              utilizar a Plataforma, atua como controlador dos dados inseridos; a Akrantis
              atua como operadora, processando-os exclusivamente para a prestação dos
              serviços contratados.
            </p>
            <p className="mt-4">
              Os dados inseridos na Plataforma — incluindo informações de licenças, MTRs,
              CDFs, dados de parceiros e documentos de órgãos ambientais — são armazenados
              em infraestrutura segura, com controle de acesso, criptografia em trânsito
              (TLS) e em repouso, e backups periódicos.
            </p>
            <p className="mt-4">
              A Akrantis não compartilha dados do Cliente com terceiros, exceto quando
              exigido por lei, por ordem judicial ou por obrigação regulatória perante
              órgãos ambientais competentes (IBAMA, SISNAMA, SINIR).
            </p>
            <p className="mt-4">
              O titular dos dados pode exercer seus direitos previstos na LGPD — acesso,
              correção, portabilidade, eliminação — mediante solicitação ao e-mail de
              privacidade disponível no contrato de serviço.
            </p>
          </section>

          {/* 4. Responsabilidades */}
          <section>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              4. Responsabilidades
            </h2>
            <p>
              A Akrantis empreende todos os esforços razoáveis para manter a Plataforma
              disponível, íntegra e segura, mas não garante disponibilidade ininterrupta.
              Manutenções programadas serão comunicadas com antecedência.
            </p>
            <p className="mt-4">
              A responsabilidade da Akrantis está limitada, em qualquer hipótese, ao valor
              pago pelo Cliente nos últimos 12 meses. A Akrantis não se responsabiliza por
              decisões de compliance tomadas com base exclusiva nas informações da Plataforma,
              sendo a responsabilidade pelo cumprimento das obrigações legais sempre do Cliente.
            </p>
            <p className="mt-4">
              O Cliente é integralmente responsável pela veracidade e atualização dos dados
              inseridos, pela guarda das credenciais de acesso e pelo uso da Plataforma em
              conformidade com a legislação ambiental aplicável.
            </p>
          </section>

          {/* 5. Foro */}
          <section>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
              5. Foro e Legislação Aplicável
            </h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
              eleito o foro da Comarca de Fortaleza, Estado do Ceará, para dirimir quaisquer
              controvérsias decorrentes deste instrumento, com exclusão de qualquer outro,
              por mais privilegiado que seja.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-sm">
            © 2026 Akrantis Infraestrutura Ambiental Ltda · CNPJ 65.493.422/0001-91
          </p>
        </div>
      </div>
    </main>
  );
}
