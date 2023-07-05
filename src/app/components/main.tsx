"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import CoursesHtml from "./courses";
import CounterDev from "./counterdev";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Main(): any {
  return (
    <div className={roboto.className}>
      <main className=" flex justify-center  flex-col  ">
        <section
          className={` ${roboto.className}  bg-[url('/bg.png')] bg-contain bg-[#121214]  bg-no-repeat items-center text-white mt-[82px]`}
        >
          <div className="flex items-center text-center flex-col">
            {" "}
            <div className="font-normal mt-[5.625rem] gap-3 text-lg mb-4  max-h-6 h-full  text-[#04D361] flex flex-row ">
              <Image src="/emoji.svg" width={24} height={24} alt="Saudação" />
              <span>Hello World</span>
            </div>
            <h1 className="font-bold text-[56px] mb-4  leading-[60px]">
              Acelere cada etapa da sua <br /> carreira em programação
            </h1>
            <h2 className="leading-[26px] mb-10">
              O mapa completo para você impulsionar sua evolução e acessar{" "}
              <br /> as melhores oportunidades da sua carreira como dev.
            </h2>
            <div className="   rounded-[.3125rem]  border-[#8257E5]  mb-[7.25rem] border    ">
              <a
                className="font-bold flex-row flex justify-center items-center text-base  text-center  w-[17.5794rem] h-[3.5rem] bg-[#8257E5] gap-x-6   uppercase "
                href=""
              >
                embarcar no foguete
                <span className="   ">
                  <Image
                    src="/arrow-right-bg-purple.svg"
                    width={32}
                    height={32}
                    alt="flecha"
                  />
                </span>
              </a>
            </div>{" "}
            <div className="w-full max-w-[69.375rem] max-h-[39rem]   rounded-lg  ">
              <div className="relative pb-[56.548%]     ">
                <iframe
                  className="absolute top-0 left-0 w-full h-full bg-[#29292e] border-[#29292e] border rounded-lg  "
                  src="https://www.youtube.com/embed/uKsq7y6DJ84"
                  title="YouTube Video"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="   flex flex-col  justify-center items-center h-full pb-[60px] max-h-[1108px] border-b border-b-[#29292e] w-full ">
          <div className=" pt-[3.75rem] text-white">
            <div className="flex flex-col items-center justify-center ">
              <span className="w-[.0938rem] h-[5rem] rotate-180 bg-gradient-to-t mb-[3.75rem] from-purple-500 to-transparent "></span>
              <h3 className="font-bold text-[#e1e1e6] text-[48px] mb-20 text-center  leading-[54px]">
                Somos uma plataforma completa de <br /> aprendizado contínuo em
                programação
              </h3>
            </div>
          </div>
          <div className="w-full max-w-[1120px]">
            <CoursesHtml />
          </div>
        </section>
        <section
          className={` ${roboto.className} min-h-[880px] w-full justify-center items-center flex  bg-gradient-to-r from-[#121214]  to-[#09090a]  py-40  `}
        >
          <div className="flex justify-center  items-center flex-col   w-[1120px] ">
            <div className=" text-white font-bold text-5xl leading-[54px] text-center">
              <h3>
                Por que escolher a <br /> plataforma Rocketseat?
              </h3>
            </div>
            <div className="  grid grid-cols-3 gap-8 mt-20  gap  text-white ">
              <div>
                <div>
                  <Image
                    src="/certificate-medal.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold text-[28px] mb-4">
                    Formação completa
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Comece do zero e avance na direção das <br /> suas primeiras
                  oportunidades na área.
                </p>
              </div>
              <div>
                <div>
                  <Image
                    src="/browser.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold w-full flex-w  text-[28px] mb-4">
                    Programa de especialização
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Especialize-se em stacks de ponta,
                  <br /> amplamente utilizadas no mercado.
                </p>
              </div>
              <div>
                <div>
                  <Image
                    src="/video-play.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold text-[28px] mb-4 ">
                    Aulas avançadas
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Esteja entre os melhores explorando cases <br /> reais de
                  forma prática.
                </p>
              </div>
              <div>
                <div>
                  <Image
                    src="/laptop-chat.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold text-[28px] mb-4 ">
                    Fórum exclusivo
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Tire dúvidas técnicas de forma estruturada <br /> e receba
                  nosso suporte.
                </p>
              </div>
              <div>
                <div>
                  <Image
                    src="/mobile-device.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold text-[28px] mb-4   ">
                    Projetos profissionais
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Aprenda na prática enquanto desenvolve <br /> aplicações de
                  alto nível.
                </p>
              </div>
              <div>
                <div>
                  <Image
                    src="/profile.svg"
                    width={48}
                    height={48}
                    alt="Vetor Gráfico"
                    className="mb-4"
                  />
                  <h4 className="font-bold text-[28px] mb-4 ">
                    Perfil personalizado
                  </h4>
                </div>

                <p className="text-[#a8a8b3]">
                  Apresente sua jornada e conecte-se com <br /> outros devs e
                  novas oportunidades.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section four */}
        <section className="min-h-[679px] flex items-center justify-center bg-[#121214]">
          <div className="w-[1120px] flex flex-col justify-center items-center">
            <div className="flex  justify-between items-center mb-20 w-full">
              <h3 className="font-bold text-5xl leading-[58px] text-[#e1e1e6] ">
                Impulsionamos milhares <br /> de devs diariamente
              </h3>
              <Image
                src="/boosting.svg"
                width={160}
                height={50}
                alt="Vetor gráfico"
              />
            </div>
            <div className="grid grid-cols-4 w-full gap-8 ">
              <div className="pb-4 ">
                <div className="w-fit">
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    <span className="text-[56px] text-[#04d361] font-bold">
                      {" "}
                      +737{" "}
                    </span>{" "}
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p className="pt-8 text-lg font-normal text-[#e1e1e6]">
                  Devs impactados por <br /> eventos e cursos gratuitos
                </p>
              </div>
              <div className="pb-4">
                <div className="w-fit">
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      {" "}
                      +34{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p className="pt-8  text-lg text-[#e1e1e6]">
                  Alunos e <br /> alunas
                </p>
              </div>
              <div className="pb-4">
                <div className="w-fit">
                  <h4 className="text-[56px] pb-4 text-[#e1e1e6] w-fit font-bold">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      +314{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p className="pt-8 text-lg text-[#e1e1e6]">
                  Devs no canal <br />
                  do Youtube
                </p>
              </div>
              <div className=" ">
                <div className="w-fit">
                  <h4 className="text-[56px] pb-4  text-[#e1e1e6] font-bold w-fit">
                    {" "}
                    <span className="text-[56px] text-[#04d361] font-bold">
                      +214{" "}
                    </span>
                    mil
                  </h4>
                  <div className=" bg-gradient-to-r from-[#8257e6] to-[rgba(130,87,230,.25)] h-[3px] w-full"></div>
                </div>

                <p className="pt-8  text-lg text-[#e1e1e6] ">
                  Devs na comunidade <br /> aberta no Discord
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[886px] w-full flex items-center justify-center py-40 bg-gradient-to-r from-[#121214]  to-[#09090a]">
          <div className="w-[1120px]  flex flex-col text-white justify-between h-[556px]  ">
            <div className="flex flex-row  items-center w-full justify-between  ">
              <div className="text-5xl font-bold leading-[58px] ">
                <h3>
                  {" "}
                  Método desenhado para <br /> acelerar a sua evolução
                </h3>
              </div>
              <div className="relative min-h-full h-[96px]  before:bg-[#3c3c42] before:w-[50px] before:h-[1px] before:absolute before:top-0  before:content-['']">
                <p className="text-base pt-6 leading-[26px] ">
                  {" "}
                  Combinamos 3 pilares para você conquistar experiência, <br />
                  dominar as ferramentas e saber se posicionar profissionalmente
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-3 gap-8   ">
              <div className=" flex flex-col w-[352px]  relative border-[#29292e]  bg-[#121214] border pr-[52px]  pl-[24px] rounded-lg py-8  h-[378px] justify-evenly">
                <div className="mb-4 h-[166px] flex justify-between flex-col ">
                  <div className="">
                    {" "}
                    <Image
                      src="/target.svg"
                      width={80}
                      height={80}
                      alt="vetor gráfico"
                    />
                  </div>

                  <h4 className="font-bold text-[32px]  ">Foco</h4>
                </div>

                <p className=" text-[#a8a8b3] ">
                  Programação é um universo infinito,
                  <br /> logo ter foco é essencial. Nós vamos <br /> direto ao
                  ponto no que realmente <br /> importa para você dominar as{" "}
                  <br /> ferramentas, não apenas conhecê-las.
                </p>
                <div className="  absolute top-[77px] bottom-0  -right-[10px]">
                  <Image
                    src="/arrow.svg"
                    width={80}
                    height={12}
                    alt="vetor gráfico"
                  />
                </div>
              </div>

              <div
                className=" flex flex-col w-[352px] relative  border-[#29292e] border bg-[#121214] rounded-lg py-8  pr-[52px]  pl-[24px]  h-[378px] justify-evenly
               "
              >
                <div className="mb-4 h-[166px] flex justify-between flex-col ">
                  <div className="">
                    {" "}
                    <Image
                      src="/laptop.svg"
                      width={80}
                      height={80}
                      alt="Vetor Gráfico"
                    />{" "}
                  </div>
                  <h4 className="font-bold text-[32px]">Pratica</h4>
                </div>

                <p className=" text-[#a8a8b3] ">
                  A programação é uma disciplina <br /> prática. São as horas de
                  código que <br /> vão te preparar e dar a experiência <br />{" "}
                  necessária para tomar as melhores <br />
                  decisões no mundo real.
                </p>
                <div className="  absolute top-[77px] bottom-0  -right-[10px]">
                  <Image
                    src="/arrow.svg"
                    width={80}
                    height={12}
                    alt="vetor gráfico"
                  />
                </div>
              </div>
              <div className=" flex flex-col w-[352px] relative  h-[378px]  bg-[#121214] border-[#29292e]  pr-[52px] pl-[24px]  border rounded-lg py-8  justify-evenly ">
                <div className="mb-4 h-[166px] flex justify-between flex-col">
                  <div>
                    <Image
                      src="/groups.svg"
                      width={80}
                      height={80}
                      alt="Vetor Gráfico"
                    />
                  </div>

                  <div>
                    <h4 className=" font-bold text-[32px]">Grupo</h4>
                  </div>
                </div>

                <p className=" text-[#a8a8b3]  ">
                  A conexão entre Devs impulsiona seu <br /> repertório técnico,
                  suas habilidades <br /> comportamentais e sua rede de <br />{" "}
                  contatos. Além de ajudar a assimilar <br /> e fixar todo
                  aprendizado.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[1011px] flex items-center justify-center b border-b border-b-[#29292e]">
          <div className="w-[1120px] text-[#e1e1e6] h-[691px]  ">
            <div className="font-bold leading-[54px] text-5xl w-full ">
              <h3>
                Geramos resultado <br /> através do ensino de <br /> programação
              </h3>
            </div>
            <div className=" flex gap-20 w-full  ">
              <div className="mt-20 w-full">
                <div className=" border-b pb-10 border-b-[#29292e] min-w-full flex justify-around flex-col">
                  <div>
                    <p className=" text-[16px]   leading-[26px]">
                      &quot;Fiz muitas conexões que me levaram a hoje me
                      redescobrir dentro da <br /> tecnologia e atuar com
                      algumas stacks que além de estar em alta no <br /> mercado
                      fazem o meu dia ficar mais feliz. Sou eternamente grato a{" "}
                      <br />
                      Rocketseat assim como sou um eterno aluno do inicio ao
                      fim!&quot;
                    </p>
                  </div>

                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/henrique-weiand.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Henrique Weiand</h4>
                      <span className="text-[#a8a8b3]">
                        Remote TechLead/Developer
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-[16px] pt-10  leading-[26px] ">
                    &quot;O apoio da comunidade, e a estrutura do curso foram
                    fundamentais <br /> para o meu crescimento e entender como
                    aquelas linhas de código <br /> faziam sentido completo! No
                    backend, frontend e mobile, é indescritível <br /> poder
                    criar seu produto! Obrigada Rocketseat, U Rock&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/paloma-andrade.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Paloma Andrade de Oliveira</h4>
                      <span className=" text-[#a8a8b3]">
                        Engenheira de Software | Sauce Labs
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className=" border-b border-b-[#29292e] pb-10 flex justify-around flex-col">
                  <p className=" text-[16px]   leading-[26px]">
                    &quot;Hoje faço trabalhos para clientes até fora do Brasil,
                    e isso em 11 meses <br /> que comecei a aprender com a
                    Rocketseat. Tenho orgulho de dizer que <br /> recebo no
                    mínimo 3 contatos para entrevistas pelo LinkedIn por semana,
                    <br /> e sou um profissional procurado.&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center  ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/anderson-alves.png"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Anderson Alves</h4>
                      <span className=" text-[#a8a8b3]">
                        Fundador e Negócios na Yoopih
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-[16px] pt-10  leading-[26px]">
                    &quot;Aprendi muito e de maneira bem rápida, consegui um
                    novo emprego em <br /> uma empresa incrível e trabalho com o
                    que eu amo nas tecnologias que <br />
                    eu mais gosto no momento. Só tenho a agradecer a toda a
                    equipe por <br /> tornar isso possível!&quot;
                  </p>
                  <div className="flex flex-row mt-4  items-center w-full ">
                    <div className="  w-[64px] h-[64px]  border-[#3c3c42] border-2 flex items-center justify-center  rounded-full">
                      <Image
                        src="/melissa-fernandes.webp"
                        width={52}
                        height={52}
                        alt="Author"
                        style={{ borderRadius: "50%", padding: "1px" }}
                      />
                    </div>
                    <div className="flex flex-col ml-5 ">
                      <h4 className=" font-bold">Melissa Fernandes Novais</h4>
                      <span className="text-[#a8a8b3]">
                        Desenvolvedora Front-end
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-[#121214]  pt-40 pb-[100px] flex flex-col justify-center  border-b border-b-[#29292e]  items-center w-full h-[696px] ">
          <div className=" w-[1120px]   flex flex-col justify-center h-full  items-center ">
            <div className="flex flex-col text-[#e1e1e6] h-full text-center  w-full ">
              <h3 className="mb-6 font-bold text-5xl leading-[54px]">
                {" "}
                Empresas que contratam <br />
                nossos alunos
              </h3>
              <p className=" leading-[26px]">
                Existe um abismo entre profissionais de programação e o mercado.{" "}
                <br />
                Nosso propósito é construir uma ponte entre vocês através da
                educação.
              </p>
            </div>
            <div className="text-white w-full min-h-[171px] mt-20">
              <div className=" flex flex-wrap gap-x-10 gap-y-14 w-full h-full items-center  justify-center  ">
                <div>
                  <Image
                    src="/meta.webp"
                    width={114.01}
                    height={43}
                    alt="Author"
                  />
                </div>

                <div className="w-87 h-[35px]">
                  <Image
                    src="/ciet.png"
                    width={87}
                    height={10}
                    alt="logo ciet"
                  />
                </div>
                <div>
                  <Image
                    src="/totvs.webp"
                    width={150}
                    height={44.01}
                    alt="Author"
                  />
                </div>
                <div>
                  <Image
                    src="/accenture.webp"
                    width={162}
                    height={43}
                    alt="Author"
                  />
                </div>
                <div>
                  <Image
                    src="/stone.webp"
                    width={120}
                    height={45}
                    alt="Author"
                  />
                </div>
                <div>
                  <Image src="/itau.png" width={57} height={57} alt="Author" />
                </div>
                <div>
                  <Image
                    src="/avanade.webp"
                    width={205}
                    height={43}
                    alt="Author"
                  />
                </div>
                <div>
                  <Image
                    src="/compasso.webp"
                    width={208}
                    height={45.99}
                    alt="Author"
                  />
                </div>

                <div>
                  <Image
                    src="/nttdata.webp"
                    width={148}
                    height={36}
                    alt="Author"
                  />
                </div>
                <div>
                  <Image
                    src="/invilla.webp"
                    width={148}
                    height={47}
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-r from-[#121214]  py-[105px] to-[#09090a] w-full  border-b border-b-[#29292e] h-[710px] flex justify-center items-center ">
          <CounterDev />
        </section>
      </main>
    </div>
  );
}
