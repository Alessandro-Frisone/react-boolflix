import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-auto p-8 bg-black">
      <div className="flex items-center">
        <img className="w-35 h-10 mr-20 transition-transform duration-300 ease-in-out hover:scale-110 animate-wiggle" src="/img/bool-logo.png" alt="" />
        <nav>
            <ul className="flex items-center gap-10 text-white">
                <li className="transition-transform duration-300 hover:scale-130 ">HOME</li>
                <li className="transition-transform duration-300 hover:scale-130 ">ORIGINALI</li>
                <li className="transition-transform duration-300 hover:scale-130 ">AGGIUNTI DI RECENTE</li>
                <li className="transition-transform duration-300 hover:scale-130 ">LA MIA LISTA</li>
            </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <SearchBar />
        <img className="w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-130 animate-wiggle" src="/img/notifica-bool.png" alt="" />
        <img className="w-10 h-10 transition-transform duration-300 ease-in-out hover:scale-130 animate-wiggle" src="/img/Netflix-avatar.png" alt="" />
      </div>
    </header>
  );
}
