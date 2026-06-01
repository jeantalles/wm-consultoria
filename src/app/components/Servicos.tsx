"use client";

import { useState } from "react";

const servicos = [
  {
    num: "01",
    title: "Análise de Projetos",
    desc: "Compatibilidade técnica entre projeto arquitetônico, estrutural e de esquadrias. Relatório de otimização com foco em desempenho e custo-benefício.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Caderno de Detalhes Técnicos",
    desc: "Detalhamento 2D de esquadrias com especificação de perfis, acessórios, vidros, ferragens e acabamentos, em conformidade com as normas ABNT vigentes.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Caderno de Encargos",
    desc: "Guia técnico completo com especificações, critérios e procedimentos padronizados para o perfeito funcionamento do sistema.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Especificação de Vidro",
    desc: "Recomendação das soluções em vidro mais adequadas ao projeto, com atendimento às normas regulatórias ABNT.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <line x1="12" y1="3" x2="12" y2="21" /><line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Equalização Comercial",
    desc: "Suporte na análise e comparação de propostas comerciais, garantindo processos de concorrência equilibrados e tecnicamente embasados.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Validação do Projeto",
    desc: "Revisão do projeto executivo elaborado pelo fabricante ou fornecedor de esquadrias, assegurando conformidade técnica.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5-4 9-8 10-4-1-8-5-8-10V6z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Vistoria Presencial",
    desc: "Verificação in loco da conformidade do projeto, da fabricação e da instalação com os requisitos normativos.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    full: true,
  },
];

export default function Servicos() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Serviços</span>
          <h2 className="section-title">Soluções técnicas em todas as fases do projeto.</h2>
          <p className="section-sub">
            Da análise inicial à validação final, garantimos precisão técnica e
            conformidade normativa em cada entrega.
          </p>
        </div>
        <div className="servicos-grid">
          {servicos.map((s, i) => (
            <div
              key={i}
              className={`servico-card${s.full ? " servico-full" : ""}${open === i ? " open" : ""}`}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="servico-icon">{s.icon}</div>
              <div className="servico-body">
                <div className="servico-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
