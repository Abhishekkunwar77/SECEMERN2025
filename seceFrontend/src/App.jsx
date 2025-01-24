import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/FunctionalComponents/Signup";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import UseEffect from "./components/FunctionalComponents/Hooks/useEffect";
import UseEffectApi from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/gallery"
          element={<Gallery page="Gallery" img="SECE Logo" />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/use-state" element={<UseState />}></Route>
        <Route path="/use-effect" element={<UseEffect />}></Route>
        <Route path="/use-api" element={<UseEffectApi />}></Route>
        <Route path="/use-ref" element={<UseRef />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/use-call" element={<UseCallback />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;