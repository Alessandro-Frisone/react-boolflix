import { useDataContext } from "../contexts/DataContext";
import FastAndFuriousCarousel from "./CaroselSaga";

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
    <main className="bg-gray-900 h-auto pb-10 border-t border-gray-700">
      <FastAndFuriousCarousel />
      <div className="container mx-auto mt-30">
        {/* Lista Film */}
        <h2 className="text-white text-center text-5xl mb-6">Lista Film</h2>
        <ul className="grid grid-cols-5 gap-6">
          {movies.map((movie) => {
            const rating = convertRating(movie.vote_average);
            return (
              <li
                key={movie.id}
                className="card bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <p className="flex justify-between items-center text-white">
                  Titolo: {movie.title}
                  <span className="flex items-center gap-2">
                    {getFlag(movie.original_language)} (
                    {movie.original_language})
                  </span>
                </p>
                {movie.poster_path && (
                  <img
                    src={getPosterUrl(movie.poster_path)}
                    alt={`Copertina di ${movie.title}`}
                    className="w-full h-auto mx-auto mt-2 rounded-md"
                  />
                )}
                <p className="text-white mt-2">
                  Titolo originale: {movie.original_title}
                </p>
                <p className="text-yellow-400 text-xl">
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
                </p>
              </li>
            );
          })}
        </ul>

        {/* Lista Serie TV */}
        <h2 className="text-white text-center text-5xl mt-12 mb-6">
          Lista Serie TV
        </h2>
        <ul className="grid grid-cols-5 gap-6">
          {tvShows.map((show) => {
            const rating = convertRating(show.vote_average);
            return (
              <li
                key={show.id}
                className="card bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:scale-105"
              >
                <p className="flex justify-between items-center text-white">
                  Titolo: {show.name}
                  <span className="flex items-center gap-2">
                    {getFlag(show.original_language)} ({show.original_language})
                  </span>
                </p>
                {show.poster_path && (
                  <img
                    src={getPosterUrl(show.poster_path)}
                    alt={`Copertina di ${show.name}`}
                    className="w-full h-auto mx-auto mt-2 rounded-md"
                  />
                )}
                <p className="text-white mt-2">
                  Titolo originale: {show.original_name}
                </p>
                <p className="text-yellow-400 text-xl">
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
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
