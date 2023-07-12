import Image from "next/image";
import { useEffect, useState } from "react";

export default function CounterDev() {
  const [counter, setCounter] = useState(574);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= 600) {
          clearInterval(interval);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 50);
  }, []);

  return (
    <>
      <div className="w-[1120px] flex flex-row items-center  h-[500px] justify-between  ">
        <div>
          <Image
            src={"/astronauts.svg"}
            width={496}
            height={496}
            alt="vetor Gráfico"
          />
        </div>
        <div className=" text-[#e1e1e6] flex justify-center flex-col ">
          <div className="mb-10">
            <h3 className="mb-6  font-bold text-5xl leading-[54px]  ">
              {" "}
              Mais de{" "}
              <strong className="text-[#04d361]">
                {" "}
                {counter} mil{" "}
              </strong> <br /> devs já se conectaram.
            </h3>
            <p className="leading-[26px]">
              Comece a avançar agora mesmo na direção dos seus <br /> objetivos
              e alcance o seu lugar como dev.
            </p>
          </div>

          <div className=" rounded-[5px] w-[240px] h-[63px] flex items-center justify-center  font-bold  cursor-pointer transition duration-150  ease-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]       bg-[#121214] hover:bg-[#996dff] uppercase text-white border  border-[#8257E5]">
            <a className="" href="">
              começar agora
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
