import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-auto p-8 bg-black">
      <div className="flex items-center">
        <img className="w-35 h-10 mr-20" src="/img/bool-logo.png" alt="" />
        <nav>
            <ul className="flex items-center gap-10 text-white">
                <li>HOME</li>
                <li>ORIGINALI</li>
                <li>AGGIUNTI DI RECENTE</li>
                <li>LA MIA LISTA</li>
            </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <SearchBar />
        <img className="w-10 h-10" src="/img/notifica-bool.png" alt="" />
        <img className="w-10 h-10" src="/img/Netflix-avatar.png" alt="" />
      </div>
    </header>
  );
}
