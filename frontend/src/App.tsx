import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Collabs from './pages/Collabs';
import Gallery from './pages/Gallery';
import About from './pages/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/home" element={<Home />} />
        <Route path="/collabs" element={<Collabs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
