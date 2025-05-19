import Container from "@/componentes/Container";
import Paragraph from "@/componentes/Paragraph";
import Section from "@/componentes/Section";
import TitleTwo from "@/componentes/Title-secondary";
import TitleFour from "@/componentes/TitleFour";
import { BsCheckCircleFill } from "react-icons/bs"
import Image from "next/image";
import Link from "next/link";
import website from "../../public/pagina-inicial-vista-na-tela-do-computador.png"

export default function Home() {
  return (
    <div>
      <Section className=" border border-4 h-screen flex justify-center items-center ">
        <Container className=" flex max-w-[80%] ">
          <Container className=" flex flex-col gap-4 justify-center">
            <TitleTwo className="text-3xl font-semibold ">
              Seu negócio pode estar perdendo clientes sem você perceber
            </TitleTwo>
            <Paragraph>Garanta uma presença online de alto nível com um site rápido, atrativo e otimizado para converter visitantes e clientes</Paragraph>
            <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer w-[70%]" >
              fazer orçamento gratuito
            </button>
          </Container>

            <Image src={website} className="border-2 w-[55%]"  alt="imagem que eu colocar"/>


        </Container>
      </Section>

      <Section className="border border-4 h-screen px-40 py-60">
        <TitleTwo>Presença digital que gera resultados</TitleTwo>
        <Paragraph>Se sua empresa não está no digital de forma correta, seus concorrentes estão lucranco  no seu lugar! Eu desenvolvo sites que resolvem isso pra você.</Paragraph>
        <Container className="border-2 flex gap-3 p-4">
          <Container className="border-2 p-7">
            <TitleFour>Mais credibilidade</TitleFour>
            <Paragraph>Seu negócio passa mais confiança e profissionalismo com um site bem estruturado, transmitindo segurança para seus clientes e aumentando suas chances de conversão.</Paragraph>
          </Container>
          <Container className="border-2 p-7">
            <TitleFour>Mais clientes</TitleFour>
            <Paragraph>Um site estratégico atrai visitantes qualificados e os transforma em clientes, funcionando 24 horas por dia para gerar mais oportunidades para o seu negócio.</Paragraph>
          </Container>
          <Container className="border-2 p-7">
            <TitleFour>Destaque digital</TitleFour>
            <Paragraph>com um site profissional, você supera a concorrencia, fortalece sua marca no digital e garante que sua empresa seja encontrada pelos clientes certos.</Paragraph>
          </Container>
          <Container className="border-2 p-7">
            <TitleFour>Atendimento rápido</TitleFour>
            <Paragraph>Integre seu site ao seu WhatsApp ou outra redes sociais, tornando a comunicação mais ágil e eficiente, sem perder nenhuma oportunidade de venda.</Paragraph>
          </Container>
        </Container>
      </Section>

      <Section className="border border-4 h-screen flex justify-center items-center flex-col" >
        <TitleTwo>Meus serviços</TitleTwo>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Sites institucionais</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Landing pagess</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Portfólios</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>E-commerce</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Blogs profissionais</TitleFour>
        </Container>
      </Section>

      <Section className="border border-4 h-screen flex justify-center items-center flex-col" >
        <TitleTwo>Benefícios para o cliente</TitleTwo>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Site responsivo para todos os dispositivos</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Velocidade e SEO</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Design personalizado</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Suporte e manutenção</TitleFour>
        </Container>
        <Container className="flex p-2 gap-2 items-center">
          <BsCheckCircleFill /> <TitleFour>Integração com redes sociais, WhatsApp, etc.</TitleFour>
        </Container>
      </Section>

      <Section className="h-screen" >
        <TitleTwo>Vamos criar o seu site dos sonhos?</TitleTwo>
        <Link href="/">QUERO MEU SITE!</Link> 
      </Section>


    </div>
  );
}
