import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/HomePage/Home"
import { Class } from "./pages/Class" 
import { Community } from "./pages/Community" 
import { MyPage } from "./pages/MyPage"
import {Navbars } from "./components/Navbar/Navbars" 

function App() {

  return (
    <>
      <Navbars />
      {/* <Container className="mb-4">
        
      </Container> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class" element={<Class />} />
          <Route path="/community" element={<Community />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </>
  )
}

export default App
