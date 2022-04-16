import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
