import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/FunctionalComponents/Home.jsx'
import About from './components/FunctionalComponents/About.jsx'
import ClassComponent from './components/classComponents/ClassCompEG.jsx'
import Gallery from './components/FunctionalComponents/Gallery.jsx'
import Contact from './components/FunctionalComponents/Contact.jsx'
import Navbar from './components/FunctionalComponents/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './components/FunctionalComponents/Signup.jsx'
import Usestate from './components/FunctionalComponents/Hooks/UseState.jsx'
import UseEffect from './components/FunctionalComponents/Hooks/useEffect.jsx'
import UseEffectApi from './components/FunctionalComponents/Hooks/UseEffectAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Navbar/>
<Routes>
    <Route path="/" element={<Signup/>}></Route>  
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/usestate"  element={<Usestate/>}></Route>
    <Route path="/use-effect"  element={<UseEffect/>}></Route>
    <Route path="/use-effect-api"  element={<UseEffectApi/>}></Route>
 </Routes>

    </BrowserRouter>
  </StrictMode>
)