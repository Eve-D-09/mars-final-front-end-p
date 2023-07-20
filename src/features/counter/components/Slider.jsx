import React, { useState } from "react";
import ArrowRight from "../../../img/svg/arrow-right-sm-svgrepo-com.svg";
import ArrowLeft from "../../../img/svg/arrow-left-sm-svgrepo-com.svg";
import ClickFavorite from "./ClickFavorite";
import { useSelector } from "react-redux";
import { selectSlides } from "../planetSlice";

const Slider = () => {
  const slides = useSelector(selectSlides);

  const [index, setIndex] = useState(0);
  const nextImage = index < slides.length - 1;

  const [currentSlide, setCurrentSlide] = useState(0);

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
     
      <div className="sliderButtons">
        <button onClick={prevSlide}> <img src={ArrowLeft} alt="arrow-left" /> </button>
        <button onClick={nextSlide}> <img src={ArrowRight} alt="arrow-right" /> </button>
      </div>
      
      {slides.map((slide, index) => {
        return (
          <>
            {index === currentSlide && (
              <div className="slide">
                <p>{index + 1} | {slides.length}</p>
                <div className="slideImage">
                  <img src={slide.imageUrl} alt={slide.title} />
                </div>
                <div className="imageDescription">
                  <div className="imageTitle">
                    <ClickFavorite id={slides[currentSlide].id} liked={slides[currentSlide].liked} />
                    <h3>{slide.title}</h3>
                  </div>
                  <p>{slide.description}</p>
                </div>
              </div>
            )}
          </>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default Slider;
