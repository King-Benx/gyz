import Container from "react-bootstrap/Container";
import "./styles.css";
import Row from "react-bootstrap/Row";
import {SocialIcon} from "react-social-icons";
function Footer(){
  return (
    <Container fluid id="footer">
      <Row className="social">
        <SocialIcon url="https://instagram.com/gyz_ent_official_?igshid=MmU2YjMzNjRlOQ=="/>&nbsp;
        <SocialIcon url="mailto:infogyzentertainment@gmail.com" />
      </Row>
      <Row>
          <small>copyright@gyz2023</small>
      </Row>
    </Container>
  )
}

export default Footer;