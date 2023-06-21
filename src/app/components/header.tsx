export default function Header(): any {
  return (
    <header className="flex w-[1440] h-[82]   flex-row justify-around">
      <div>
        {" "}
        <p>imagem</p>
      </div>
      <ul className="flex gap-8 flex-row">
        <li>Home</li>
        <li>Programas</li>
        <li>Eventos </li>
        <li>Blog</li>
        <li>A Rocketseat</li>
        <li>para empresas</li>
      </ul>

      <ul>
        <a href="">Entrar</a>
        <button>criar conta</button>
      </ul>
    </header>
  );
}
