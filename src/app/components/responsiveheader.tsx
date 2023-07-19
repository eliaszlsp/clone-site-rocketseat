import Image from "next/image";

export default function ResponsiveMenu(params: any) {
  return (
    <>
      <nav className="p-2 mx-3 overflow-hidden">
        <div className="bg-[#121214] flex flex-col justify-center items-center  gap-4  ">
          <div className="lg:w-[696px] max-lg:flex  max-lg:flex-col max-lg:w-[317px]  gap-4  max-lg:h-full">
            <h1 className="lg:hidden font-normal text-[16px] leading-[25.6px] text-[#c4c4cc] ">
              {" "}
              Programas
            </h1>
            <div className="  lg:px-4 pb-4 h-[109px]    lg:h-[102px] max-lg:w-[317px]    ">
              <div className=" flex flex-row  justify-between  items-center w-full  text-[#c4c4cc] text-sm   ">
                <div className=" flex gap-4 justify-center mt-4  w-fit  flex-col">
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
                      Introdução 100% gratuita para você{" "}
                      <br className="lg:hidden" /> entrar no universo de
                      tecnologia.
                    </p>
                  </div>
                </div>

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
            <div className="w-full h-[1px] border-t border-[#202024]"></div>

            <div className=" lg:px-4 pb-4 h-[109px]  gap-4  lg:h-[102px] max-lg:w-[317px]   ">
              <div className=" flex flex-row  items-center justify-between gap-4   text-[#c4c4cc] text-sm ">
                <div className=" flex gap-4 mt-4 max-lg:max-w-fit flex-col">
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
                    <p className="max-lg:leading-[21px]">
                      Para você aprender programação do{" "}
                      <br className="lg:hidden" /> zero e conquistar sua
                      primeira vaga.
                    </p>
                  </div>
                </div>
                <div>
                  <div className=" h-full  flex justify-center items-center    ">
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
            <div className="w-full h-[1px] border-t border-[#202024]"></div>

            <div className=" lg:px-4 pb-4 h-[109px]   lg:h-[102px] max-lg:w-[317px]   ">
              <div className=" flex-row flex justify-between items-center gap-4   text-[#c4c4cc] text-sm   ">
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
                      Para você acelerar e se especializar em{" "}
                      <br className="lg:hidden" /> React, React Native e
                      Node.js.
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
          <div className="w-full h-[1px] border-t border-[#202024]"></div>
          <div className="w-[696px] max-lg:flex  max-lg:flex-col max-lg:w-[317px]  max-lg:h-full ">
            <h1 className="lg:hidden font-normal text-[16px] leading-[25.6px] text-[#c4c4cc]">
              {" "}
              Eventos
            </h1>
            <div className=" lg:px-4 pb-4 h-[109px] gap-4   min-h-[94px]   ">
              <div className=" flex flex-row  justify-between items-center max-lg:w-[317px] w-full  text-[#c4c4cc] text-sm   ">
                <div className=" flex gap-4 justify-center mt-4  w-fit  flex-col">
                  <div>
                    <Image
                      src="nlw.svg"
                      width={90}
                      height={24}
                      alt="nlw Logo"
                    />
                  </div>

                  <div>
                    <p>
                      Evento online e gratuito de programação <br />
                      na prática.
                    </p>
                  </div>
                </div>

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
            <div className="w-full h-[1px] border-t border-[#202024]"></div>

            <div className=" lg:px-4 pb-4 h-[109px]   min-h-[94px]  ">
              <div className=" flex flex-row  items-center justify-between lg:gap-4  border-t border-[#29292e]   w-full text-[#c4c4cc] text-sm ">
                <div className=" flex gap-4 mt-4  flex-col">
                  <div>
                    <Image
                      src="assemble.svg"
                      width={137}
                      height={32}
                      alt="Explorer Logo"
                      className=""
                    />
                  </div>

                  <div>
                    <p>
                      Imersão presencial quem é ou quer{" "}
                      <br className="lg:hidden" /> se tornar um Tech Lead.
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
            <div className="w-full h-[1px] border-t border-[#202024]"></div>
          </div>
        </div>
      </nav>
    </>
  );
}
