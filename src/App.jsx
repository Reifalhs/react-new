import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"


function App() {

  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/projects" Component={Projects}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
    </div>
  )
}

export default App
