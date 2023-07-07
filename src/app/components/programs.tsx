import Image from "next/image";

export default function Programs() {
  return (
    <>
      <div className=" w-[1216px] h-[306px] flex flex-row items-center justify-between  ">
        <div className=" flex gap-4 justify-center h-full    flex-col">
          <h1>Programas</h1>
          <p>
            {" "}
            Plataforma completa de aprendizado para você que <br />
            quer começar ou se especializar em programação
          </p>
          <p>
            {" "}
            Tem alguma dúvida?<a href="">Tem alguma dúvida?</a>
          </p>
        </div>
        <div>
          <div className=" flex flex-col gap ">
            <Image
              src="discover-reduced.svg"
              width={126}
              height={32}
              alt="Discovery Logo"
            />
            <p>
              {" "}
              Introdução 100% gratuita para você entrar no universo de
              tecnologia.
            </p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <Image
              src="explorer.svg"
              width={112}
              height={32}
              alt="Explorer Logo"
              className=""
            />
            <p>
              Para você aprender programação do zero e conquistar sua primeira
              vaga.
            </p>
          </div>
          <div className=" flex flex-col gap-4 ">
            <Image
              src="ignite-reduced.svg"
              width={98}
              height={32}
              alt="Ignite Logo"
            />
            <p>
              Para você aprender programação do zero e conquistar sua primeira
              vaga.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
