import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/home"
import Logement from './pages/logement/logement';
import About from "./pages/about/about"
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <div className="App">
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
