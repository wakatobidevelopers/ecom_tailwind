import './App.css';
import './index.css';
import Loyout from './components/Loyout';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:productName" element={ <Detail/> } />
    </Routes>
  );
}

export default App;
