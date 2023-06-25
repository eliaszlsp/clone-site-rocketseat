"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Main(): any {
  return (
    <div>
      <main className="max-w-[119.5rem]">
        <section
          className={` ${roboto.className}  bg-[url('/bg.png')] bg-contain bg-[#121214] bg-no-repeat items-center text-white `}
        >
          <div className="flex items-center text-center flex-col">
            {" "}
            <div className="font-normal mt-[90px] gap-3 text-lg mb-4  max-h-6 h-full  text-[#04D361] flex flex-row ">
              <Image src="/emoji.svg" width={24} height={24} alt="Saudação" />
              <span>Hello World</span>
            </div>
            <h1 className="font-bold text-[3.5rem] mb-4  leading-[3.75rem]">
              Acelere cada etapa da sua <br /> carreira em programação
            </h1>
            <h2 className="leading-[1.625rem] mb-10">
              O mapa completo para você impulsionar sua evolução e acessar{" "}
              <br /> as melhores oportunidades da sua carreira como dev.
            </h2>
            <div className="   rounded-[5px]  border-[#8257E5]  mb-[116px] border    ">
              <a
                className="font-bold flex-row flex justify-center items-center text-base  text-center  w-[281.27px] h-[56px] bg-[#8257E5] gap-x-6   uppercase "
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
            <div className="w-full max-w-[1110px] max-h-[624px]   rounded-lg  ">
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
      </main>
    </div>
  );
}
