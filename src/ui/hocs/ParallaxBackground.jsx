import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Container from 'react-bootstrap/Container';
import PropTypes from "prop-types";

function ParallaxBackground({ src }){
  return(
    <ParallaxBanner id="home" style={{ aspectRatio: '2 / 1', height:'100vh' }}>
      <ParallaxBannerLayer speed={-20} id="video-content">
        <video autoPlay muted loop>
          <source src={src} type="video/mp4"/>
        </video>
      </ParallaxBannerLayer>
    <ParallaxBannerLayer speed={0} id="banner-content">
        <Container fluid>
          <h1>GYZ Entertainment</h1>
          <h2 className="text-white">Where dreams take center stage</h2>
        </Container>
    </ParallaxBannerLayer>
    </ParallaxBanner>
  )
}

ParallaxBackground.propTypes = {
  src: PropTypes.string
}

export default ParallaxBackground;