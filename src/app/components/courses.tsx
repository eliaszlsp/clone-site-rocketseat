import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function CoursesHtml() {
  const [discover, setDiscover] = useState<boolean>(true);
  const [explorer, setExplorer] = useState<boolean>(false);
  const [ignite, setIgnite] = useState<boolean>(false);

  const handleClickOne = (): void => {
    setDiscover(true);
    setExplorer(false);
    setIgnite(false);
  };
  const handleClickTwo = (): void => {
    setExplorer(true);
    setIgnite(false);
    setDiscover(false);
  };
  const handleClickTree = (): void => {
    setIgnite(true);
    setDiscover(false);
    setExplorer(false);
  };

  return (
    <div className={`${roboto.className}  flex flex-col `}>
      <div className=" flex  text-white flex-row gap-7 border-b border-[#29292e] p-4">
        <button onClick={handleClickOne}>
          {" "}
          <Image
            src="discover-reduced.svg"
            width={131}
            height={33}
            alt="Discovery Logo"
          />
        </button>
        <button onClick={handleClickTwo}>
          {" "}
          <Image
            src="explorer-reduced.svg"
            width={131}
            height={33}
            alt="Explorer Logo"
          />
        </button>
        <button onClick={handleClickTree}>
          {" "}
          <Image
            src="ignite-reduced.svg"
            width={131}
            height={33}
            alt="Ignite Logo"
          />
        </button>
      </div>

      <div className="">
        {/* discovery */}
        <div
          className={`  ${
            discover ? "flex flex-row" : "hidden"
          }     text-white  `}
        >
          <div>
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Comece a programar do zero gratuitamente
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP,
              <br />
              Forms, Ferramentas, DOM e muito mais.
            </p>
            <a className="flex flex-row mt-8 mb-[60px]  " href="">
              quero conhecer
              <span>
                <Image
                  src="arrow-up-right-white.svg"
                  width={24}
                  height={24}
                  alt="Vetor Gráfico Arrow Right Up"
                />
              </span>
            </a>
            <p className=" text-[16px] italic  leading-[26px]">
              &quot;O Discover em união com a maratona Discover são simplesmente{" "}
              <br />
              incríveis, muito conteúdo, além de te guiar a como ter disciplina
              nos <br /> estudos, te mostrando que só você pode mudar e evoluir
              como dev.&quot;
            </p>
            <div className="flex flex-row mt-4">
              <Image
                src="/ariadne-liranco.png"
                width={52}
                height={52}
                alt="Author"
              />
              <div className="flex flex-col ml-5">
                <h4 className="">Ariadne Liranço</h4>
                <span className="">@aricadidolira</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/dev-coding-discover.png"
              width={516}
              height={465.53}
              alt="Dev coding"
            />
          </div>
        </div>
        {/* explorer */}
        <div
          className={`  ${
            explorer ? "flex flex-row" : "hidden"
          }     text-white  `}
        >
          <div>
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Acesse sua primeira vaga em programação
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Aprenda as habilidades para ser um destaque no mercado da <br />{" "}
              programação e acessar sua primeira oportunidade ainda nesse ano.
            </p>
            <a className="flex flex-row mt-8 mb-[60px]  " href="">
              saiba como
              <span>
                <Image
                  src="arrow-up-right-white.svg"
                  width={24}
                  height={24}
                  alt="Vetor Gráfico Arrow Right Up"
                />
              </span>
            </a>
          </div>
          <div>
            <Image
              src="/dev-coding-explorer.png"
              width={516}
              height={465.53}
              alt="Dev coding"
            />
          </div>
        </div>
      </div>
      <div>
        {/* ignite */}
        <div
          className={`  ${
            ignite ? "flex flex-row" : "hidden"
          }     text-white  `}
        >
          <div>
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Programa de especialização para
              <br /> acelerar sua carreira
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Especialize-se em stacks específicas amplamente utilizadas e
              valorizadas <br /> no mercado como React, React Native e Node.js
            </p>
            <a className="flex flex-row mt-8 mb-[60px]  " href="">
              conhecer o ignite
              <span>
                <Image
                  src="arrow-up-right-white.svg"
                  width={24}
                  height={24}
                  alt="Vetor Gráfico Arrow Right Up"
                />
              </span>
            </a>
            <p className=" text-[16px] italic  leading-[26px]">
              &quot;Fiz muitas conexões que me levaram a hoje me redescobrir
              dentro da <br /> tecnologia e atuar com algumas stacks que além de
              estar em alta no <br /> mercado fazem o meu dia ficar mais
              feliz&quot;
            </p>
            <div className="flex flex-row mt-4">
              <Image
                src="/henrique-weiand.webp"
                width={52}
                height={52}
                alt="Author"
              />
              <div className="flex flex-col ml-5">
                <h4 className="">Henrique Weiand</h4>
                <span className="">Remote TechLead/Developer</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/dev-coding-ignite.png"
              width={516}
              height={465.53}
              alt="Dev coding"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
