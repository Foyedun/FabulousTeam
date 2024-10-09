import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home.jsx"
import Form from "@/pages/Form.jsx"
import ForgotPassword from "@/pages/ForgotPassword.jsx"
import NotFound from "@/pages/NotFound.jsx"
import Education from "./pages/Education"
import Medical from "./pages/Medical"
import WellBeing from "./pages/WellBeing"
import Kids from "./pages/Kids"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/education-donation" element={<Education/>} />
        <Route path="/medical-donation" element={<Medical/>} />
        <Route path="/kids-donation" element={<Kids/>} />
        <Route path="/wellbeing-donation" element={<WellBeing/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
