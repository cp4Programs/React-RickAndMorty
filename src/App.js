import './styles/App.css';
import { useEffect, useState } from 'react'
import Header from './Header'
import About from './About'
import CharacterDetails from './pages/CharacterDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import axios from 'axios';
import UserContextProvider from './contexts/UserContext';
import ThemeContextProvider from './contexts/ThemeContext';

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
      <UserContextProvider>
        <ThemeContextProvider>
          <Header />
          <Routes>
            <Route path="/Home" element={<HomePage characters={characters} setCharacters={setCharacters} />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:characterId" element={<CharacterDetails />} />
          </Routes>
        </ThemeContextProvider>
      </UserContextProvider>
    </BrowserRouter >
  );
}

export default App;
