import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Projetos from "./components/Projetos";
import Clientes from "./components/Clientes";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Clientes />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
