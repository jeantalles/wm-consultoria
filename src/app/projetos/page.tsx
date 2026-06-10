"use client";

import { useState, useEffect, useCallback } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const L = "/img/projetos";

const todosOsProjetos = [
  {
    title: "Tonino Lamborghini Residences – SC",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/tonino-lamborghini-1.jpg`,
      `${L}/tonino-lamborghini-2.jpg`,
      `${L}/tonino-lamborghini-3.jpg`,
    ],
  },
  {
    title: "Solaia Exclusive Residences – PR",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/solaia-1.jpg`,
    ],
  },
  {
    title: "Serendipity Village – SC",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/serendipity-1.jpg`,
      `${L}/serendipity-2.jpg`,
      `${L}/serendipity-3.jpg`,
    ],
  },
  {
    title: "New York Apartments – SC",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/new-york-1.jpg`,
      `${L}/new-york-2.jpg`,
      `${L}/new-york-3.jpg`,
      `${L}/new-york-4.jpg`,
      `${L}/new-york-5.jpg`,
    ],
  },
  {
    title: "L'Atelier Concept Homes – SC",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/latelier-1.jpg`,
      `${L}/latelier-2.jpg`,
      `${L}/latelier-3.jpg`,
    ],
  },
  {
    title: "Aurora Exclusive Home – SC",
    meta: "Embraed Empreendimentos",
    images: [
      `${L}/aurora-1.jpg`,
      `${L}/aurora-4.jpg`,
    ],
  },
  {
    title: "Pininfarina (PM031) – PR",
    meta: "Plaenge Empreendimentos",
    images: [
      `${L}/plaenge-pm031-1.jpg`,
      `${L}/plaenge-pm031-2.jpg`,
      `${L}/plaenge-pm031-3.jpg`,
    ],
  },
  {
    title: "Pininfarina (PG104) – PR",
    meta: "Plaenge Empreendimentos",
    images: [
      `${L}/plaenge-pg104-1.jpg`,
      `${L}/plaenge-pg104-2.jpg`,
    ],
  },
  {
    title: "Artesano",
    meta: "Plaenge Empreendimentos",
    images: [
      `${L}/artesano-1.jpg`,
      `${L}/artesano-2.jpg`,
    ],
  },
  {
    title: "Authentique – MT",
    meta: "Plaenge Empreendimentos",
    images: [`${L}/authentique-1.jpg`],
  },
  {
    title: "Piazza By Quadra",
    meta: "Quadra Engenharia",
    images: [
      `${L}/piazza-1.jpg`,
      `${L}/piazza-2.jpg`,
    ],
  },
  {
    title: "Lux Design Torres Living/Concept",
    meta: "Quadra Engenharia",
    images: [
      `${L}/lux-design-1.jpg`,
      `${L}/lux-design-2.jpg`,
    ],
  },
  {
    title: "Edifício Art",
    meta: "Quadra Engenharia",
    images: [
      `${L}/edificio-art-1.jpg`,
      `${L}/edificio-art-2.jpg`,
    ],
  },
  {
    title: "Edifício Life Spa e Gym – PA",
    meta: "Quadra Engenharia",
    images: [
      `${L}/life-spa-1.jpg`,
      `${L}/life-spa-2.jpg`,
    ],
  },
  {
    title: "Edifício IL Palagio – PA",
    meta: "Quadra Engenharia",
    images: [
      `${L}/il-palagio-1.jpeg`,
      `${L}/il-palagio-2.jpeg`,
    ],
  },
  {
    title: "Phisys Place – SC",
    meta: "CBA",
    images: [
      `${L}/cba-phisis-place-1.jpg`,
      `${L}/cba-phisis-place-2.jpg`,
    ],
  },
  {
    title: "Puerto Madero – SC",
    meta: "CBA",
    images: [
      `${L}/cba-puerto-madero-1.png`,
      `${L}/cba-puerto-madero-2.png`,
    ],
  },
  {
    title: "One Petrópolis – RN",
    meta: "Macam",
    images: [
      `${L}/macam-one-petropolis-1.jpg`,
    ],
  },
  {
    title: "Jano – SP",
    meta: "RFM",
    images: [
      `${L}/rfm-jano-1.png`,
      `${L}/rfm-jano-2.png`,
    ],
  },
  {
    title: "Vértice – SC",
    meta: "Vokkan",
    images: [
      `${L}/vokkan-vertice-1.jpg`,
      `${L}/vokkan-vertice-2.jpg`,
    ],
  },
  {
    title: "Voz – SC",
    meta: "Vokkan",
    images: [
      `${L}/vokkan-voz-1.jpg`,
      `${L}/vokkan-voz-2.jpg`,
    ],
  },
  {
    title: "Bueno Brandão",
    meta: "Tegra Incorporadora",
    images: [
      `${L}/bueno-brandao-1.jpg`,
      `${L}/bueno-brandao-2.jpg`,
    ],
  },
  {
    title: "Zahle Jardins – SP",
    meta: "Tegra Incorporadora",
    images: [
      `${L}/zahle-1.jpg`,
      `${L}/zahle-2.jpg`,
      `${L}/zahle-3.jpg`,
      `${L}/zahle-4.jpg`,
    ],
  },
  {
    title: "Soma Perdizes – SP",
    meta: "Tegra Incorporadora",
    images: [
      `${L}/soma-perdizes-1.jpg`,
      `${L}/soma-perdizes-2.jpg`,
    ],
  },
  {
    title: "Ode Perdizes – SP",
    meta: "Tegra Incorporadora",
    images: [
      `${L}/ode-perdizes-1.jpg`,
      `${L}/ode-perdizes-2.jpg`,
      `${L}/ode-perdizes-3.jpg`,
    ],
  },
  {
    title: "Bela Vista",
    meta: "Vitacon",
    images: [
      `${L}/bela-vista-1.jpg`,
      `${L}/bela-vista-2.jpg`,
    ],
  },
  {
    title: "Boa Vista",
    meta: "Vitacon",
    images: [
      `${L}/boa-vista-1.jpg`,
      `${L}/boa-vista-2.jpg`,
    ],
  },
  {
    title: "On Pixel Life",
    meta: "Vitacon",
    images: [
      `${L}/on-pixel-1.png`,
      `${L}/on-pixel-2.png`,
    ],
  },
  {
    title: "Brigadeiro",
    meta: "Vitacon",
    images: [
      `${L}/brigadeiro-1.jpg`,
      `${L}/brigadeiro-2.jpg`,
    ],
  },
  {
    title: "Vista Jardins",
    meta: "Torresani e Vokkan",
    images: [`${L}/vista-jardins-1.jpg`],
  },
  {
    title: "Trend 24",
    meta: "Construtora Maiojama",
    images: [`${L}/trend-24-1.jpg`],
  },
  {
    title: "Pinheiros By Passarelli",
    meta: "Construtora Passarelli",
    images: [
      `${L}/pinheiros-1.jpg`,
      `${L}/pinheiros-2.jpg`,
    ],
  },
  {
    title: "Reserva Golf Shopping",
    meta: "Ekko Group",
    images: [`${L}/reserva-golf-1.jpg`],
  },
  {
    title: "Ekko Live Alpha Senses2",
    meta: "Ekko Group",
    images: [
      `${L}/ekko-alpha-1.jpg`,
      `${L}/ekko-alpha-2.jpg`,
    ],
  },
  {
    title: "D/Sense",
    meta: "Dimas Construções",
    images: [
      `${L}/dsense-1.jpeg`,
      `${L}/dsense-2.jpeg`,
    ],
  },
  {
    title: "Brava Ocean",
    meta: "CN Empreendimentos",
    images: [
      `${L}/brava-ocean-1.jpg`,
      `${L}/brava-ocean-2.jpg`,
      `${L}/brava-ocean-3.jpg`,
    ],
  },
  {
    title: "Lumi",
    meta: "Lumi",
    images: [
      `${L}/lumi-1.jpg`,
      `${L}/lumi-2.jpg`,
    ],
  },
  {
    title: "Deck 330 – SP",
    meta: "Tarraf",
    images: [
      `${L}/deck-330-1.jpg`,
      `${L}/deck-330-2.jpg`,
    ],
  },
  {
    title: "Nature Residence – DF",
    meta: "Elmo Engenharia",
    images: [`${L}/nature-1.jpg`],
  },
  {
    title: "Acqua Design – TO",
    meta: "Elmo Engenharia",
    images: [
      `${L}/acqua-1.jpg`,
      `${L}/acqua-2.jpg`,
    ],
  },
  {
    title: "You 180 – PR",
    meta: "Vanguard Empreendimentos",
    images: [
      `${L}/you-180-1.jpg`,
      `${L}/you-180-2.jpg`,
    ],
  },
  {
    title: "Mirador Residence – RS",
    meta: "Winter Construções",
    images: [
      `${L}/mirador-1.jpg`,
      `${L}/mirador-2.jpg`,
      `${L}/mirador-3.jpg`,
    ],
  },
  {
    title: "Murano Residence – RS",
    meta: "Winter Construções",
    images: [`${L}/murano-1.jpg`],
  },
  {
    title: "Vesta – RS",
    meta: "VCA Maggi Construtora e Incorporadora",
    images: [
      `${L}/vca-maggi-vesta-1.jpg`,
      `${L}/vca-maggi-vesta-2.jpg`,
    ],
  },
  {
    title: "Reserva Sangiovese – RS",
    meta: "UNA Construtora",
    images: [
      `${L}/reserva-sangiovese-1.jpg`,
      `${L}/reserva-sangiovese-2.jpg`,
    ],
  },
  {
    title: "UNA Business Center – RS",
    meta: "UNA Construtora",
    images: [
      `${L}/una-business-1.jpg`,
      `${L}/una-business-2.jpg`,
    ],
  },
  {
    title: "Edifício Domo – SC",
    meta: "Talita Construtora e Incorporadora",
    images: [
      `${L}/domo-1.jpeg`,
      `${L}/domo-2.jpeg`,
      `${L}/domo-3.jpeg`,
      `${L}/domo-4.jpeg`,
    ],
  },
  {
    title: "Sunstar Tower – SC",
    meta: "Sunprime Empreendimentos",
    images: [
      `${L}/sunstar-1.jpg`,
      `${L}/sunstar-2.jpg`,
      `${L}/sunstar-3.jpg`,
      `${L}/sunstar-4.jpg`,
    ],
  },
  {
    title: "135 Jardins – SC",
    meta: "Silva Packer",
    images: [
      `${L}/jardins-135-1.jpg`,
      `${L}/jardins-135-2.jpg`,
      `${L}/jardins-135-3.jpg`,
    ],
  },
  {
    title: "Raiz By Paulo Mauro – SP",
    meta: "Paulo Mauro Construtora",
    images: [
      `${L}/raiz-1.jpg`,
      `${L}/raiz-2.jpg`,
    ],
  },
  {
    title: "MOV Perdizes – SP",
    meta: "Paulo Mauro Construtora",
    images: [
      `${L}/mov-perdizes-1.jpg`,
      `${L}/mov-perdizes-2.jpg`,
    ],
  },
  {
    title: "Manhattan Flats – SC",
    meta: "N1 Construtora e Incorporadora",
    images: [
      `${L}/manhattan-1.jpg`,
      `${L}/manhattan-2.jpg`,
    ],
  },
  {
    title: "Torres da Brava (Brisa) – SC",
    meta: "Lotisa Empreendimentos",
    images: [
      `${L}/torres-brisa-1.jpg`,
      `${L}/torres-brisa-2.jpg`,
    ],
  },
  {
    title: "Vista Mare Residencial – SC",
    meta: "Lotisa Empreendimentos",
    images: [
      `${L}/vista-mare-1.jpg`,
      `${L}/vista-mare-2.jpg`,
    ],
  },
  {
    title: "Serenity Residence – SC",
    meta: "Lotisa Empreendimentos",
    images: [
      `${L}/serenity-1.jpg`,
      `${L}/serenity-2.jpg`,
    ],
  },
  {
    title: "Lotisa Garden Plaza – SC",
    meta: "Lotisa Empreendimentos",
    images: [`${L}/garden-plaza-1.png`],
  },
  {
    title: "Germano Petersen, 70 – RS",
    meta: "Kopstein Incorporadora",
    images: [
      `${L}/germano-70-1.jpeg`,
      `${L}/germano-70-2.jpeg`,
    ],
  },
  {
    title: "Praça Nilo – RS",
    meta: "Wolens Incorporadora",
    images: [
      `${L}/praca-nilo-1.jpg`,
      `${L}/praca-nilo-2.jpg`,
      `${L}/praca-nilo-3.jpg`,
    ],
  },
  {
    title: "Vértice – RS",
    meta: "Wolens Incorporadora",
    images: [
      `${L}/vertice-1.jpg`,
      `${L}/vertice-2.jpg`,
      `${L}/vertice-3.jpg`,
    ],
  },
  {
    title: "Flagship – RS",
    meta: "RottaEly Construções",
    images: [
      `${L}/flagship-1.jpg`,
      `${L}/flagship-2.jpg`,
    ],
  },
  {
    title: "Cobalto – RS",
    meta: "RottaEly Construções",
    images: [
      `${L}/cobalto-1.jpg`,
      `${L}/cobalto-2.jpg`,
    ],
  },
  {
    title: "Edifício Travéza – PR",
    meta: "Construtora Just",
    images: [`${L}/traveza-1.jpeg`],
  },
  {
    title: "Cipriano Residence – PR",
    meta: "Construtora Just",
    images: [
      `${L}/cipriano-1.jpg`,
      `${L}/cipriano-2.jpg`,
      `${L}/cipriano-3.jpg`,
    ],
  },
  {
    title: "Edifício Ópera – SC",
    meta: "Investcorp Empreendimentos",
    images: [
      `${L}/opera-1.jpg`,
      `${L}/opera-2.jpg`,
      `${L}/opera-3.jpg`,
    ],
  },
  {
    title: "Ocean View – SC",
    meta: "Investcorp Empreendimentos",
    images: [`${L}/ocean-view-1.jpg`],
  },
  {
    title: "Morada de Gaia – SC",
    meta: "Investcorp Empreendimentos",
    images: [
      `${L}/morada-gaia-1.jpg`,
      `${L}/morada-gaia-2.jpg`,
      `${L}/morada-gaia-3.jpg`,
    ],
  },
  {
    title: "Amaluna – SC",
    meta: "Investcorp Empreendimentos",
    images: [
      `${L}/amaluna-1.jpg`,
      `${L}/amaluna-2.jpg`,
    ],
  },
  {
    title: "Haus 34 – RJ",
    meta: "INTI Empreendimentos",
    images: [
      `${L}/haus-34-1.jpeg`,
      `${L}/haus-34-2.jpeg`,
    ],
  },
  {
    title: "GRID Residencial – RJ",
    meta: "INTI Empreendimentos",
    images: [
      `${L}/grid-1.jpg`,
      `${L}/grid-2.jpg`,
    ],
  },
  {
    title: "Hausen – RS",
    meta: "Incoben Incorporadora e Construtora",
    images: [
      `${L}/hausen-1.jpg`,
      `${L}/hausen-2.jpg`,
    ],
  },
  {
    title: "Park House Condomínio Club – RS",
    meta: "Incoben Incorporadora e Construtora",
    images: [
      `${L}/park-house-1.jpg`,
      `${L}/park-house-2.jpg`,
    ],
  },
  {
    title: "La Casa Residência – RS",
    meta: "Incoben Incorporadora e Construtora",
    images: [
      `${L}/la-casa-1.jpg`,
      `${L}/la-casa-2.jpg`,
    ],
  },
  {
    title: "Alameda América – SC",
    meta: "H. Marcato Empreendimentos",
    images: [
      `${L}/alameda-america-1.jpg`,
      `${L}/alameda-america-2.jpg`,
    ],
  },
  {
    title: "Ocean View Condomínio Club – SP",
    meta: "Econ Construtora",
    images: [`${L}/ocean-view-sp-1.jpeg`],
  },
  {
    title: "D/Mys Home Design – SC",
    meta: "Dimas Construções",
    images: [
      `${L}/dmys-1.jpg`,
      `${L}/dmys-2.jpg`,
      `${L}/dmys-3.jpg`,
      `${L}/dmys-4.jpg`,
    ],
  },
  {
    title: "D/Yard Home Design – SC",
    meta: "Dimas Construções",
    images: [
      `${L}/dyard-1.jpg`,
      `${L}/dyard-2.jpg`,
      `${L}/dyard-3.jpg`,
    ],
  },
  {
    title: "D/Spot – SC",
    meta: "Dimas Construções",
    images: [
      `${L}/dspot-1.jpg`,
      `${L}/dspot-2.jpg`,
      `${L}/dspot-3.jpg`,
    ],
  },
  {
    title: "Mudrá Full Living – RJ",
    meta: "Cyrela Empreendimentos",
    images: [
      `${L}/mudra-1.jpg`,
      `${L}/mudra-2.jpg`,
      `${L}/mudra-3.jpg`,
    ],
  },
  {
    title: "Atmosfera Condominium Park – RJ",
    meta: "Cyrela Empreendimentos",
    images: [
      `${L}/atmosfera-1.jpg`,
      `${L}/atmosfera-2.jpg`,
    ],
  },
  {
    title: "Voga Bela Vista – RS",
    meta: "CFL Incorporadora",
    images: [
      `${L}/voga-1.jpg`,
      `${L}/voga-2.jpg`,
      `${L}/voga-3.jpg`,
    ],
  },
];

const EXCLUDED_CLIENTS = [
  "RottaEly Construções",
  "Wolens Incorporadora",
  "Kopstein Incorporadora",
  "UNA Construtora",
  "Winter Construções",
  "Ekko Group",
  "Lumi",
  "Incoben Incorporadora e Construtora",
  "Econ Construtora"
];

const projetos = todosOsProjetos.filter(
  (p) => !EXCLUDED_CLIENTS.includes(p.meta)
);

function ProjetoCard({
  projeto,
  onOpen,
}: {
  projeto: (typeof projetos)[0];
  onOpen: (imgIndex: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const total = projeto.images.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % total);
  };

  return (
    <div
      className="projeto-card"
      onClick={() => onOpen(current)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="projeto-img-wrap">
        <img
          src={projeto.images[current]}
          alt={projeto.title}
          className="projeto-img"
        />

        {/* Overlay escuro sutil no hover */}
        <div className={`projeto-overlay ${hovered ? "visible" : ""}`} />

        {/* Ícone de expandir */}
        {hovered && (
          <div className="projeto-expand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
        )}

        {/* Setas do carrossel — só aparecem se tiver mais de 1 imagem */}
        {total > 1 && hovered && (
          <>
            <button className="projeto-arrow projeto-arrow-left" onClick={prev} aria-label="Anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="projeto-arrow projeto-arrow-right" onClick={next} aria-label="Próxima">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {total > 1 && (
          <div className="projeto-dots">
            {projeto.images.map((_, i) => (
              <span key={i} className={`projeto-dot ${i === current ? "active" : ""}`} />
            ))}
          </div>
        )}
      </div>
      <div className="projeto-info">
        <h4>{projeto.title}</h4>
        <div className="projeto-meta">{projeto.meta}</div>
      </div>
    </div>
  );
}

function Lightbox({
  projetoIndex,
  imgIndex: startImg,
  onClose,
}: {
  projetoIndex: number;
  imgIndex: number;
  onClose: () => void;
}) {
  const projeto = projetos[projetoIndex];
  const total = projeto.images.length;
  const [current, setCurrent] = useState(startImg);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>

        {/* Fechar */}
        <button className="lightbox-close" onClick={onClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Imagem com setas sobrepostas */}
        <div className="lightbox-img-wrap">
          <img src={projeto.images[current]} alt={projeto.title} className="lightbox-img" />

          {total > 1 && (
            <>
              <button className="lightbox-arrow lightbox-arrow-left" onClick={prev} aria-label="Anterior">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="lightbox-arrow lightbox-arrow-right" onClick={next} aria-label="Próxima">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Info */}
        <div className="lightbox-footer">
          <div>
            <div className="lightbox-title">{projeto.title}</div>
            <div className="lightbox-meta">{projeto.meta}</div>
          </div>
          {total > 1 && (
            <div className="lightbox-counter">{current + 1} / {total}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjetosPage() {
  const [lightbox, setLightbox] = useState<{ projetoIndex: number; imgIndex: number } | null>(null);

  // Group projects by client (meta)
  const clientGroups = projetos.reduce((groups, p, originalIndex) => {
    const client = p.meta;
    if (!groups[client]) {
      groups[client] = {
        name: client,
        projects: [],
      };
    }
    groups[client].projects.push({ ...p, originalIndex });
    return groups;
  }, {} as Record<string, { name: string; projects: Array<typeof projetos[0] & { originalIndex: number }> }>);

  const orderedGroups = Object.values(clientGroups);

  return (
    <>
      <Nav />
      <main>
        <div className="projetos-page-hero">
          <div className="projetos-page-hero-inner">
            <a href="/#projetos" className="projetos-page-back">← Voltar</a>
            <br />
            <span className="section-label" style={{ marginTop: "1.5rem", display: "inline-block" }}>Portfólio</span>
            <h1 className="projetos-page-title">
              Projetos desenvolvidos com as principais construtoras do Brasil.
            </h1>
            <p className="projetos-page-sub">
              Esquadrias de alumínio, fachadas e revestimentos especificados com rigor técnico
              para empreendimentos de alto padrão em todo o país.
            </p>
          </div>
        </div>

        <section className="projetos-page-grid-section">
          <div className="projetos-page-container">
            {orderedGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="client-group">
                <div className="client-group-header">
                  <h3 className="client-group-title">{group.name}</h3>
                </div>
                <div className="projetos-page-grid">
                  {group.projects.map((p) => (
                    <ProjetoCard
                      key={p.originalIndex}
                      projeto={p}
                      onOpen={(imgIndex) => setLightbox({ projetoIndex: p.originalIndex, imgIndex })}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      {lightbox !== null && (
        <Lightbox
          projetoIndex={lightbox.projetoIndex}
          imgIndex={lightbox.imgIndex}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
