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
          include_adult: true,
        },
      })
      .then((res) => setMovies(res.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "e99307154c6dfb0b4750f6603256716d",
          language: "it-IT",
          query: search,
          include_adult: true,
        },
      })
      .then((res) => setTvShows(res.data.results));
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        className="bg-gray-900 text-white border border-gray-700 rounded-md px-3 py-1.5 text-sm shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 w-90"
        name="search"
        type="search"
        placeholder="🔍 Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-md px-4 py-1.5 text-sm shadow hover:scale-105 hover:shadow-red-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Cerca
      </button>
    </form>
  );
}
