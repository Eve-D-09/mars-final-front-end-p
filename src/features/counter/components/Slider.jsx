import React, { useState } from "react";
// import { imageData } from "../../../myData/imageData";

const Slider = ({ slides }) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
// console.log(slides);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="imageSliderContainer">
      <div>
        <button onClick={prevSlide}>prev</button>
        <p>How to show index of image? </p>
        <button onClick={nextSlide}>next</button>
      </div>
      <div className="imageSlider">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide active" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.imageUrl} alt={slide.title} />
                  <p>{slide.title}</p>
                  <p>{slide.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

// style={{ border: '2px solid black', width: '500px', height: '500px' }}
