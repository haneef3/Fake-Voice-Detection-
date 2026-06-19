import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-creator">
          <div>Pratik - Mayank</div>
          <div>arjun - Haneef</div>
        </Col>
        <Col className="footer-copywright">
          <div>Copyright © {year} FoiceDetect</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
