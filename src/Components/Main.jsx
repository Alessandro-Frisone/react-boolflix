import { useDataContext } from "../contexts/DataContext";

export default function Main() {
  const { movies } = useDataContext();
  return (
    <main>
      <h2>Lista film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>Titolo: {movie.title}</p>
            <p>Titolo orginale: {movie.original_title}</p>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
