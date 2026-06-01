export default function Nav() {
  return (
    <nav id="topo">
      <div className="nav-inner">
        <a href="#topo" className="nav-logo">
          <img src="/img/logo.png" alt="WM Consultoria" />
        </a>
        <div className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato">Contato</a>
          <a href="https://wa.me/5551999759015" className="btn-wa">
            Fale conosco
          </a>
        </div>
      </div>
    </nav>
  );
}
