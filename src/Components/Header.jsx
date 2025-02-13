import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-auto p-8 bg-black">
      <img className="w-24 h-15" src="/img/logo-bool.png" alt="" />
      <SearchBar />
    </header>
  );
}
