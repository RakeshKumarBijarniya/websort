import React, { useState } from "react";

import "./style/about.css";
import ImageCarousel from "../comman_component/ImageCrousel";

const About = () => {
  const [image, setImage] = useState(0);

  const images = [
    "/assets/web_dev.jpg",
    "/assets/app_dev.jpg",
    "/assets/digital_market.jpg",
  ];
  const name = ["Web Developement", "App Development", "Digital Marketing"];
  const changeImage = (value) => {
    if (value === "increment") {
      setImage((prev) => (prev + 1) % 3);
    } else if (value === "decrement") {
      setImage((prev) => (prev - 1 + 3) % 3);
    }
  };
  return (
    <div>
      <div className="topContainer ">
        <div className="container p-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div>
                <h1 className="text-white">
                  Digitizing Ideas with Clean Code & Modern Design
                </h1>
                <p className="text-white">
                  At Websort, we turn digital visions into reality with expert
                  web and app development, UI/UX design, and digital marketing.
                  Based in Bangalore, we craft responsive websites, innovative
                  mobile apps, and drive results through SEO, PPC, and social
                  media strategies.
                </p>
                <div>
                  <button className="btn btn-outline-light me-2">
                    Contact Us
                  </button>
                  <button className="btn btn-outline-light ">Know More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-2"
          style={{ backgroundColor: "#99A1D752", opacity: "0.8" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 mt-5 ">
                <h6 className="text-white">About Us</h6>
                <h6 className="text-white">Where Innovation Meets Execution</h6>
              </div>
              <div className="col-12 col-lg-8">
                <p className="text-white">
                  Websort builds websites, apps, and digital marketing solutions
                  to help you grow online. Based in Bangalore, we focus on smart
                  design, strong tech, and real results.We specialize in web
                  development, mobile app development, UI/UX design, and digital
                  marketing—delivering responsive websites, high-performance
                  Android/iOS apps, and visually engaging interfaces. Our
                  digital marketing expertise spans SEO, PPC, social media
                  marketing, and content creation, helping businesses grow and
                  connect with their ideal audience.
                </p>
                <button className="btn btn-outline-light ">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourProjectContainer d-flex flex-column align-items-center justify-content-center p-4">
        <div className="ourProjectSection">
          <h2 className="text-white text-center">Our Project</h2>
        </div>
        <div className="imageCarouselWrapper">
          <ImageCarousel />
        </div>
      </div>
      <div className="midContainer d-flex flex-column justify-content-center align-items-center">
        <h3
          className="text-white"
          style={{ position: "absolute", top: "30px" }}
        >
          Fueling the Future with Innovation
        </h3>
        <div className="ailotContainer d-flex justify-content-center align-items-center">
          <h3 className="text-white" style={{ zIndex: 1 }}>
            AI and IoT-driven products
          </h3>
          <div className="imageAi" style={{ position: "absolute" }}>
            <img
              src="/assets/ai_loot_image.png"
              alt="ai_lot"
              style={{ width: "350px", opacity: "0.7", zIndex: 0 }}
            />
          </div>
        </div>
        <div
          className="arrowContainer"
          style={{ position: "relative", top: "80px", gap: "40px" }}
        >
          <img
            src="/assets/arrowR.png"
            alt="arrow"
            style={{ width: "30px", marginLeft: "40px" }}
          />
          <img
            src="/assets/arrowW.png"
            alt="arrow"
            style={{ width: "25px", marginLeft: "40px" }}
          />
          <img
            src="/assets/arrowW.png"
            alt="arrow"
            style={{ width: "25px", marginLeft: "40px" }}
          />
        </div>
      </div>
      <div className="workContainer">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="text-white">
                See Our Work in Web Design & Development
              </h2>
              <p className="text-white">
                We specialize in building responsive, user-friendly websites
                tailored to client needs. Take a look at our recent projects to
                see how design and functionality come together.
              </p>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center mt-4 mt-lg-0">
              <img
                src="/assets/laptopImage.png"
                alt="laptopImage"
                style={{ width: "300px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="standContainer">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <h2 className="text-white">
                See Our Work in Web Design & Development
              </h2>
              <p className="text-white">
                We specialize in building responsive, user-friendly websites
                tailored to client needs. Take a look at our recent projects to
                see how design and functionality come together.
              </p>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center mt-4 mt-lg-0">
              <img
                src="/assets/blubImage.png"
                alt="laptopImage"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="productContainer">
        <h2 className="text-white text-center">
          One of our proudest achievements.
        </h2>
        <p className="text-white text-center">
          A standout from our portfolio, this project exemplifies the quality,
          creativity, and performance we bring to every solution. It's a true
          reflection of our commitment to excellence.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-none d-lg-block">
              <div>
                <img
                  src="/assets/web_dev.jpg"
                  alt="laptopImage"
                  style={{ width: "300px", height: "250px" }}
                />
              </div>
              <h2 className="text-white">Web Development</h2>
              <button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  border: "none",
                }}
              >
                Explore More
              </button>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div>
                <img
                  src="/assets/app_dev.jpg"
                  alt="laptopImage"
                  style={{ width: "300px", height: "250px" }}
                />
              </div>
              <h2 className="text-white">App Development</h2>
              <button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  border: "none",
                }}
              >
                Explore More
              </button>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div>
                <img
                  src="/assets/digital_market.jpg"
                  alt="laptopImage"
                  style={{ width: "300px", height: "250px" }}
                />
              </div>
              <h2 className="text-white">Digital marketing</h2>
              <button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  border: "none",
                }}
              >
                Explore More
              </button>
            </div>
            <div className="d-sm-block d-lg-none d-flex flex-column align-items-center">
              <div>
                <img
                  src={images[image]}
                  alt="images"
                  style={{ width: "270px", height: "200px" }}
                />
                <h2 className="text-white">{name[image]}</h2>
              </div>
              <button
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                Explore More
              </button>
              <div className="d-flex justify-content-between">
                <div onClick={() => changeImage("increment")}>
                  <img
                    src="/assets/left_arrow.png"
                    alt="arrowImage"
                    style={{ width: "40px" }}
                  />
                </div>
                <div onClick={() => changeImage("decrement")}>
                  <img
                    src="/assets/right_arrow.png"
                    style={{ width: "40px" }}
                    alt="arrowImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="questionContainer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex align-items-center">
              <h2 className="text-white text-center">
                Questions? We're here to answer them!
              </h2>
            </div>
            <div className="col-12 col-lg-8">
              <div
                className="container my-5 p-4 rounded"
                style={{ backgroundColor: "#D9D4EF3D", opacity: 0.8 }}
              >
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control input-underline"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-underline"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control input-underline"
                      placeholder="Enter your number"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      rows="4"
                      className="form-control input-underline"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContainer d-flex  flex-column align-items-center p-5 justify-content-center">
        <h3 className="text-white">See what opportunities await you</h3>
        <button
          className="text-white"
          style={{
            backgroundColor: "#9037C3",
            border: "none",
            borderRadius: "15px",
            padding: "5px 20px",
          }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
