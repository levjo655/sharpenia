

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collabs from './pages/Collabs';
import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='Home' element={<Home />} />
      <Route path='Collabs' element={<Collabs />} />
      <Route path='Gallery' element={<Gallery />} />
      <Route path='About' element={<About />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
