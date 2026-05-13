import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import MainSearchPage from "./pages/MainSearchPage"
import DetailInfo from "./components/DetailInfo"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/search" element={<MainSearchPage/>}/>
      <Route path="/detailInfo" element={<DetailInfo/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
