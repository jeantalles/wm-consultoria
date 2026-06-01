"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const t0 = performance.now();
          function tick(now: number) {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
            else setValue(target);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}</span>;
}

export default function Numeros() {
  return (
    <div className="numeros-grid" id="numeros">
      <div className="numero-card">
        <div className="numero-valor">
          <sup>+</sup>
          <CountUp target={40} />
        </div>
        <div className="numero-label">
          anos de experiência
          <br />
          na área
        </div>
      </div>

      <div className="numero-card">
        <div className="numero-valor">2014</div>
        <div className="numero-label">
          ano de fundação
          <br />
          da consultoria
        </div>
      </div>

      <div className="numero-card">
        <div className="numero-valor">
          <sup>+</sup>
          <CountUp target={28} />
        </div>
        <div className="numero-label">
          construtoras e incorporadoras
          <br />
          atendidas
        </div>
      </div>

      <div className="numero-card">
        <div className="numero-icon">
          <img
            src="/img/mapa-brasil.png"
            alt="Mapa do Brasil"
            className="numero-mapa"
          />
        </div>
        <div className="numero-label">
          atuação em todo
          <br />o território nacional
        </div>
      </div>
    </div>
  );
}
