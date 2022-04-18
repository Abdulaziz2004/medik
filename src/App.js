import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dolzarb from "./pages/dolzarbpages";
import HomePage from "./pages/HomePage";
import Interyuv from "./pages/interyuv";
import InteryuvDesscription from "./pages/InteryuvDesscription";
import Navs from "./pages/navs";
import NotFaunt from "./pages/notFaunt";
import Shifokorlar from "./pages/shifokorlar";
import Xizmarlar from "./pages/Xizmatlar";
import Yonalish from "./pages/yonalish";
import Boshsahifa from "./pages/boshSahifa";
import Kirish from "./pages/kirish";
import Savolberish from "./pages/savolBerish";

function App() {
  return (
    <div className="App">
      <Navs />
      <Routes>
        <Route path="*" element={<NotFaunt />} />
        <Route path="/" exact element={<HomePage />}>
          <Route index element={<Boshsahifa />} />
          <Route path="kirish" element={<Kirish />} />
          <Route path="shifokorlar" element={<Shifokorlar />} />
          <Route path="xizmatlar" element={<Xizmarlar />} />
          <Route path="yonalish" element={<Yonalish />} />
        </Route>
        <Route path="savol" element={<Savolberish />} />
        <Route path="interyuv" element={<Interyuv />} />
        <Route path="/interyuv/:slug" element={<InteryuvDesscription />} />
        <Route path="dolzarb" element={<Dolzarb />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
