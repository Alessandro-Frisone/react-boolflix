export default function Footer() {
  return (
    <footer className="h-24 bg-black text-white flex flex-col items-center justify-center border-t border-gray-700">
      <p className="text-gray-400 text-sm">
        © 2025 Movie Hub. Tutti i diritti riservati.
      </p>
      <div className="flex gap-6 mt-2">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fa-brands fa-facebook text-xl"/>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fa-brands fa-twitter text-xl"/>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fa-brands fa-instagram text-xl"/>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fa-brands fa-youtube text-xl"/>
        </a>
      </div>
    </footer>
  );
}
