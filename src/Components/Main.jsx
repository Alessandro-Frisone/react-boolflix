import { useDataContext } from "../contexts/DataContext";

const languageFlags = {
    en: "https://flagcdn.com/w40/gb.png",
    it: "https://flagcdn.com/w40/it.png",
    fr: "https://flagcdn.com/w40/fr.png",
    es: "https://flagcdn.com/w40/es.png",
    de: "https://flagcdn.com/w40/de.png",
    ja: "https://flagcdn.com/w40/jp.png",
    zh: "https://flagcdn.com/w40/cn.png",
  };

export default function Main() {
  const { movies } = useDataContext();

  const getFlag = (language) => {
    const flagUrl = languageFlags[language] || "https://flagcdn.com/w40/un.png";
    return (
      <img 
        src={flagUrl} 
        alt={language} 
        width="25" 
        height="15" 
      />
    );
  };

  return (
    <main>
      <h2>Lista film</h2>
      
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Titolo: {movie.title}</p>
            <p>Titolo orginale: {movie.original_title}</p>
            <p>Lingua: {getFlag(movie.original_language)} ({movie.original_language})</p>
            <p>Voto: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </main>
    
  );
}
