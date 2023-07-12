"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Programs from "./programs";
import Events from "./events";
import { useState } from "react";
const roboto = Roboto({
  weight: ["700", "400"],
  subsets: ["latin"],
});

export default function Header() {
  const [click, setClick] = useState("");
  const disableScroll = (hidden: boolean) => {
    if (hidden === true) {
      document.body.classList.toggle("overflow-hidden");
      document.body.classList.toggle("pr-[6px]");
    }
  };
  const handleClick = (display: string) => {
    setClick(click === "Programas" || click === "Eventos" ? "" : display);
    disableScroll(true);
  };

  return (
    <>
      <div>
        <div
          className={`flex  fixed w-full  ${
            click === "" ? "" : "pr-[.375rem]"
          }  z-10 h-[83px] border-b border-[#29292e] bg-[#121214] flex-col justify-center  items-center  min-w-max `}
        >
          <header className="max-w-[1440px]  w-full flex flex-row  min-h-full  justify-between items-center   px-6 ">
            <div className="min-w-[210px] mb-1   ">
              <Image src="/logo.svg" width={210} height={42} alt="logo" />
            </div>
            <nav className=" min-h-full w-[630px]  ">
              <ul
                className={`${roboto.className} h-[82px] w-full px-4 items-center justify-center font-normal flex  gap-8  text-[#A8A8B3] flex-row `}
              >
                <li className="flex flex-row items-center gap-x-[.3125rem]  transition-all duration-150 ease-linear  hover:text-white  h-full   hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent  justify-center">
                  <a href="">Home</a>
                </li>
                <button
                  onClick={() => handleClick("Programas")}
                  className="flex flex-row items-center gap-x-[.3125rem]   hover:text-white  h-full   hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent  justify-center"
                >
                  <p>Programas</p>
                  <span>
                    <div className="border-solid border-b-[2px] border-r-[2px] mb-[5px] ml-[2px] border-[#a8a8b3]  w-[7px] h-[7px] transform rotate-45"></div>
                  </span>
                </button>
                <button
                  onClick={() => handleClick("Eventos")}
                  className=" gap-x-[.3125rem]  flex flex-row items-center    h-full   hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent  justify-center  hover:text-white "
                >
                  <p>Eventos</p>
                  <span>
                    <div className="border-solid border-b-[2px] border-r-[2px] mb-[5px] ml-[2px] border-[#a8a8b3]  w-[7px] h-[7px] transform rotate-45"></div>
                  </span>
                </button>
                <li className=" hover:text-white transition-all duration-150 ease-linear   h-full  flex items-center  hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent">
                  <a className="  " href="">
                    Blog
                  </a>
                </li>
                <li className=" flex flex-row items-center  transition-all duration-150 ease-linear  min-w-[94.06px]   h-full   hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent  justify-center  hover:text-white ">
                  <a href="">A Rocketseat</a>
                </li>
                <li className="  flex flex-row items-center  transition-all duration-150 ease-linear min-w-[106.91px]  h-full   hover:border-[#996dff] hover:border-b-[2px]   border-b-[2px] border-b-transparent  justify-center   hover:text-white">
                  <a href="">Para empresas</a>
                </li>
              </ul>
            </nav>
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

                <button className="border flex justify-center items-center w-[118.9504px] h-[38px] rounded-[5px] border-[#8257E5] hover:bg-[#9466ff] transition all duration-300 ">
                  <a href="" className="uppercase block   ">
                    criar conta{" "}
                  </a>
                </button>
              </ul>
            </div>
          </header>
        </div>
        <div
          className={` fixed z-50 mt-[82px] w-full bg-[#121214] ${
            click === "Programas" ? "flex" : "hidden"
          } justify-center border-b border-[#29292e] items-center h-[387px] `}
        >
          <Programs />
        </div>
        <div
          className={` absolute mt-[82px] w-full bg-[#121214] ${
            click === "Eventos" ? "flex" : "hidden"
          } justify-center border-b border-[#29292e] items-center h-[277px]`}
        >
          <Events />
        </div>
      </div>
    </>
  );
}
