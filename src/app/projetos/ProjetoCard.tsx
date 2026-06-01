"use client";

import { useState } from "react";

type Props = {
  title: string;
  meta: string;
  images: { src: string; alt: string }[];
};

export default function ProjetoCard({ title, meta, images }: Props) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="projeto-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="projeto-img-wrap">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="projeto-img"
        />

        {/* Setas — só aparecem no hover e se tiver mais de 1 imagem */}
        {images.length > 1 && (
          <>
            <button
              className="projeto-arrow projeto-arrow-left"
              onClick={prev}
              aria-label="Imagem anterior"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              ‹
            </button>
            <button
              className="projeto-arrow projeto-arrow-right"
              onClick={next}
              aria-label="Próxima imagem"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="projeto-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`projeto-dot${i === current ? " active" : ""}`}
                onClick={(e) => { e.preventDefault(); setCurrent(i); }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="projeto-info">
        <h4>{title}</h4>
        <div className="projeto-meta">{meta}</div>
      </div>
    </div>
  );
}
