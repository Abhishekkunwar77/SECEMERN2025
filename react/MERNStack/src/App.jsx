import ClassCompEg from "./components/Class components/ClassCompEG"
import About from "./components/Functional components/About"
import Home from "./components/Functional components/Home"
import Gallery from "./components/Functional components/Gallery"
import Contact from "./components/Functional components/Contact"
function App(){
  return(
    <div>
      <Home/>
      <About/>
      <ClassCompEg />
      <Home/><hr/>
      <About/><hr/>
      <ClassCompEg /><hr/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE LOGO" page="Gallery"/><hr/>
      <Contact/>
    </div>
  )
}