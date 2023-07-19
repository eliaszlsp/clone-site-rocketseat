"use client";
import {
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  TwitchLogo,
  TwitterLogo,
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
  CaretUp,
} from "@phosphor-icons/react";
import Image from "next/image";
const beforeFooter = [
  "before:content-['']",
  "before:absolute",
  "relative",
  "before:bottom-0",
  "before:right-0",
  "before:w-0",
  "before:h-0.5",
  "before:bg-[#8257e5]",
  "before:transition-[width]",
  "before:duration-[.6s]",
  "w-fit",
  "before:ease-rocket-expo",
  "before:hover:w-full",
  "before:hover:left-0",
];

export default function Footer() {
  return (
    <>
      <footer
        className=" bg-[#121214] relative max-lg:hidden  after:h-[.0625rem] after:absolute after:bg-[#29292e] after:bottom-[112px]
       after:content-[''] after:w-full  flex flex-col justify-center  items-center  h-[30.5rem] "
      >
        {" "}
        <div className=" w-[70rem]  flex flex-col h-[31.25rem] ">
          <div>
            <div className="h-[23.5rem] w-full py-20 flex flex-row  justify-between  ">
              <div className="h-full w-fit">
                <div className="mb-[53px] ">
                  <Image
                    src="/boosting.svg"
                    width={256}
                    height={80.67}
                    alt="Vetor gráfico"
                  />
                </div>

                <div>
                  <span className="text-[#a8a8b3] text-sm ">
                    Rocketseat 2023 <br /> Todos os direitos reservados
                  </span>
                </div>
              </div>
              <div className="  h-[23.5rem]">
                <nav className="h-[13.5rem] w-[39.9375rem] leading-9 font-normal  text-[#a8a8b3] justify-between flex flex-row ">
                  <div className="flex flex-col w-fit">
                    <span className="font-bold  text-[#e1e1e6]">Programas</span>
                    <a className={beforeFooter.join(" ")} href="">
                      Discover{" "}
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Ignite
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Explorer
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Blog
                    </a>
                  </div>
                  <div className="flex flex-col w-fit ">
                    <span className="font-bold leading-9 text-[#e1e1e6]">
                      Sobre
                    </span>
                    <a className={beforeFooter.join(" ")} href="">
                      A Rocketseat{" "}
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Para empresas
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Direitos autorais
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Termos de uso
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      Políticas de privacidade
                    </a>
                  </div>
                  <div className="flex flex-col w-fit ">
                    <span className="font-bold  leading-9  text-[#e1e1e6] ">
                      Dúvidas
                    </span>
                    <a className={beforeFooter.join(" ")} href="">
                      Comunidade
                    </a>
                    <a className={beforeFooter.join(" ")} href="">
                      {" "}
                      Central de ajuda
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className=" h-full flex items-center justify-between ">
            <div className="text-white flex flex-row h-12 gap-2  ">
              <a
                className="h-12 w-12 bg-[#202024] flex justify-center items-center rounded"
                href=""
              >
                <YoutubeLogo size={32} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024] flex justify-center items-center rounded "
                href=""
              >
                <InstagramLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024] flex justify-center items-center rounded"
                href=""
              >
                <TiktokLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024]  flex justify-center items-center rounded"
                href=""
              >
                <TwitchLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024]  flex justify-center items-center rounded"
                href=""
              >
                <TwitterLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024] flex justify-center items-center rounded"
                href=""
              >
                <FacebookLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024]  flex justify-center items-center rounded"
                href=""
              >
                <LinkedinLogo size={30} color="#8257e5" weight="fill" />
              </a>
              <a
                className="h-12 w-12 bg-[#202024]  flex justify-center items-center rounded"
                href=""
              >
                <GithubLogo size={30} color="#8257e5" weight="fill" />
              </a>
            </div>
            <div>
              <button className="h-12 bg-[#202024] w-12 rounded flex justify-center items-center">
                <CaretUp size={15} color="#e1e1e6" weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
