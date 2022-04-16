import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dolzarb from "./pages/dolzarbpages";
import HomePage from "./pages/HomePage";
import Interyuv from "./pages/interyuv";
import Navs from "./pages/navs";
import NotFaunt from "./pages/notFaunt";
import Shifokorlar from "./pages/shifokorlar";
import Xizmarlar from './pages/Xizmatlar';
import Yonalish from './pages/yonalish';

function App() {
  return (
    <div className="App">
        <Navs/>
      <Routes>
        <Route path="*" element={<NotFaunt />} />
        <Route path="/" element={<HomePage />}>
          <Route path="shifokorlar" element={<Shifokorlar />} />
          <Route path="xizmatlar" element={<Xizmarlar />} />
          <Route path="yonalish" element={<Yonalish />} />
        </Route>
        <Route path="interyuv" element={<Interyuv />} />
        <Route path="dolzarb" element={<Dolzarb />} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
