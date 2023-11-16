import React from "react";
import "./navbar.css";
import { Form, NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import fylo from "../assets/images/fly_logo.PNG"
import { MdOutlineLanguage } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { GrFormSearch } from "react-icons/gr";
import person_img from "../assets/images/person.jpg";

function NavbarPage() {
  return (
    <Container>
      <Navbar expand="lg" className="d-flex justify-content-center align-items-center">
        <NavLink to="/" className="margin_bottom">
        <NavbarBrand >
          <img src={fylo} alt="logo"/>
        </NavbarBrand>

        </NavLink>
        
        <Form className="d-flex position-relative">
          <Form.Control
            type="search"
            placeholder="Search for anything"
            className="searchwidth rounded-5 "
            aria-label="Search"
          />
          <span>
            <GrFormSearch className="serach_icon " />
          </span>
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" className="my-2"/>

        <Navbar.Collapse id="navbarScroll" className="">
          <Nav
            className="mx-auto d-flex gap-4 flex-wrap font_style max_height "
            
            navbarScroll
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>

            <NavLink>
              <MdOutlineLanguage className="mx-2 fs-5"/>
              English
            </NavLink>

            <NavLink className="p-0 m-0">
              <span>
                <TiMail className="fs-3"/>
              </span>
              <span className="mx-4">
                <AiOutlineHeart className="fs-4"/>
              </span>
              <span>
                <BsHandbag className="fs-5"/>
              </span>

            </NavLink>

            <NavLink className="d-flex person_image">
              Kohli
              <img
                src={person_img}
                className="mx-3"
                alt="person_image"
              />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarPage;
