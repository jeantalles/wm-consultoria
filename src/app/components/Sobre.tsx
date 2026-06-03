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
            Colaboramos com projetos visionários e de ponta. Nosso compromisso é com a excelência técnica e a inovação na engenharia de esquadrias em alumínio.
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
              Atuamos na interseção entre a criatividade arquitetônica e a resistência dos materiais, oferecendo uma consultoria especializada em esquadria que dá suporte técnico e estrutural às fachadas mais ambiciosas da construção contemporânea.
            </p>
            <p>
              A consultoria atua como elo técnico entre arquitetura, estrutura e execução, garantindo compatibilidade, desempenho e viabilidade económica em cada etapa do projeto.
            </p>
            <p>
              Compreendemos a esquadria não apenas como um componente visual, mas como uma solução complexa e vital que determina o desempenho final da obra.
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
