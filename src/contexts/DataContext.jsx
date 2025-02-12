import { createContext, useContext, useState } from "react";

// CREAZIONE CONTESTO
const DataContext = createContext()

// DEFINISCO UN CUSTOM PROVIDER
function DataProvider({children}) {

     const [movies, setMovies]= useState([])
     const [tvShows, setTvShows] = useState([]);
 return (
 <DataContext.Provider value={{movies, setMovies, tvShows, setTvShows }}>{children}</DataContext.Provider>
)
}

// CREAO UN CUSTOM HOOK PER CONSUMARE QUESTO CONTESTO (SERVIRA PER RECUPERARE I DATI DAL CONTESTO)
function useDataContext(){
    const context= useContext(DataContext)
    return context
}

export {DataProvider, useDataContext}