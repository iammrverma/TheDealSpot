import React, { useRef, useState, useEffect } from "react";
import "./Section8.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Section8() {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const scrollSlider = (scrollOffset) => {
    sliderRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  const checkSliderButtons = () => {
    const sliderContainer = sliderRef.current;
    setShowLeftButton(sliderContainer.scrollLeft > 0);
    setShowRightButton(
      sliderContainer.scrollLeft <
        sliderContainer.scrollWidth - sliderContainer.clientWidth
    );
  };

  useEffect(() => {
    window.addEventListener("resize", checkSliderButtons);
    checkSliderButtons();

    return () => {
      window.removeEventListener("resize", checkSliderButtons);
    };
  }, []);

  const divs = [
    {
      id: 1,
      imageSrc: "assets/section8/image1.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      imageSrc: "assets/section8/image2.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      imageSrc: "assets/section8/image3.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      imageSrc: "assets/section8/image4.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 1,
      imageSrc: "assets/section8/image1.png",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      imageSrc: "assets/section8/image2.png",
      description: " Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <>
      <div className="Section8">
        <h1>
          Trending <span>Products</span>
        </h1>
        <hr />
        <button
          className={`SliderButtonLeft ${showLeftButton ? "" : "hidden"}`}
          onClick={() => scrollSlider(-350)}
        >
          <FaAngleLeft />
        </button>
        <div className="Section8Slider" ref={sliderRef}>
          <div className="SliderContainer">
            {divs.map((div) => (
              <div key={div.id} className="Section8Slide">
                <img src={process.env.PUBLIC_URL + div.imageSrc} alt="hey" />
                <p>{div.description}</p>
                <button>Know More</button>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`SliderButtonRight ${showRightButton ? "" : "hidden"}`}
          onClick={() => scrollSlider(350)}
        >
          <FaAngleRight />
        </button>
      </div>
    </>
  );
}

export default Section8;
