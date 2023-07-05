import Image from "next/image";
import { useEffect, useState } from "react";

export default function CounterDev() {
  const [counter, setCounter] = useState(575);

  useEffect(() => {
    const dev = counter + 1;
    setCounter(dev);
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

          <div className=" rounded-[5px] w-[240px] h-[62px] flex items-center justify-center  font-bold  bg-[#121214]  uppercase text-white border  border-[#8257E5]">
            <a className="" href="">
              começar agora
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
