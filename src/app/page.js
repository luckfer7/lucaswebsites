
import Container from "@/componentes/Container";
import Paragraph from "@/componentes/Paragraph";
import Section from "@/componentes/Section";
import TitleTwo from "@/componentes/Title-secondary";
import TitleFour from "@/componentes/TitleFour";
import { BsCheckCircleFill } from "react-icons/bs"
import Image from "next/image";
import Link from "next/link";
import website from "../../public/pagina-inicial-vista-na-tela-do-computador.png"
import CarrosselProjetos from "@/componentes/Carousel/ProjectsCarouse";


export default function Home() {
  return (
    <div className="main-container" >
      <Section data-aos="fade-right" className=" min-h-screen flex justify-center items-center first-section ">
        <Container className=" flex max-w-[80%] shadow-md rounded-md p-8  first-container ">
          <Container className=" flex flex-col gap-4 justify-center">
            <TitleTwo className="text-3xl font-semibold ">
              Seu negócio pode estar perdendo <span className="text-[#ba93e9]" >clientes sem você perceber</span>
            </TitleTwo>
            <Paragraph className=" text-base ">Garanta uma presença online de alto nível com um site rápido, atrativo e otimizado para converter visitantes e clientes</Paragraph>
            <Link href="https://wa.me/5521994468609" target="_blank" className="bg-[#7046a8] text-white font-semibold px-4 py-2 rounded hover:bg-[#a47ed2] transition cursor-pointer w-[70%] text-center 
            transition delay-150 duration-300 ease-in-out
            hover:-translate-y-1 hover:scale-110
            container-button " >
              fazer orçamento gratuito
            </Link>
          </Container>

            <Image src={website} className="border-2 w-[55%] img-first "  alt="imagem que eu colocar  "/>


        </Container>
      </Section>

      <Section className=" min-h-screen flex justify-center items-center flex-col ">
        <TitleTwo data-aos="fade-left" className=" text-3xl text-center font-semibold mb-4 second-section-title " >Presença digital que <span className="text-[#ba93e9]" >gera resultados</span></TitleTwo>
        <Paragraph data-aos="fade-left" className="mb-6 text-second-container" >Se sua empresa não está no digital de forma correta, seus concorrentes estão lucrando no seu lugar! Eu desenvolvo sites que resolvem isso pra você.</Paragraph>
        <Container  className=" flex gap-6 p-2 w-[70%] second-container ">

          <Container data-aos="fade-up"
     data-aos-duration="3000" className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7 second-container--container ">
            <TitleFour className="mb-4 text-xl font-semibold " >Mais credibilidade</TitleFour>
            <Paragraph>Seu negócio passa mais confiança e profissionalismo com um site bem estruturado, transmitindo segurança para seus clientes e aumentando suas chances de conversão.</Paragraph>
          </Container>
          <Container data-aos="fade-up"
     data-aos-duration="3000" className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7 second-container--container ">
            <TitleFour className="mb-4 text-xl font-semibold" >Mais clientes</TitleFour>
            <Paragraph>Um site estratégico atrai visitantes qualificados e os transforma em clientes, funcionando 24 horas por dia para gerar mais oportunidades para o seu negócio.</Paragraph>
          </Container>
          <Container data-aos="fade-up"
     data-aos-duration="3000" className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7 second-container--container ">
            <TitleFour className="mb-4 text-xl font-semibold" >Destaque digital</TitleFour>
            <Paragraph>com um site profissional, você supera a concorrencia, fortalece sua marca no digital e garante que sua empresa seja encontrada pelos clientes certos.</Paragraph>
          </Container>
          <Container data-aos="fade-up"
     data-aos-duration="3000" className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7 second-container--container ">
            <TitleFour className="mb-4 text-xl font-semibold" >Atendimento rápido</TitleFour>
            <Paragraph>Integre seu site ao seu WhatsApp ou outra redes sociais, tornando a comunicação mais ágil e eficiente, sem perder nenhuma oportunidade de venda.</Paragraph>
          </Container>
        </Container>
      </Section>

      <Section data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" 
        className=" min-h-screen flex flex-col items-center py-20 px-5 " >
        <TitleTwo className="text-3xl md:text-4xl text-center font-semibold mb-14" >Meus serviços</TitleTwo>
        <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  w-full max-w-7xl gap-6 p-2 " >

        
          <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
             <TitleFour className=" text-xl font-semibold " >Sites institucionais</TitleFour>
            <Paragraph className="text-left">Ideal para empresas que querem transmitir confiança e conquistar novos clientes. [Saber mais]</Paragraph>
          </Container>
          <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
             <TitleFour className=" text-xl text-left font-semibold" >Landing pages</TitleFour>
            <Paragraph>Páginas focadas em campanhas e geração de leads para aumentar vendas.</Paragraph>
          </Container>
          <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
             <TitleFour className=" text-xl font-semibold" >E-commerce</TitleFour>
            <Paragraph>Venda seus produtos 24 horas por dia com uma loja virtual moderna.</Paragraph>
          </Container>
          <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
             <TitleFour className=" text-xl font-semibold" >Portfólio Profissional</TitleFour>
            <Paragraph>Para profissionais liberais, designers, arquitetos, fotógrafos etc.</Paragraph>
          </Container>
        </Container>
      </Section>

      <Section 
        data-aos="fade-up-right" 
        className="min-h-screen flex flex-col items-center py-20 px-5" >
        <Container className=" " >
          <TitleTwo className= "text-3xl md:text-4xl text-center font-semibold mb-14 fourth-section--title " >Benefícios para o cliente</TitleTwo>
          <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl" >
            <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
              <TitleFour className=" text-xl font-semibold " >Site responsivo para todos os dispositivos</TitleFour>
              <Paragraph>Seu site funciona perfeitamente em celulares, tablets e computadores.</Paragraph>
            </Container>
            <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
              <TitleFour className=" text-xl font-semibold" >Velocidade e SEO</TitleFour>
              <Paragraph>Mais chances de aparecer no Google quando alguém procurar pelo seu serviço.</Paragraph>
            </Container>
            <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
              <TitleFour className=" text-xl font-semibold" >Design personalizado</TitleFour>
              <Paragraph>Um visual exclusivo que transmite confiança e fortalece sua marca.</Paragraph>
            </Container>
            <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
              <TitleFour className=" text-xl font-semibold" >Suporte e manutenção</TitleFour>
              <Paragraph>Você não fica sozinho depois da entrega.</Paragraph>
            </Container>
            <Container className="flex flex-col gap-4 bg-[#280458] p-7 rounded-xl shadow-md shadow-[#280458] hover:bg-[#ba93e9] transition duration-300">
              <TitleFour className=" text-xl font-semibold" >Integração com redes sociais, WhatsApp, etc.</TitleFour>
              <Paragraph>Seus clientes entram em contato com apenas um clique.</Paragraph>
            </Container>
          </Container>
        </Container>
      </Section>



      
      <Section className="h-screen" >
        <TitleTwo className="text-3xl text-center font-semibold mt-30 mb-15" >Quer ver meus projetos?</TitleTwo>
        <Container className='' >
          <CarrosselProjetos />
        </Container>
      </Section>

      <Section className="py-24 px-5">

        <Container
          className="
            max-w-6xl
            mx-auto
            rounded-3xl
            bg-gradient-to-r
            from-[#280458]
            via-[#4a2685]
            to-[#7046a8]
            p-10
            md:p-16
            shadow-[0_20px_60px_rgba(112,70,168,0.35)]
          "
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            <div className="max-w-2xl">

              <span className="uppercase tracking-[3px] text-purple-200 text-sm font-semibold">
                Pronto para crescer?
              </span>

              <TitleTwo className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                Seu próximo cliente pode estar procurando pelo seu negócio agora.
              </TitleTwo>

              <Paragraph className="text-lg text-gray-200 leading-8">
                Vamos desenvolver um site moderno, rápido e pensado para transmitir
                confiança, fortalecer sua marca e transformar visitantes em clientes.
              </Paragraph>

            </div>

           

            <div className="flex flex-col gap-6 items-center">

              <Link
                href="https://wa.me/5521994468609"
                target="_blank"
                className="
                  bg-white
                  text-[#280458]
                  font-bold
                  px-10
                  py-4
                  rounded-xl
                  hover:scale-105
                  hover:bg-gray-100
                  duration-300
                  shadow-lg
                "
              >
                Solicitar orçamento gratuito
              </Link>

              <p className="text-sm text-gray-200">
                💬 Resposta rápida pelo WhatsApp
              </p>

            </div>

          </div>

        </Container>

      </Section>


    </div>
  );
}
