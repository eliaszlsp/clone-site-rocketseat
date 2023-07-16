import { Roboto } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function CoursesHtml() {
  const [positionX, setPositionX] = useState<number>(0);
  const [positionWidth, setPositionWidth] = useState<number>(0);
  const explorerRef = useRef<any>();
  const igniteRef = useRef<any>();
  const discoverRef = useRef<any>();
  const [brightness, setBrightness] = useState(discoverRef);

  function position(button: any) {
    setPositionX(button.current.offsetLeft);
    setPositionWidth(button.current.offsetWidth);
    setBrightness(button);
  }

  useEffect(() => {
    setPositionWidth(discoverRef.current?.offsetWidth as number);
  }, []);

  const [courses, setCourses] = useState<string>("discover");

  const style = [
    "h-1",
    "bg-[#04d361]",
    "content-['']",
    "block",
    "bottom-0",
    "px-4",
    "mb-[-2px]",
  ];
  /* fazer acessibilidade  */
  return (
    <div className={`${roboto.className}  flex flex-col min-h-[660px] mx-6`}>
      <div
        aria-label="Encontre a melhor etapa para você estudar programação"
        className={` flex relative text-white flex-row gap-7  border-b min-h-[68px] h-full border-[#29292e]  `}
      >
        <button
          className={brightness === discoverRef ? "p-4" : "brightness-75 p-4 "}
          onClick={() => position(discoverRef)}
          ref={discoverRef}
        >
          <div>
            <Image
              src="discover-reduced.svg"
              width={131}
              height={30}
              alt="Discovery Logo"
            />
          </div>
        </button>
        <button
          className={brightness === explorerRef ? "p-4" : "brightness-75 p-4"}
          onClick={() => position(explorerRef)}
          ref={explorerRef}
        >
          {" "}
          <Image
            src="explorer.svg"
            width={112}
            height={33}
            alt="Explorer Logo"
            className=""
          />
        </button>
        <button
          className={` ${
            brightness === igniteRef ? "p-4" : "brightness-75 p-4"
          }`}
          onClick={() => position(igniteRef)}
          ref={igniteRef}
        >
          {" "}
          <Image
            src="ignite-reduced.svg"
            width={95}
            height={33}
            alt="Ignite Logo"
          />
        </button>

        <div
          className={`${style.join(" ")} absolute px-4 rounded-sm `}
          style={{
            transition: "all .3s ease-in-out",
            transform: `translateX(${positionX}px)`,

            width: `${positionWidth}px`,
          }}
        ></div>
      </div>

      <div className=" w-full ">
        {/* discovery */}
        <div
          className={`  ${
            brightness === discoverRef ? "flex flex-row" : "hidden"
          }     text-white w-full `}
        >
          <div className="max-w-[556px] w-full">
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Comece a programar do zero <br /> gratuitamente
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP,
              <br />
              Forms, Ferramentas, DOM e muito mais.
            </p>
            <a
              className="flex flex-row mt-8 mb-[60px]  max-w-[240.3px] h-[56px] bg-[#4863f7] font-bold text-sm rounded-[5px] gap-[15px] justify-center items-center uppercase "
              href=""
            >
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
            <div className="flex flex-row mt-4 min-h-[64px] items-center  ">
              <div className="  w-[64px] h-[64px]  border-[#4863f7] border-2 flex items-center justify-center  rounded-full">
                <Image
                  src="/ariadne-liranco.png"
                  width={54}
                  height={54}
                  alt="Author"
                  style={{ borderRadius: "50%", padding: "1px" }}
                />
              </div>

              <div className="flex flex-col ml-5 justify-between  leading-7 ">
                <h4 className=" font-bold">Ariadne Liranço</h4>
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
            brightness === explorerRef ? "flex flex-row" : "hidden"
          }     text-white  `}
        >
          <div className="max-w-[556px] w-full">
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Acesse sua primeira vaga em programação
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Aprenda as habilidades para ser um destaque no mercado da <br />{" "}
              programação e acessar sua primeira oportunidade ainda nesse ano.
            </p>
            <a
              className=" text-[#121214] font-bold  flex flex-row mt-8 mb-[60px]  max-w-[203.72px] h-[56px] text-sm rounded-[5px]
              gap-[15px] justify-center items-center uppercase bg-[#42d3ff]
              "
              href=""
            >
              saiba como
              <span>
                <Image
                  src="arrow-up-right-black.svg"
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
        {/* ignite */}
        <div
          className={`  ${
            brightness === igniteRef ? "flex flex-row" : "hidden"
          }     text-white  `}
        >
          <div className="max-w-[556px] w-full">
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Programa de especialização <br /> para acelerar sua carreira
            </h4>
            <p className=" text-[#E1E1E6] text-[16px]  leading-[26px]">
              Especialize-se em stacks específicas amplamente utilizadas e
              valorizadas <br /> no mercado como React, React Native e Node.js
            </p>
            <a
              className="flex flex-row mt-8 mb-[60px]  max-w-[252.2px] h-[56px] bg-[#00875f] font-bold text-sm rounded-[5px] gap-[15px] justify-center items-center uppercase  "
              href=""
            >
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
            <div className="flex flex-row items-center  leading-7  mt-4">
              <div className="w-[64px] h-[64px]  border-[#00875f] border-2 flex items-center justify-center  rounded-full">
                <Image
                  src="/henrique-weiand.webp"
                  width={54}
                  height={54}
                  alt="Author"
                  style={{ borderRadius: "50%", padding: "1px" }}
                />
              </div>

              <div className="flex flex-col ml-5">
                <h4 className="font-bold">Henrique Weiand</h4>
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
