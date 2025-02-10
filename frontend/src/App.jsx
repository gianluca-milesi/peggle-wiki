import axios from "axios"
//React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Contexts
import GlobalContext from "./contexts/GlobalContext.js"
//Hooks
import { useEffect, useState } from "react"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout"
import BlankLayout from "./layouts/BlankLayout"
//Pages
import NotFoundPage from "./pages/NotFoundPage.jsx"
import HomePage from "./pages/HomePage"
import CharactersPage from "./pages/CharactersPage.jsx"
import DetailCharacterPage from "./pages/DetailCharacterPage.jsx"


function App() {

  const [characters, setCharacters] = useState([])

  function fetchCharacters() {
    axios.get("http://localhost:3000/api/characters")
      .then((res) => {
        setCharacters(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchCharacters()
  }, [])


  return (
    <GlobalContext.Provider value={{ characters, setCharacters }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/:id" element={<DetailCharacterPage />} />
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App