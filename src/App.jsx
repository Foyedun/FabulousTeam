import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home.jsx"
import Education from "./pages/Education"
import Medical from "./pages/Medical"
import WellBeing from "./pages/WellBeing"
import Kids from "./pages/Kids"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/education-donation" element={<Education/>} />
        <Route path="/medical-donation" element={<Medical/>} />
        <Route path="/kids-donation" element={<Kids/>} />
        <Route path="/wellbeing-donation" element={<WellBeing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
