"use client";

import { useEffect, useRef } from "react";

const depoimentos = [
  {
    text: "A WM, empresa liderada pela arquiteta Miriam Pereira, tem sido uma parceira importante no desenvolvimento e análise de sistemas de esquadrias dos produtos da Embraed — empresa reconhecida nacional e internacionalmente pelo altíssimo padrão de seus empreendimentos. O comprometimento com prazos, a atenção aos detalhes e o elevado nível técnico apresentado pela equipe, aliados à disponibilidade e ao envolvimento durante todas as etapas dos projetos, da fabricação dos caixilhos à instalação, contribuem diretamente para o padrão de qualidade, eficiência e performance que buscamos.",
    author: "Emerson Pompeo",
    role: "Diretor de Engenharia da Embraed",
    photo: "/img/depoimentos/embraed.jpg",
    initials: "EP",
  },
  {
    text: "A WM Consultoria em Esquadrias é uma parceira de grande importância para a Perfil Alumínio, contribuindo com excelência técnica, comprometimento e profundo conhecimento no desenvolvimento de soluções em esquadrias de alumínio. Sob a liderança de Miriam Pereira, sua equipe tem sido fundamental na condução de projetos com qualidade, precisão e alinhamento às necessidades do mercado.\n\nAgradecemos pela parceria construída com confiança, profissionalismo e dedicação, que fortalece ainda mais a nossa atuação e gera resultados de alto valor para nossos clientes e parceiros.",
    author: "Alexandre Casasco",
    role: "Diretor-Presidente da Perfil Alumínio",
    photo: "/img/depoimentos/perfil-aluminio.jpg",
    initials: "AC",
  },
  {
    text: "A WM Consultoria é uma parceira estratégica do Grupo Plaenge na elaboração de projetos de esquadrias em alumínio. Sua equipe possui sólido domínio técnico e nos apoia desde a concepção do produto até o detalhamento executivo de todos os caixilhos, sempre alinhada aos prazos necessários.",
    author: "Mateus Terrin",
    role: "Coordenador de Projetos do Grupo Plaenge",
    photo: "/img/depoimentos/plaenge.jpg",
    initials: "MT",
  },
  {
    text: "A empresa WM Consultoria é uma grande parceira da Hydro ,com anos de experiencia no mercado, se destaca como uma das grandes empresas de consultoria de projetos de esquadrias e fachadas de aluminio. Com atuação em todo território nacional, a empresa trabalha integrada com arquitetos, engenheiros, construtoras sistemistas e fabricantes de esquadrias, para garantir soluções eficientes,seruras e compativeis com as normas tecnicas vigentes.",
    author: "Marcelo Santos",
    role: "Gerente Comercial Mercado Construcão Civil",
    photo: "/img/depoimentos/hydro.jpg",
    initials: "MS",
  },
];

function Avatar({ photo, initials, alt }: { photo: string; initials: string; alt: string }) {
  return (
    <img
      src={photo}
      alt={alt}
      className="depo-avatar"
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const fallback = target.nextElementSibling as HTMLElement;
        if (fallback) fallback.style.display = "flex";
      }}
    />
  );
}

export default function Depoimentos() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLDivElement>(".depo-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const delay = Number(card.dataset.delay ?? 0);
            setTimeout(() => card.classList.add("visible"), delay);
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="depoimentos" id="depoimentos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">O que dizem sobre o nosso trabalho.</h2>
        </div>
        <div className="depo-grid" ref={gridRef}>
          {depoimentos.map((d, i) => (
            <div key={i} className="depo-card" data-delay={i * 120}>
              <div className="depo-text">
                {d.text.split("\n\n").map((para, j, arr) => (
                  <p key={j}>
                    {j === 0 && <>&ldquo;</>}
                    {para}
                    {j === arr.length - 1 && <>&rdquo;</>}
                  </p>
                ))}
              </div>
              <div className="depo-author">
                <Avatar photo={d.photo} initials={d.initials} alt={d.author} />
                <div
                  className="depo-avatar-fallback"
                  style={{ display: "none" }}
                >
                  {d.initials}
                </div>
                <div className="depo-author-info">
                  <strong>{d.author}</strong>
                  <span>{d.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
