
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
      <Section className=" min-h-screen flex justify-center items-center first-section ">
        <Container className=" flex max-w-[80%] shadow-md shadow-[#6c4a99] rounded-md p-8  first-container ">
          <Container className=" flex flex-col gap-4 justify-center">
            <TitleTwo className="text-3xl font-semibold ">
              Seu negócio pode estar perdendo <span className="text-[#ba93e9]" >clientes sem você perceber</span>
            </TitleTwo>
            <Paragraph className=" text-base ">Garanta uma presença online de alto nível com um site rápido, atrativo e otimizado para converter visitantes e clientes</Paragraph>
            <Link href="https://wa.me/5521994468609" target="_blank" className="bg-[#7046a8] text-white font-semibold px-4 py-2 rounded hover:bg-[#a47ed2] transition cursor-pointer w-[70%] container-button " >
              fazer orçamento gratuito
            </Link>
          </Container>

            <Image src={website} className="border-2 w-[55%] img-first "  alt="imagem que eu colocar  "/>


        </Container>
      </Section>

      <Section className=" min-h-screen flex justify-center items-center flex-col ">
        <TitleTwo className=" text-3xl text-center font-semibold mb-4" >Presença digital que <span className="text-[#ba93e9]" >gera resultados</span></TitleTwo>
        <Paragraph className="mb-6 text-second-container" >Se sua empresa não está no digital de forma correta, seus concorrentes estão lucrando no seu lugar! Eu desenvolvo sites que resolvem isso pra você.</Paragraph>
        <Container className=" flex gap-6 p-2 w-[70%] second-container ">

          <Container className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7">
            <TitleFour className="mb-4 text-xl font-semibold" >Mais credibilidade</TitleFour>
            <Paragraph>Seu negócio passa mais confiança e profissionalismo com um site bem estruturado, transmitindo segurança para seus clientes e aumentando suas chances de conversão.</Paragraph>
          </Container>
          <Container className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7">
            <TitleFour className="mb-4 text-xl font-semibold" >Mais clientes</TitleFour>
            <Paragraph>Um site estratégico atrai visitantes qualificados e os transforma em clientes, funcionando 24 horas por dia para gerar mais oportunidades para o seu negócio.</Paragraph>
          </Container>
          <Container className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7">
            <TitleFour className="mb-4 text-xl font-semibold" >Destaque digital</TitleFour>
            <Paragraph>com um site profissional, você supera a concorrencia, fortalece sua marca no digital e garante que sua empresa seja encontrada pelos clientes certos.</Paragraph>
          </Container>
          <Container className="bg-[#280458] p-4 shadow-md shadow-[#280458] rounded-md hover:bg-[#ba93e9] p-7">
            <TitleFour className="mb-4 text-xl font-semibold" >Atendimento rápido</TitleFour>
            <Paragraph>Integre seu site ao seu WhatsApp ou outra redes sociais, tornando a comunicação mais ágil e eficiente, sem perder nenhuma oportunidade de venda.</Paragraph>
          </Container>
        </Container>
      </Section>

      <Section className=" h-screen flex  items-center flex-col" >
        <TitleTwo className="text-3xl text-center font-semibold mt-30 mb-15" >Meus serviços</TitleTwo>
        <Container className="flex gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold text-center" >Sites institucionais</TitleFour>
        </Container>
        <Container className="flex gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Landing pagess</TitleFour>
        </Container>
        <Container className="flex gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Portfólios</TitleFour>
        </Container>
        <Container className="flex gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >E-commerce</TitleFour>
        </Container>
        <Container className="flex gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Blogs profissionais</TitleFour>
        </Container>
      </Section>

      <Section className=" h-screen flex  items-center flex-col" >
        <TitleTwo className= "text-3xl text-center font-semibold mt-30 mb-15 " >Benefícios para o cliente</TitleTwo>
        <Container className="flex p-2 gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold " >Site responsivo para todos os dispositivos</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Velocidade e SEO</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Design personalizado</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Suporte e manutenção</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center mb-5">
          <BsCheckCircleFill /> <TitleFour className=" text-xl font-semibold" >Integração com redes sociais, WhatsApp, etc.</TitleFour>
        </Container>
      </Section>



      
      <Section className="h-screen" >
        <TitleTwo className="text-3xl text-center font-semibold mt-30 mb-15" >Quer ver meus projetos?</TitleTwo>
        <Container className='' >
          <CarrosselProjetos />
        </Container>
      </Section>

      <Section className="h-screen flex  items-center flex-col mt-40" >
        <TitleTwo className=" text-3xl font-semibold mb-15 last-title " >Vamos criar o seu site dos sonhos?</TitleTwo>
        <Link className=" bg-[#7046a8] text-white font-semibold px-10 py-2 rounded hover:bg-[#a47ed2] transition cursor-pointer" href="https://wa.me/5521994468609" target="_blank">QUERO MEU SITE!</Link> 
      </Section>


    </div>
  );
}
