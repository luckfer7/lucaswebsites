// components/CarrosselProjetos.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';





export default function CarrosselProjetos() {

  const projetos = [
    { id: 1, imagem: '/fluentfocus.jpg', titulo: 'FluentFocus' },
    { id: 2, imagem: '/landingpage.jpg', titulo: 'Landing Page' },
    //   { id: 3, imagem: '/projeto3.png', titulo: 'Projeto 3' },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0)

  const proximo = () => {
    setIndiceAtual((prev) => (prev + 1) % projetos.length)
  }

  const anterior = () => {
    setIndiceAtual((prev) => (prev - 1 + projetos.length) % projetos.length)
  }

  return (
        <div className= 'relative w-full h-[300px] overflow-hidden flex items-center justify-center' >
          {projetos.map((projeto, index) => (
            <Image 
              key={projeto.id}
              alt={projeto.titulo} 
              src={projeto.imagem}
              width={200}
              height={200}
              className={`absolute transition-opacity duration-500 object-cover ${
            index === indiceAtual ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
            />
          ))}

           <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-20" >
            <button onClick={anterior} >
                <BsChevronLeft size={40} />
            </button>
            <button onClick={proximo} >
                <BsChevronRight size={40} />
            </button>
        </div>
        </div>
          
  )
}

