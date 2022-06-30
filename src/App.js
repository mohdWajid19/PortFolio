import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Layout';
import About from './components/Layout';
import Contact from './components/Layout';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
