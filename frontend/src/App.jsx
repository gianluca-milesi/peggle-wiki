//React router dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Layouts
import DefaultLayout from "./layouts/DefaultLayout"
import BlankLayout from "./layouts/BlankLayout"
//Pages
import NotFoundPage from "./pages/NotFoundPage.jsx"
import HomePage from "./pages/HomePage"
import SearchCharacterPage from "./pages/SearchCharacterPage.jsx"
import DetailCharacterPage from "./pages/DetailCharacterPage.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchCharacterPage />} />
          <Route path="/:id" element={<DetailCharacterPage />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App