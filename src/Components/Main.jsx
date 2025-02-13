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
  const { movies, tvShows } = useDataContext();

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

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return null;
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w342";
    return `${baseUrl}${size}${posterPath}`;
  };

  return (
    <main>
      <h2>Lista film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Titolo: {movie.title}</p>
            {movie.poster_path && (
              <img
                src={getPosterUrl(movie.poster_path)}
                alt={`Copertina di ${movie.name}`}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}
            <p>Titolo orginale: {movie.original_title}</p>
            <p>Lingua: {getFlag(movie.original_language)} ({movie.original_language})</p>
            <p>Voto: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
      <h2>Lista Serie TV</h2>
      <ul>
        {tvShows.map((show) => (
          <li key={show.id}>
            <p>Titolo: {show.name}</p>
            {show.poster_path && (
              <img
                src={getPosterUrl(show.poster_path)}
                alt={`Copertina di ${show.name}`}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}
            <p>Titolo originale: {show.original_name}</p>
            <p>Lingua: {getFlag(show.original_language)} ({show.original_language})</p>
            <p>Voto: {show.vote_average}</p>
          </li>
        ))}
      </ul>
    </main>
    
  );
}
