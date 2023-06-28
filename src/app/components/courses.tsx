import Image from "next/image";

export default function CoursesHtml() {
  return (
    <div className="flex flex-col ">
      <div>
        <div className="flex  text-white flex-row gap-7 border-b border-[#29292e] p-4">
          <button>
            {" "}
            <Image
              src="discover-reduced.svg"
              width={131}
              height={33}
              alt="Discovery Logo"
            />
          </button>
          <button>
            {" "}
            <Image
              src="explorer-reduced.svg"
              width={131}
              height={33}
              alt="Explorer Logo"
            />
          </button>
          <button>
            {" "}
            <Image
              src="ignite-reduced.svg"
              width={131}
              height={33}
              alt="Ignite Logo"
            />
          </button>
        </div>
        <div className="flex flex-row">
          <div className="text-white">
            <h4 className="font-bold  text-[32px]  pt-10 leading-9 mb-6 ">
              Comece a programar do zero gratuitamente
            </h4>
            <p>
              Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP,
              <br />
              Forms, Ferramentas, DOM e muito mais.
            </p>
            <a className="flex flex-row mt-8 mb-[60px] " href="">
              quero conhecer
              <span>
                <Image
                  src="arrow-up-right-white.svg"
                  width={24}
                  height={24}
                  alt="Vetor Gráfico Arrow Right Up"
                />
              </span>
            </a>
            <p>
              &quot;O Discover em união com a maratona Discover são simplesmente{" "}
              <br />
              incríveis, muito conteúdo, além de te guiar a como ter disciplina
              nos <br /> estudos, te mostrando que só você pode mudar e evoluir
              como dev.&quot;
            </p>
            <div className="flex flex-row mt-4">
              <Image
                src="/ariadne-liranco.png"
                width={52}
                height={52}
                alt="Author"
              />
              <div className="flex flex-col ml-5">
                <h4 className="">Ariadne Liranço</h4>
                <span className="">@aricadidolira</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/dev-coding-discover.png"
              width={516}
              height={465.53}
              alt="Dev coding"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
