import React from "react";

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4EFF" />
          <stop offset="100%" stopColor="#00C9A7" />
        </linearGradient>
      </defs>

      {/* Flor de Lótus (3 Pétalas) */}
      <g transform="translate(200, 150)" stroke="url(#grad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        {/* Pétala Central */}
        <path d="M0,-60 C15,-30 15,0 0,20 C-15,0 -15,-30 0,-60 Z" />
        {/* Pétala Esquerda */}
        <path d="M-10,-10 C-40,-20 -50,10 -20,30 C-10,20 -5,10 -10,-10 Z" />
        {/* Pétala Direita */}
        <path d="M10,-10 C40,-20 50,10 20,30 C10,20 5,10 10,-10 Z" />
      </g>

      {/* Sopro do Vento (Apenas em cima) */}
      <path 
        d="M160,70 C180,60 220,60 240,70 M230,65 C235,60 245,60 250,65" 
        stroke="url(#grad)" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />

      {/* Pulso Tecnológico (Circuito Elétrico - Ângulos Retos) */}
      <path 
        d="M50,220 L130,220 L130,200 L150,200 L150,240 L170,240 L170,180 L190,180 L190,220 L210,220 L210,250 L230,250 L230,210 L250,210 L250,220 L350,220" 
        stroke="url(#grad)" 
        strokeWidth="8" 
        strokeLinejoin="round" 
        strokeLinecap="square"
      />
    </svg>
  );
};
