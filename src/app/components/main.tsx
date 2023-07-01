"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import CoursesHtml from "./courses";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Main(): any {
  return (
    <div>
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
        <section className="   flex flex-col  justify-center items-center   border-b border-b-[#29292e] w-full ">
          <div className=" pt-[3.75rem] text-white">
            <div className="flex flex-col items-center justify-center ">
              <span className="w-[.0938rem] h-[5rem] rotate-180 bg-gradient-to-t mb-[3.75rem] from-purple-500 to-transparent "></span>
              <h3 className="font-bold text-[48px] mb-20 text-center  leading-[54px]">
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
          className={` ${roboto.className}  w-full justify-center items-center flex  bg-gradient-to-r from-[#121214]  to-[#09090a]  py-40  `}
        >
          <div className="flex justify-center  items-center flex-col w-full  min-w-[1120px] ">
            <div className=" text-white font-bold text-5xl text-center">
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

                <p>
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

                <p>
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

                <p>
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

                <p>
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

                <p>
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

                <p>
                  Apresente sua jornada e conecte-se com <br /> outros devs e
                  novas oportunidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
