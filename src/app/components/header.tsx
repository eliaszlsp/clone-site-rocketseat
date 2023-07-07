"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Programs from "./programs";
const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});
export default function Header(): any {
  return (
    <>
      <div>
        <div className="flex  fixed w-full z-10 h-[82px] border-b border-[#29292e] bg-[#121214] flex-col justify-center  items-center  min-w-max  ">
          <header className="max-w-[1440px] w-full flex flex-row  justify-between items-center   px-6 ">
            <div className="min-w-[210px]  min-h-[42px]  ">
              <Image src="/logo.svg" width={210} height={42} alt="logo" />
            </div>
            <div>
              <ul
                className={`${roboto.className}  font-normal flex gap-8 text-[#A8A8B3] flex-row `}
              >
                <li>
                  <a href="">Home</a>
                </li>
                <li className="flex flex-row items-center gap-x-[.3125rem] justify-center">
                  <p>Programas</p>
                  <span>
                    <Image
                      src="/chevron-down.svg"
                      width={12}
                      height={12}
                      alt="flecha para baixo"
                    />
                  </span>
                </li>
                <li className="flex flex-row items-center gap-x-[.3125rem] justify-center">
                  <p>Eventos</p>
                  <span>
                    <Image
                      src="/chevron-down.svg"
                      width={12}
                      height={12}
                      alt="flecha para baixo"
                    />
                  </span>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">A Rocketseat</a>
                </li>
                <li>
                  <a href="">Para empresas</a>
                </li>
              </ul>
            </div>
            <div>
              <ul
                className={` ${roboto.className} font-bold uppercase items-center gap-8  text-xs text-[#FFFFFF] flex-row flex `}
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <span>
                    {" "}
                    <Image
                      src="/user.svg"
                      width={16}
                      height={16}
                      alt="Usuário"
                    />{" "}
                  </span>
                  <a href="">Entrar</a>
                </div>

                <button className="border flex justify-center items-center w-[118.9504px] h-9 rounded-[5px] border-[#8257E5]">
                  <a href="" className="uppercase block  ">
                    criar conta{" "}
                  </a>
                </button>
              </ul>
            </div>
          </header>
        </div>
        <div className=" absolute mt-[82px] w-full bg-[#121214] hidden justify-center items-center   h-[387px] ">
          <Programs />
        </div>
      </div>
    </>
  );
}
