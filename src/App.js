import { HashRouter, Routes, Route } from 'react-router-dom';
import Presentation from './pages/presentation';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Presentation />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
