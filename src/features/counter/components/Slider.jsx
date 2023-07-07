import React, { useState } from "react";
import Heart from "../../../img/svg/heart-like-svgrepo-com.svg";
import ArrowRight from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import ArrowLeft from "../../../img/svg/arrow-left-sm-svgrepo-com.svg";

// import { imageData } from "../../../myData/imageData";

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const nextImage = index < slides.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(slides);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    if (nextImage) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1);
    }
  };

  return (
    <div className="imageSliderContainer">
      <div>
        <button onClick={prevSlide}><img src={ArrowLeft} alt="arrow-left" /></button>
        <p> ({index + 1} of {slides.length}) </p>
        <button onClick={nextSlide}><img src={ArrowRight} alt="arrow-right" /></button>
      </div>
      <div className="imageSlider">
        {slides.map((slide, index) => {
          return (
            <div>
              {index === currentSlide && (
                <div>
                  <img src={slide.imageUrl} alt={slide.title} />
                  <p>{slide.title}</p>
                  <p>{slide.description}</p>
                  <button> <img src={Heart} alt="heart-icon" /> </button>
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



//  buttons prev, next