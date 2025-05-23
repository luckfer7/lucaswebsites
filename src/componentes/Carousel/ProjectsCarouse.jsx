// components/CarrosselProjetos.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';


const projetos = [
  { id: 1, imagem: '/fluentfocus.jpg', titulo: 'FluentFocus' },
  { id: 2, imagem: '/landingpage.jpg', titulo: 'Landing Page' },
//   { id: 3, imagem: '/projeto3.png', titulo: 'Projeto 3' },
];

export default function CarrosselProjetos() {
  const [indexAtual, setIndexAtual] = useState(0);

  const proximo = () => {
    setIndexAtual((indexAtual + 1) % projetos.length);
  };

  const anterior = () => {
    setIndexAtual((indexAtual - 1 + projetos.length) % projetos.length);
  };

  return (
    <div className="w-full h-full mx-auto relative">
      <Image
        width={250}
        height={80}
        src={projetos[indexAtual].imagem}
        alt={projetos[indexAtual].titulo}
        className=" mx-auto object-cover rounded-xl shadow-md transition-all duration-300"
      />
      <button
        onClick={anterior}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
