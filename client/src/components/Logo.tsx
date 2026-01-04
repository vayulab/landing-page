import React from "react";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 300"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="chakraGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6B4EFF" /> {/* Base Violeta */}
          <stop offset="50%" stopColor="#00C9A7" /> {/* Centro Teal */}
          <stop offset="100%" stopColor="#6B4EFF" /> {/* Topo Violeta */}
        </linearGradient>
      </defs>

      {/* Eixo Central (Sushumna / Bus de Dados) */}
      <line x1="50" y1="20" x2="50" y2="280" stroke="url(#chakraGrad)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />

      {/* 1. Muladhara (Base) - Quadrado (Terra) */}
      <rect x="35" y="240" width="30" height="30" stroke="url(#chakraGrad)" strokeWidth="3" transform="rotate(45 50 255)" />

      {/* 2. Svadhisthana (Sacral) - Círculo com Crescente (Água) - Simplificado para Círculo */}
      <circle cx="50" cy="215" r="12" stroke="url(#chakraGrad)" strokeWidth="3" />

      {/* 3. Manipura (Plexo Solar) - Triângulo Invertido (Fogo) */}
      <path d="M35,175 L65,175 L50,200 Z" stroke="url(#chakraGrad)" strokeWidth="3" strokeLinejoin="round" />

      {/* 4. Anahata (Coração) - Hexagrama (Ar/Vayu) - Dois Triângulos */}
      <g transform="translate(0, -10)">
        <path d="M35,155 L65,155 L50,180 Z" stroke="url(#chakraGrad)" strokeWidth="2" fill="none" />
        <path d="M35,170 L65,170 L50,145 Z" stroke="url(#chakraGrad)" strokeWidth="2" fill="none" />
      </g>

      {/* 5. Vishuddha (Garganta) - Círculo com Triângulo (Éter) */}
      <circle cx="50" cy="115" r="10" stroke="url(#chakraGrad)" strokeWidth="3" />
      <path d="M42,110 L58,110 L50,125 Z" stroke="url(#chakraGrad)" strokeWidth="1.5" fill="none" />

      {/* 6. Ajna (Terceiro Olho) - Círculo com 2 Pétalas (Mente) - Simplificado para Olho Geométrico */}
      <path d="M35,80 Q50,65 65,80 Q50,95 35,80 Z" stroke="url(#chakraGrad)" strokeWidth="3" fill="none" />
      <circle cx="50" cy="80" r="3" fill="url(#chakraGrad)" />

      {/* 7. Sahasrara (Coroa) - Lótus de 1000 Pétalas - Simplificado para Halo Radiante */}
      <path d="M30,40 Q50,20 70,40" stroke="url(#chakraGrad)" strokeWidth="3" strokeLinecap="round" />
      <path d="M35,30 Q50,10 65,30" stroke="url(#chakraGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <circle cx="50" cy="40" r="2" fill="url(#chakraGrad)" />

    </svg>
  );
};
