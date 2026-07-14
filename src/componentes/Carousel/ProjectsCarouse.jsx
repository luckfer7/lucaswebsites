// components/CarrosselProjetos.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';





export default function CarrosselProjetos() {

  const projetos = [
    {
            id:1,
            imagem:"/fluentfocus-img.png",
            titulo:"FluentFocus",
            tipo:"Projeto real",
            descricao:"Plataforma criada para professores de inglês praticarem conversação com seus alunos.",
            tecnologias:["Next.js","React","Tailwind"],
            url:"https://fluentfocus.vercel.app/"
        },

        // {
        //     id:2,
        //     imagem:"/odonto.png",
        //     titulo:"Odonto Prime",
        //     tipo:"Projeto conceitual",
        //     descricao:"Site institucional para clínica odontológica com foco em agendamento de consultas.",
        //     tecnologias:["Next.js","Tailwind"],
        //     url:"#"
        // },

        // {
        //     id:3,
        //     imagem:"/advocacia.png",
        //     titulo:"Silva Advogados",
        //     tipo:"Projeto conceitual",
        //     descricao:"Landing page para escritório de advocacia focada em captação de clientes.",
        //     tecnologias:["Next.js","Tailwind"],
        //     url:"#"
        // },

        // {
        //     id:4,
        //     imagem:"/academia.png",
        //     titulo:"Power Gym",
        //     tipo:"Projeto conceitual",
        //     descricao:"Landing page para academia com planos, professores e formulário de matrícula.",
        //     tecnologias:["Next.js","Tailwind"],
        //     url:"#"
        // }
  ];

   const [inicio,setInicio]=useState(0)

    const mostrar=3

    const anterior=()=>{

        if(inicio===0){

            setInicio(projetos.length-mostrar)

        }else{

            setInicio(inicio-1)

        }

    }

    const proximo=()=>{

        if(inicio>=projetos.length-mostrar){

            setInicio(0)

        }else{

            setInicio(inicio+1)

        }

    }

  return(

        <div className="relative">

            <div className="absolute -top-20 right-0 flex gap-4">

                <button
                onClick={anterior}
                className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center shadow hover:scale-110 duration-300 cursor-pointer">

                    <BsChevronLeft/>

                </button>

                <button
                onClick={proximo}
                className="w-12 h-12 rounded-full bg-white text-black flex justify-center items-center shadow hover:scale-110 duration-300 cursor-pointer">

                    <BsChevronRight/>

                </button>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {projetos
                .slice(inicio,inicio+mostrar)
                .map((projeto)=>(

                    <Link
                    href={projeto.url}
                    target="_blank"
                    key={projeto.id}
                    className="bg-[#1c1c1c] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-300">

                        <div className="overflow-hidden">

                            <Image
                            src={projeto.imagem}
                            width={700}
                            height={450}
                            alt={projeto.titulo}
                            className="w-full h-64 object-cover hover:scale-105 duration-500"/>

                        </div>

                        <div className="p-7">

                            <span className={`text-sm font-medium px-3 py-1 rounded-full

                            ${projeto.tipo==="Projeto real"
                            ?"bg-green-700"
                            :"bg-purple-700"}

                            `}>

                                {projeto.tipo}

                            </span>

                            <h3 className="text-2xl font-bold mt-5 mb-4">

                                {projeto.titulo}

                            </h3>

                            <p className="text-gray-300 leading-7 mb-6">

                                {projeto.descricao}

                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">

                                {projeto.tecnologias.map((tech)=>(
                                    <span
                                    key={tech}
                                    className="border border-purple-400 text-purple-300 rounded-full px-3 py-1 text-sm">

                                        {tech}

                                    </span>
                                ))}

                            </div>

                            <button
                            className="w-full bg-[#7046a8] hover:bg-[#8f65c8] rounded-xl py-3 font-semibold cursor-pointer">

                                {projeto.tipo==="Projeto real"
                                ?"Ver projeto"
                                :"Ver conceito"}

                            </button>

                        </div>

                    </Link>

                ))}

            </div>

        </div>

    )
}

