"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  "/img/hero-1.jpg",
  "/img/hero-2.jpg",
  "/img/hero-3.jpg",
  "/img/hero-4.jpg",
  "/img/hero-5.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((n: number) => setCurrent(n), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-badge">Desde 2014</div>
        <h1>
          Especialistas em esquadrias e fachadas com <em>40 anos de expertise</em> aplicada ao seu projeto.
        </h1>
        <p>
          Analisamos, especificamos e validamos cada detalhe técnico de esquadrias de alumínio, fachadas e revestimentos, eliminando incompatibilidades antes que se tornem problemas na obra.
        </p>
        <div className="hero-ctas">
          <a href="#servicos" className="btn-primary">
            Conheça nossos serviços
          </a>
          <a href="#projetos" className="btn-outline">
            Veja nossos projetos
          </a>
        </div>
      </div>

      <div className="hero-right">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`hero-slide-img${i === current ? " active" : ""}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`hero-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
