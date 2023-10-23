import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Parallax} from "react-scroll-parallax";
import PhotoAlbum from "react-photo-album";

import "./styles.css";
import photos from "../../data/artists.js";
import Row from "react-bootstrap/Row";

function Gallery(){
  const [key, setKey] = useState('artists');

  return (
    <Container fluid id="gallery">
      <h4 className="text-center">Talent</h4>
      <Parallax>
        <Row id="gallery-content-files">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-6"
          fill
        >
          <Tab eventKey="artists" title="Artists">
            <PhotoAlbum layout="masonry" photos={photos} />
          </Tab>
          <Tab eventKey="athletes" title="Athletes">
            Coming soon
          </Tab>
        </Tabs>
        </Row>
      </Parallax>
    </Container>
  )
}

export default Gallery;