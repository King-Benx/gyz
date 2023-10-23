import NavBar from "./ui/atoms/NavBar.jsx";
import Background1 from "./assets/background.mp4";
import ParallaxBackground from "./ui/hocs/ParallaxBackground.jsx";
import { ParallaxProvider } from 'react-scroll-parallax';
import About from "./ui/sections/About.jsx";
import Services from "./ui/sections/Services.jsx";
import Gallery from "./ui/sections/Gallery.jsx";
import ParallaxSection from "./ui/sections/ParallaxSection.jsx";
import Footer from "./ui/sections/Footer.jsx";

function App() {

  return (
    <ParallaxProvider>
    <NavBar/>
    <ParallaxBackground src={Background1}/>
    <About/>
    <Services/>
    <Gallery/>
    <ParallaxSection/>
      <Footer/>
    </ParallaxProvider>
  )
}

export default App;
