import React from "react";
import "./home.css";
import { Container, Row, Col } from "react-bootstrap";
import entertainment from "../../assets/images/entertenment.jpg";
import catering from "../../assets/images/catering.jpg";
import banner from "../../assets/images/banner_index-1.PNG";
import equipments from "../../assets/images/equipments.jpg";
import decor from "../../assets/images/decor.jpg";
import staff from "../../assets/images/staff.jpg";
import venue from "../../assets/images/venue.jpg";
import { FiArrowRight } from "react-icons/fi";
import offers_img from "../../assets/images/offers_img.PNG";
import gazbo from "../../assets/images/gazboo_400.PNG";
import cook from "../../assets/images/cook_400.PNG";
import kids_birthday from "../../assets/images/kids_birthay.jpg";
import marriage_decoration from "../../assets/images/marriage_decoration.jpg";
import reception from "../../assets/images/reception.jpg";
import food_stall from "../../assets/images/food_stall.jpg";
import lights from "../../assets/images/lights.jpg";
import flower_dec from "../../assets/images/flower_dec.jpg";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import String from "../constant/String";
import poping_party from "../../assets//images/poping_party.jpg";
import table from "../../assets/images/table.PNG";
import sandwich from "../../assets/images/sandwich.PNG";
import dj from "../../assets/images/Dj.PNG";
import food from "../../assets/images/food.PNG";
import drinks from "../../assets/images/drinks.PNG";
function Home() {
  return (
    <>
      <section className=" bg-light">
        <Container className="py-4">
          <Row className="text-center">
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={entertainment} alt="" />
              </div>
              <div className="">
                <span>{String.entr}</span>
              </div>
            </Col>
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={catering} alt="" />
              </div>
              <div className="">
                <span>{String.catr}</span>
              </div>
            </Col>
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={equipments} alt="" />
              </div>
              <div className="mb-2">
                <span>{String.Equipments}</span>
              </div>
            </Col>
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={decor} alt="" />
              </div>
              <div className="">
                <span>{String.Decor}</span>
              </div>
            </Col>
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={staff} alt="" />
              </div>
              <div className="">
                <span>{String.Staff}</span>
              </div>
            </Col>
            <Col className="border_radius_50">
              <div className="mb-2">
                <img src={venue} alt="" />
              </div>
              <div className="">
                <span>{String.Venue}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4">
        <Container className="mx-auto">
          <figure>
            <img src={banner} alt="banner1" width="100%" />
          </figure>
        </Container>
      </section>

      <section className=" ">
        <Container>
          <Row className="">
            <Col md={12} className="mb-2 text-center justify-content-center ">
              <div className="d-flex justify-content-between py-2">
                <h4 className="text-bold">
                  Deals of the Day
                  <span className="mx-2">
                    <FiArrowRight />
                  </span>
                </h4>
                <h6 className="">Shop all</h6>
              </div>
            </Col>

            <Container className="py-1">
              <Row className="text-center justify-content-center border_radius_10  ">
                <Col className="d-flex flex-column">
                  <div className="mb-2">
                    <img
                      src={kids_birthday}
                      alt=""
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Kids special bithday</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img
                      src={marriage_decoration}
                      alt=""
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Marriage decoration</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img src={reception} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Marriage reception</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img src={food_stall} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Food stall</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-2">
                    <img src={lights} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Lights</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-2">
                    <img src={flower_dec} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Flower decoration</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </section>

      <section className=" ">
        <Container>
          <Row>
            <Col
              md={12}
              className="mb-2 text-center justify-content-center py-2"
            >
              <div className="d-flex justify-content-between ">
                <h4 className="text-bold ">
                  Popular Vendors
                  <span className="mx-2">
                    <FiArrowRight />
                  </span>
                </h4>
                <h6 className="">Shop all</h6>
              </div>
            </Col>
            <Container className="py-1">
              <Row className="text-center justify-content-center border_radius_10  ">
                <Col className="d-flex flex-column">
                  <div className="mb-2">
                    <img
                      src={kids_birthday}
                      alt=""
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Kids special bithday</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img
                      src={marriage_decoration}
                      alt=""
                      height="150px"
                      width="150px"
                    />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Marriage decoration</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img src={reception} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Marriage reception</span>
                  </div>
                </Col>
                <Col className="">
                  <div className="mb-2">
                    <img src={food_stall} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Food stall</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-2">
                    <img src={lights} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Lights</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-2">
                    <img src={flower_dec} alt="" height="150px" width="150px" />
                  </div>
                  <div className="">
                    <p className="text-grey m-0">Upto 40% off</p>
                    <span>Flower decoration</span>
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </section>

      <section className=" ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-2 text-center">
              <div className="d-flex justify-content-between py-3">
                <h4 className="text-bold">
                  Offers
                  <span>
                    <FiArrowRight />
                  </span>
                </h4>
                <h6>View all</h6>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-7">
              <div className="card shadow kids_birthday_h">
                <img src={offers_img} alt="kids_birthday" height="420px" />
              </div>
            </div>
            <div className="col-md-5 padding_top">
              <div className="row d-flex flex-column">
                <div className="col-md-12">
                  <div className="card shadow">
                    <img src={gazbo} alt="kids_birthday" height="200px" />
                  </div>
                </div>

                <div className="col-md-12 py-3">
                  <div className="card shadow">
                    <img src={cook} alt="kids_birthday" height="200px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <Container>
          <Row>
            <Col md={12} className="mb-2 text-center justify-content-center">
              <div className="d-flex justify-content-between py-3">
                <h4 className="text-bold">
                  Popular Services
                  <span>
                    <FiArrowRight />
                  </span>
                </h4>
                <h6 className="">Shop all</h6>
              </div>
            </Col>
            <Container >
              <Row className="mb-3 ">
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img src={table} alt="" height="240px" width="200px" />
                  </div>
                  <div className="">
                    <p className="mb-1 font">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img src={sandwich} alt="" height="240px" width="200px" />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={dj}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>

                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={food}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={drinks}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="mb-3 ">
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img src={table} alt="" height="240px" width="200px" />
                  </div>
                  <div className="">
                    <p className="mb-1 font">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img src={sandwich} alt="" height="240px" width="200px" />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={dj}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>

                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={food}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
                <Col className="d-flex flex-column align-items-center mb-3">
                  <p className="border_radius_20">
                    <img
                      src={poping_party}
                      alt=""
                      height="25px"
                      width="25px"
                    />
                    <span className="mx-2">Poping party group</span>
                  </p>
                  <div className="mb-1 border_radius_10">
                    <img
                      src={drinks}
                      alt=""
                      height="240px"
                      width="200px"
                    />
                  </div>
                  <div className="">
                    <p className="mb-1">100 Table$ Chairs</p>
                    <p className="mb-1 ">
                      <span className="text-warning">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarOutline />
                      </span>
                      <span> 4 (190 review)</span>
                    </p>
                    <span className="fs-5 text_bold">$70</span>
                  </div>
                </Col>
              </Row>
            </Container>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
