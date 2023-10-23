import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Parallax} from "react-scroll-parallax";
import Image from "react-bootstrap/Image";
import Chairman from "../../assets/chairman.jpg";
import "./styles.css";

function About(){
  return (
    <Container fluid id="about">
      <h4 className="text-center">About Us</h4>
      <Parallax>
      <Row>
        <Col xs={12} md={3} className="image-section">
            <Image responsive src={Chairman} loading="lazy" roundedCircle thumbnail/>
        </Col>
        <Col xs={12} md={9} className="content-section">
          <div>
            <h5>Who We Are:</h5>
            <p>GYZ Entertainment is a cutting-edge talent agency with a passion for nurturing and propelling artists into the limelight. We are more than just agents; we are advocates, dedicated to championing the interests of our talent in the dynamic world of entertainment.</p>
            <h5>Our Journey:</h5>
            <p>Founded in 2023, GYZ Entertainment has quickly risen to prominence in the entertainment industry. Our journey is marked by a commitment to discovering and promoting exceptional talent, and we have had the privilege of representing some of the brightest stars in the business.</p>
            <h5>Our Vision:</h5>
            <p>
              We envision a world where artists have the opportunity to flourish, where creativity knows no bounds, and where dreams become reality. Our goal is to be at the forefront of transforming the entertainment landscape, one talent at a time.
            </p>
            <h5>Our Mission:</h5>
            <p>Our mission is simple yet powerful: we strive to provide a platform where artists can shine and fulfill their creative aspirations. At GYZ Entertainment, we believe in the transformative power of talent and creativity.</p>
          </div>

        </Col>
      </Row>
      </Parallax>
    </Container>
  )
}

export default About;