import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home.jsx"
import Education from "./pages/Education"
import Medical from "./pages/Medical"
import WellBeing from "./pages/WellBeing"
import Kids from "./pages/Kids"
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs"



function App() {

  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/education-donation" element={<Education />} />
        <Route path="/medical-donation" element={<Medical />} />
        <Route path="/kids-donation" element={<Kids />} />
        <Route path="/wellbeing-donation" element={<WellBeing />} />
      </Routes>
  
  );
}

export default App
