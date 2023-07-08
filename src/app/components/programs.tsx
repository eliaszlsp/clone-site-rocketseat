import Image from "next/image";

export default function Programs() {
  return (
    <>
      <div className=" w-[1216px] h-[306px] flex flex-row items-center justify-between   ">
        <div className=" flex justify-center h-full max-h-[133.8px]   flex-col">
          <div className=" gap-4 flex flex-col text-[#a8a8b3]  h-full ">
            <h1 className="font-bold text-[32px] leading-[44px] text-[#c4c4cc]">
              Programas
            </h1>
            <p className=" leading-[18px]">
              {" "}
              Plataforma completa de aprendizado para você que <br />
              quer começar ou se especializar em programação
            </p>
            <p>
              Tem alguma dúvida?{" "}
              <a href="" className=" ml-1 text-[#9466ff]">
                Fale com nosso time!
              </a>
            </p>
          </div>
        </div>
        <div className="w-[696px]  ">
          <div className="  px-4 pb-4 h-[102px]  ">
            <div className=" flex flex-row  justify-between items-center  w-full border-t border-[#202024] text-[#c4c4cc] text-sm   ">
              <div className=" flex gap-4 justify-center mt-4  w-full  flex-col">
                <div>
                  <Image
                    src="discover-reduced.svg"
                    width={126}
                    height={32}
                    alt="Discovery Logo"
                  />
                </div>

                <div>
                  <p>
                    Introdução 100% gratuita para você entrar no universo de
                    tecnologia.
                  </p>
                </div>
              </div>

              <div className=" h-full  flex justify-center items-center">
                <Image src="chevron-right.svg" width={24} height={69} alt="" />
              </div>
            </div>
          </div>

          <div className=" px-4 pb-4 h-[102px] ">
            <div className=" flex flex-row  items-center justify-between gap-4 border-t border-[#202024]   text-[#c4c4cc] text-sm ">
              <div className=" flex gap-4 mt-4  flex-col">
                <div>
                  <Image
                    src="explorer.svg"
                    width={112}
                    height={32}
                    alt="Explorer Logo"
                    className=""
                  />
                </div>

                <div>
                  <p>
                    Para você aprender programação do zero e conquistar sua
                    primeira vaga.
                  </p>
                </div>
              </div>
              <div>
                <div className=" h-full  flex justify-center items-center">
                  <Image
                    src="chevron-right.svg"
                    width={24}
                    height={69}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" px-4 pb-4 h-[102px]">
            <div className=" flex-row flex justify-between items-center gap-4   text-[#c4c4cc] text-sm border-t border-[#202024]   ">
              <div className=" flex gap-4 flex-col mt-4 ">
                <div>
                  <Image
                    src="ignite-reduced.svg"
                    width={98}
                    height={32}
                    alt="Ignite Logo"
                  />
                </div>

                <div>
                  <p>
                    Para você aprender programação do zero e conquistar sua
                    primeira vaga.
                  </p>
                </div>
              </div>

              <div>
                <div className=" h-full  flex justify-center items-center">
                  <Image
                    src="chevron-right.svg"
                    width={24}
                    height={69}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
