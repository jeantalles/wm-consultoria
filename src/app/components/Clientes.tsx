const logos = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

export default function Clientes() {
  return (
    <section className="clientes" id="clientes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Clientes</span>
          <h2 className="section-title">Empresas que confiam no nosso trabalho.</h2>
        </div>
        <div className="logo-grid">
          {logos.map((n) => (
            <div key={n} className="logo-item">
              <img
                src={`/wm-logos/${n}.png`}
                alt="Cliente WM Consultoria"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
