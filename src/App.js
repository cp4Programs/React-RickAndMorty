import './styles/App.css';
import { useEffect, useState } from 'react'
import Header from './Header'
import About from './About'
import CharacterDetails from './pages/CharacterDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([])


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <BrowserRouter >
      <Header />

      <Routes>
        <Route path="/Home" element={<HomePage characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
