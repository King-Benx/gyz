import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import {Parallax} from "react-scroll-parallax";
import Management from "../../assets/management.jpg";
import Negotiation from "../../assets/negotiation.jpg";
import Publicity from "../../assets/publicity.jpg";
import Training from "../../assets/training.jpg";

import "./styles.css";

function Services(){
  return (
    <Container fluid id="services">
      <h4 className="text-center">Services</h4>
      <Parallax>
        <Row>
          <Col className="card-col">
            <Card style={{ width: '18rem',  height: '32rem' }}>
              <Card.Img variant="top" src={Management} />
              <Card.Body>
                <Card.Title>Talent Management</Card.Title>
                <Card.Text>
                  We specialize in managing artists, offering them comprehensive support, guidance, and advocacy to ensure their success in the competitive entertainment landscape.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-col">
            <Card style={{ width: '18rem',  height: '32rem' }}>
              <Card.Img variant="top" src={Negotiation} />
              <Card.Body>
                <Card.Title>Deal Negotiation</Card.Title>
                <Card.Text>
                  Our experienced team excels in finding opportunities and skillfully negotiating deals on behalf of our artists, ensuring they secure the best contracts and projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-col">
            <Card style={{ width: '18rem',  height: '32rem' }}>
              <Card.Img variant="top" src={Publicity} />
              <Card.Body>
                <Card.Title>Publicity and Marketing</Card.Title>
                <Card.Text>
                  We are dedicated to enhancing the visibility and recognition of our artists. Our marketing and publicity experts create a buzz and ensure our talent is celebrated by the public.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="card-col">
            <Card style={{  width: '18rem',  height: '32rem' }}>
              <Card.Img variant="top" src={Training} />
              <Card.Body>
                <Card.Title>Training and Development</Card.Title>
                <Card.Text>
                  Beyond talent management, GYZ Entertainment is committed to shaping the future of the industry. We are in the process of developing a comprehensive talent training program to prepare aspiring artists for the rigors of the business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Parallax>
    </Container>
  )
}

export default Services;