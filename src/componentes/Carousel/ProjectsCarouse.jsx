// components/CarrosselProjetos.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';





export default function CarrosselProjetos() {

  const projetos = [
    { id: 1, imagem: '/fluentfocus-img.png', titulo: 'FluentFocus', url: 'https://fluentfocus.vercel.app/', descricao: 'Site para professores de inglês' },
    { id: 2, imagem: '/landing page-img.png', titulo: 'Landing Page', url: 'https://travel-website-landing-page-sigma.vercel.app/', descricao: 'Landing page para agência de viagem' },
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
    <div className="flex flex-col items-center justify-center">
      <div className= 'relative w-full h-[300px] overflow-hidden  flex items-center justify-center' >
          {projetos.map((projeto, index) => (
            <Image 
              key={projeto.id}
              alt={projeto.titulo} 
              src={projeto.imagem}
              width={400}
              height={400}
              className={`absolute transition-opacity duration-500 border-1
                 rounded-lg shadow-[0_0_5px_5px_rgba(235,24,239,0.25)] object-cover ${
                index === indiceAtual ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />

          ))}

           <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 z-20  " >
              <button 
                className=' cursor-pointer '
                onClick={anterior} >
                  <BsChevronLeft size={40} />
              </button>
              <button 
                className=' cursor-pointer '
                onClick={proximo} >
                  <BsChevronRight size={40} />
              </button> 
            </div>
        </div>

        <div className='mb-6' >
          <h4>{projetos[indiceAtual].descricao}</h4>
        </div>
        
        <div className=' mt-4' >
              <Link 
                className="text-purple-400 border-1
                 shadow-[0_0_5px_5px_rgba(235,24,239,0.25)] rounded-lg p-5 text-lg font-medium "
                href={projetos[indiceAtual].url} target="_blank" rel="noopener noreferrer">
                {projetos[indiceAtual].titulo}
              </Link>
        </div>
              
    </div>   

          
  )
}

