const skills = [
  {
    title: "Software Engineering",
    items: "Python · FastAPI · Node.js · Laravel · React · TypeScript · REST APIs · Microsserviços",
  },
  {
    title: "Performance & Scalability",
    items: "SQL tuning · Indexação · Redis · Cache · Filas · Load testing · Profiling · p50/p95/p99",
  },
  {
    title: "Observability & Infra",
    items: "Grafana · OpenTelemetry · Alloy · Tempo · Loki · Mimir · Docker · Linux · Nginx · CI/CD",
  },
  {
    title: "Applied AI Engineering",
    items: "AI Agents · MCP · Skills · Context Engineering · LLM Integration · Evals · Automação de engenharia",
  },
  {
    title: "Data",
    items: "SQL Server · MySQL · Redis · Data migration · Query optimization · Arquitetura de dados",
  },
];

const metrics = [
  { value: "−81%", label: "latência em requests críticas", note: "em trabalhos de otimização" },
  { value: "12K+", label: "queries observadas", note: "em análise de produção" },
  { value: "62K+", label: "spans/dia", note: "baseline analisado" },
  { value: "6+", label: "anos", note: "engenharia de software" },
];

const caseStudies = [
  {
    eyebrow: "CASE 01 · OBSERVABILITY + AI",
    title: "Agente de IA conectado ao Grafana para diagnóstico de produção",
    text: "Estruturei um fluxo de análise em que um agente consulta dados do Grafana/Tempo via TraceQL, faz drill-down de traces, compara percentis, identifica hotspots e gera um relatório técnico priorizado para ação humana.",
    bullets: [
      "Baseline de produção com mais de 62 mil spans em um dia de referência.",
      "Análise de aproximadamente 12 mil spans de banco em uma janela de produção.",
      "Diagnóstico de request de 9,6 s com 125 queries — 91% do tempo estava fora do SQL.",
      "Identificação de endpoint onde uma única query de 4,86 s representava 97% do tempo total.",
      "Detecção de bugs de front, erros 500 recorrentes, N+1, queries lentas, trabalho síncrono e gaps de instrumentação.",
    ],
    stack: "Grafana · Tempo · TraceQL · OpenTelemetry · Laravel · SQL Server · MySQL · Claude Code",
  },
  {
    eyebrow: "CASE 02 · APPLIED AI ENGINEERING",
    title: "Plataforma de programador virtual supervisionado",
    text: "Arquitetura de software delivery assistida por múltiplos agentes, com isolamento por tarefa, revisão independente, aprovação humana obrigatória e validação pós-deploy baseada em observabilidade.",
    bullets: [
      "claude_relatorio investiga Grafana e transforma sinais técnicos em evidências reproduzíveis.",
      "chatgpt_gerente_tasks cria e prioriza tasks, controla estados, tentativas, custos e aprovações.",
      "claude_corretor reproduz o problema, implementa, testa e trabalha em branch/worktree isolada.",
      "claude_code_review avalia diff, impacto, segurança, performance e qualidade dos testes de forma independente.",
      "claude_regresso compara produção com baseline pós-deploy; regressão volta para decisão humana: rollback, nova tentativa de IA ou correção manual.",
      "Loop limitado a 7 tentativas, sem acesso direto de agentes à main ou produção.",
    ],
    stack: "AI Agents · MCP · Git Worktrees · GitHub Actions · Grafana · OpenTelemetry · Docker · Kubernetes · Temporal",
  },
  {
    eyebrow: "CASE 03 · PERFORMANCE ENGINEERING",
    title: "Modernização e otimização de sistemas complexos",
    text: "Atuação em sistemas legados e distribuídos com gargalos de banco, CPU, memória, polling excessivo e endpoints críticos — usando medição antes de otimização e validação técnica após as mudanças.",
    bullets: [
      "Otimização de queries e índices com foco em planos de execução e cauda de latência.",
      "Separação progressiva de responsabilidades entre Laravel, FastAPI e Node.js.",
      "Uso de Redis, cache, filas e processamento assíncrono para retirar trabalho do request síncrono.",
      "Instrumentação com traces, métricas e logs para correlacionar sintomas de aplicação e infraestrutura.",
      "Migrações e modernização sem exigir reescrita total do produto.",
    ],
    stack: "Python · FastAPI · Node.js · Laravel · React · Redis · SQL Server · MySQL · Grafana",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar shell">
        <a className="brand" href="#top" aria-label="Início">
          RM<span>.</span>
        </a>
        <nav>
          <a href="#impacto">Impacto</a>
          <a href="#cases">Cases</a>
          <a href="#experiencia">Experiência</a>
          <a href="#stack">Stack</a>
        </nav>
        <a className="smallButton" href="mailto:renan.marx144@gmail.com">Contato</a>
      </header>

      <section className="hero shell" id="top">
        <div className="status"><span /> Disponível para desafios de engenharia</div>
        <p className="kicker">SENIOR SOFTWARE ENGINEER</p>
        <h1>
          Sistemas complexos.<br />
          <em>Performance mensurável.</em>
        </h1>
        <p className="heroText">
          Engenharia de software com foco em <strong>performance, escalabilidade, observabilidade e IA aplicada</strong>.
          Atuo diagnosticando gargalos reais de produção, modernizando legados e transformando dados técnicos em decisões de engenharia.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="#cases">Ver estudos de caso</a>
          <a className="secondaryButton" href="https://github.com/RenanMarx144" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="secondaryButton" href="https://www.linkedin.com/in/renanmarques-2202" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <section className="metrics shell" id="impacto">
        {metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
      </section>

      <section className="section shell" id="cases">
        <div className="sectionIntro">
          <p className="kicker">SELECTED ENGINEERING WORK</p>
          <h2>Cases que mostram como eu penso e resolvo problemas.</h2>
          <p>
            Em vez de listar apenas tecnologias, estes casos mostram investigação, arquitetura, decisões e impacto. Informações profissionais sensíveis foram anonimizadas.
          </p>
        </div>

        <div className="cases">
          {caseStudies.map((item, index) => (
            <article className="case" key={item.title}>
              <div className="caseIndex">0{index + 1}</div>
              <div className="caseBody">
                <p className="caseEyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className="caseText">{item.text}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="stackLine">{item.stack}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="experiencia">
        <div className="sectionIntro compact">
          <p className="kicker">EXPERIÊNCIA EM DESTAQUE</p>
          <h2>Madnezz · Senior Full-Stack / Software Engineer</h2>
          <p>Ago 2025 — Presente</p>
        </div>

        <div className="experienceGrid">
          <article>
            <span>01</span>
            <h3>Performance</h3>
            <p>Diagnóstico e remoção de gargalos em requests, SQL, CPU e memória, com observabilidade, tuning, cache e arquitetura.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Modernização</h3>
            <p>Evolução gradual de sistemas legados para serviços em Python/FastAPI e Node.js, mantendo integração com Laravel e React.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Observabilidade</h3>
            <p>Instrumentação e análise com OpenTelemetry e Grafana para traces, métricas, logs, percentis e investigação de incidentes.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Applied AI</h3>
            <p>Uso de agentes, MCP, skills e contexto estruturado para investigação técnica, documentação, revisão e automação de engenharia.</p>
          </article>
        </div>
      </section>

      <section className="section shell" id="stack">
        <div className="sectionIntro compact">
          <p className="kicker">CORE EXPERTISE</p>
          <h2>Ferramentas escolhidas pelo problema, não pelo hype.</h2>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <article key={skill.title}>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta shell">
        <p className="kicker">LET&apos;S BUILD BETTER SYSTEMS</p>
        <h2>Performance, confiabilidade e IA aplicada com engenharia mensurável.</h2>
        <div className="heroActions">
          <a className="primaryButton" href="mailto:renan.marx144@gmail.com">renan.marx144@gmail.com</a>
          <a className="secondaryButton" href="https://github.com/RenanMarx144" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Renan Marques Fontana</span>
        <span>São Paulo, Brasil</span>
      </footer>
    </main>
  );
}
