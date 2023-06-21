import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './Carousel.css';

const Carousel = ({ slides, width, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  const handleLeftClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightClick = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightClick();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="Carousel" style={{ width: width, height: height }}>
      <div className="container">
        <div className="leftArrow" onClick={handleLeftClick}><FaAngleLeft /></div>
        <div className="slides" style={slideStyles}></div>
        <div className="rightArrow" onClick={handleRightClick}><FaAngleRight /></div>

        <div className="dots">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
