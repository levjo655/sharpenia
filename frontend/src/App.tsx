import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collabs from './pages/Collabs';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Sharpening from './pages/Sharpening';
import Contact from './pages/Contact';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/home" element={<Home />} />
        <Route path="/collabs" element={<Collabs />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/sharpening" element={<Sharpening />} />
        <Route path="/Contact" element={<Contact />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
