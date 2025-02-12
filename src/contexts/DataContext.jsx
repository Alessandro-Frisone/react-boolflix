import { createContext, useContext } from "react";

// CREAZIONE CONTESTO
const DataContext = createContext()

// DEFINISCO UN CUSTOM PROVIDER
function DataProvider({children}) {

 return (
 <DataContext.Provider value={{}}>{children}</DataContext.Provider>
)
}

// CREAO UN CUSTOM HOOK PER CONSUMARE QUESTO CONTESTO (SERVIRA PER RECUPERARE I DATI DAL CONTESTO)
function useDataContext(){
    const context= useContext(DataContext)
    return context
}

export {DataProvider, useDataContext}