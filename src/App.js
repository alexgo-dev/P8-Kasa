import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home"
import Logement from './pages/logement/logement';
import About from "./pages/about/about"
import NotFound from './pages/notFound/notFound';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Footer/>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
