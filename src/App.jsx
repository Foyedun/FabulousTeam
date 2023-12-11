import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Form from "./pages/Form.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Form/>} />
        <Route path="/register" element={<Form/>} />
        <Route path="/reset-password" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  )
}

export default App
