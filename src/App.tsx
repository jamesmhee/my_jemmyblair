import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { ThemeStore } from "./utils/context/ThemeStore"
import LayoutTheme from "./components/Layout"
import Aboutme from "./pages/Aboutme"
import Myproject from "./pages/Myproject"

function App() {
  return (
    <BrowserRouter>
      <ThemeStore>
        <LayoutTheme>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="aboutme" element={<Aboutme/>}/>
            <Route path="myproject" element={<Myproject/>}/>
          </Routes>
        </LayoutTheme>
      </ThemeStore>
    </BrowserRouter>
  )
}

export default App
