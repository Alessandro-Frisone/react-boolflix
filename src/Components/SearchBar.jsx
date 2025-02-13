import { useState } from "react";
import axios from "axios";
import { useDataContext } from "../contexts/DataContext";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setTvShows } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          language: "it-IT",
          query: search,
          include_adult: true
        },
      })
      .then((res) => setMovies(res.data.results));
 

  axios
    .get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: "e99307154c6dfb0b4750f6603256716d",
        language: "it-IT",
        query: search,
        include_adult: true
      },
    })
    .then((res) => setTvShows(res.data.results));
 };
  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Cerca
      </button>
    </form>
  );
}
