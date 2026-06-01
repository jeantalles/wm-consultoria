import Numeros from "./Numeros";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <img
          src="/img/watermark.png"
          alt=""
          className="sobre-watermark"
          aria-hidden="true"
        />
        <div className="sobre-header">
          <span className="section-label">A empresa</span>
          <h2 className="section-title">
            Referência técnica em projetos de
            <br />
            esquadrias, fachadas e revestimentos.
          </h2>
        </div>
        <div className="sobre-grid">
          <img
            src="/img/sobre.jpg"
            alt="Edifício com fachada e esquadrias em destaque"
            className="sobre-photo"
          />
          <div className="sobre-text">
            <p>
              A WM Consultoria atua desde 2014 na análise e desenvolvimento de
              projetos de esquadrias de alumínio, fachadas e revestimentos para
              construtoras e incorporadoras em todo o Brasil.
            </p>
            <p>
              À frente da empresa, a Arq. Miriam Pereira reúne mais de 40 anos
              de experiência na coordenação de projetos com as principais
              construtoras do país, incluindo 13 anos à frente do departamento
              técnico do maior distribuidor de alumínio da América Latina.
            </p>
            <p>
              A consultoria atua como elo técnico entre arquitetura, estrutura e
              execução, garantindo compatibilidade, desempenho e viabilidade
              econômica em cada etapa do projeto.
            </p>
            <div className="sobre-tagline">
              Onde outros veem limites, nós encontramos soluções
            </div>
          </div>
        </div>
        <Numeros />
      </div>
    </section>
  );
}
