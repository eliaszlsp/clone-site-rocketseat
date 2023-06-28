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
      <main className=" flex justify-center  flex-col ">
        <section
          className={` ${roboto.className}  bg-[url('/bg.png')] bg-contain bg-[#121214] bg-no-repeat items-center text-white `}
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
        <section className=" flex flex-col  justify-center items-center w-full ">
          <div className=" pt-[3.75rem] text-white">
            <div className="flex flex-col items-center justify-center ">
              <span className="w-[.0938rem] h-[5rem] rotate-180 bg-gradient-to-t mb-[3.75rem] from-purple-500 to-transparent "></span>
              <h3 className="font-bold text-[48px] mb-20 text-center  leading-[54px]">
                Somos uma plataforma completa de <br /> aprendizado contínuo em
                programação
              </h3>
            </div>
          </div>
          <div className="  w-full max-w-[1120px]">
            <CoursesHtml />
          </div>
        </section>
      </main>
    </div>
  );
}
