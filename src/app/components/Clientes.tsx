const logos = [
  34, 6, 15, 33, 35, 36, 37, 38, 39,
  1, 2, 3, 4, 5, 7, 8, 9, 10,
  11, 12, 13, 14, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29,
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
