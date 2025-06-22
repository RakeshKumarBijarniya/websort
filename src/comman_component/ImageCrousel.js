import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const images = [
  "/assets/project-1.jpg",
  "/assets/project-2.jpg",
  "/assets/project-3.jpg",
  "/assets/project-4.jpg",
];
const projectName = [
  "Web Development",
  "UI/Ux Developement",
  "UI/Ux Developement",
  "App Development",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    const leftIndex = (activeIndex - 1 + images.length) % images.length;
    const rightIndex = (activeIndex + 1) % images.length;

    if (index === activeIndex) return "carousel-img center";
    if (index === leftIndex) return "carousel-img left";
    if (index === rightIndex) return "carousel-img right";
    return "carousel-img hidden";
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {images.map((img, index) => (
          <div
            className={getPositionClass(index)}
            style={{ gap: "30px" }}
            key={index}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={img}
                alt={`slide-${index}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h2 className="text-white text-center">{projectName[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
