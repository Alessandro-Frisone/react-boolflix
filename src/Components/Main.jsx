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
    return <img src={flagUrl} alt={language} width="25" height="15" />;
  };

  const getPosterUrl = (posterPath) => {
    if (!posterPath) return null;
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w342";
    return `${baseUrl}${size}${posterPath}`;
  };

  const convertRating = (rating) => {
    return Math.round(rating / 2);
  };

  return (
    <main>
      <h2>Lista film</h2>
      <ul>
        {movies.map((movie) => {
          const rating = convertRating(movie.vote_average);
          return (
            <li key={movie.id}>
              <p>Titolo: {movie.title}</p>
              {movie.poster_path && (
                <img
                  src={getPosterUrl(movie.poster_path)}
                  alt={`Copertina di ${movie.name}`}
                />
              )}
              <p>Titolo orginale: {movie.original_title}</p>
              <p>
                Lingua: {getFlag(movie.original_language)} (
                {movie.original_language})
              </p>
              <p>
                Voto:
                <span>
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={
                        index < rating
                          ? "fa-solid fa-star"
                          : "fa-regular fa-star"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
      <h2>Lista Serie TV</h2>
      <ul>
        {tvShows.map((show) => {
          const rating = convertRating(show.vote_average);
          return (
            <li key={show.id}>
              <p>Titolo: {show.name}</p>
              {show.poster_path && (
                <img
                  src={getPosterUrl(show.poster_path)}
                  alt={`Copertina di ${show.name}`}
                />
              )}
              <p>Titolo originale: {show.original_name}</p>
              <p>
                Lingua: {getFlag(show.original_language)} (
                {show.original_language})
              </p>
              <p>
                Voto:
                <span className="text-yellow-400 text-xl">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={
                        index < rating
                          ? "fa-solid fa-star"
                          : "fa-regular fa-star"
                      }
                      aria-hidden="true"
                    />
                  ))}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
