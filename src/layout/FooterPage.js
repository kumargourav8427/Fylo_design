import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
import footer_log from "../assets/images/fylo_footer_logo.PNG";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";

function FooterPage() {
  return (
    <div className="bg-light ">
      <section className="py-3 ">
        <Container >
          <Row className="d-flex fs-6">
            <Col className="">
              <img src={footer_log} alt="footer_logo" />
              <p>
                Foundation is a websites template for startups and small teams.
                ,it helps to build a website in.
              </p>
            </Col>

            <Col className="lh-lg text-md-center">
              <h6 className="fs-5">Services</h6>
              <div>
                <Link to="/">Link here</Link>
              </div>
              <div>
                <Link to="/about">Link here</Link>
              </div>
              <div>
                <Link to="/contact">Link here</Link>
              </div>
              <div>
                <Link to="/">Link here</Link>
              </div>
            </Col>

            <Col className="lh-lg">
              <h6 className="fs-5">Company</h6>
              <div>
                <p className="mb-1">About Foundation</p>
              </div>
              <div>
                <p className="mb-1">Brand Guildlines</p>
              </div>
              <div>
                <p className="mb-1">Press Kit</p>
              </div>
              <div>
                <p className="mb-1">Support</p>
              </div>
              <br />
            </Col>
            <Col className=""></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-3 ">
          <Row className=" fs-6 d-flex justify-content-between align-items-center mx-auto">
            <Col className="">
              <div className="d-flex gap-5 ">
                <div className="">Terms</div>
                <div className="">Privacy</div>
                <div className="">Services</div>
              </div>
            </Col>
            <Col className="d-flex gap-4 justify-content-center">
              <Link to="https://twitter.com/" target="/">
                <BsTwitter />
              </Link>
              <Link to="https://www.facebook.com/" target="/">
                <BsFacebook />
              </Link>
              <Link to="https://www.instagram.com/" target="/">
                <BsLinkedin />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default FooterPage;
