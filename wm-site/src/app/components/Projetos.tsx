const projetos = [
  {
    img: "/img/projetos/tonino-lamborghini-1.jpg",
    alt: "Tonino Lamborghini Residences",
    title: "Tonino Lamborghini Residences – SC",
    meta: "Embraed Empreendimentos",
  },
  {
    img: "/img/projetos/artesano-1.jpg",
    alt: "Artesano",
    title: "Artesano",
    meta: "Plaenge Empreendimentos",
  },
  {
    img: "/img/projetos/new-york-1.jpg",
    alt: "New York Apartments",
    title: "New York Apartments – SC",
    meta: "Embraed Empreendimentos",
  },
  {
    img: "/img/projetos/ode-perdizes-1.jpg",
    alt: "Ode Perdizes",
    title: "Ode Perdizes – SP",
    meta: "Tegra Incorporadora",
  },
  {
    img: "/img/projetos/piazza-1.jpg",
    alt: "Piazza By Quadra",
    title: "Piazza By Quadra",
    meta: "Quadra Engenharia",
  },
  {
    img: "/img/projetos/brava-ocean-2.jpg",
    alt: "Brava Ocean",
    title: "Brava Ocean",
    meta: "CN Empreendimentos",
  },
];

export default function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Projetos</span>
          <h2 className="section-title">
            Desenvolvidos com as principais construtoras do Brasil.
          </h2>
          <p className="section-sub">
            Projetos de alto nível realizados em parceria com as maiores{" "}
            <strong>incorporadoras do país.</strong>
          </p>
        </div>
        <div className="projetos-grid">
          {projetos.map((p, i) => (
            <a key={i} href="#projetos" className="projeto-card">
              <div className="projeto-img-wrap">
                <img src={p.img} alt={p.alt} className="projeto-img" />
              </div>
              <div className="projeto-info">
                <h4>{p.title}</h4>
                <div className="projeto-meta">{p.meta}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="projetos-cta">
          <a href="/projetos" className="btn-ghost">
            Ver todos os projetos →
          </a>
        </div>
      </div>
    </section>
  );
}
