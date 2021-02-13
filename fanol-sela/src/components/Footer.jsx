import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

function footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Fanol Sela
          </Col>
            <a
              href="https://www.instagram.com/fanolsela/"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://github.com/FanolSela"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
              href="https://www.linkedin.com/in/fanol-sela-7089a3191/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            Made by Fanol Sela
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default footer;