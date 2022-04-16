import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
