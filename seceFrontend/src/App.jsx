import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    
      <Navbar/>
      <section>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery page="Gallery" img="SECE Logo" />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <ClassCompEG />
      
    
    </section>
    </BrowserRouter>

  );
}

export default App;