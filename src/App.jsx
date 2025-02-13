// ----- CHIAVE API -----//
// 74c8ccfcf72cb82e3a700d9396ba6782 //
// ----- CHIAVE API -----//

//-------- IMPORT COMPONENTS --------//
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

//-------- IMPORT CONTEXT --------//
import { DataProvider } from "./contexts/DataContext";

export default function App() {
  return (
    <DataProvider>
      <Header />
      <Main />
      <Footer/>
    </DataProvider>
  );
}
