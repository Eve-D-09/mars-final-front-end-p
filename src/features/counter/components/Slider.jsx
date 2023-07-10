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

 

  // -----------------------------------------------------------
  // //  give id for each slide?
  // slides.forEach((element, index) => {
  //   element.id = index + Math.random();
  // });

  // -----------------------------------------------------------
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
      <ClickFavorite id={slides[currentSlide].id} liked={slides[currentSlide].liked}/>
      <div className="sliderButtons">
        <button onClick={prevSlide}>
          <img src={ArrowLeft} alt="arrow-left" />
        </button>
        <p> ({index + 1} of {slides.length}) </p>
        <button onClick={nextSlide}>
          <img src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
      <div className="imageSlider">
        {slides.map((slide, index) => {
          return (
            <>
              {index === currentSlide && (
                <div>
                  <img src={slide.imageUrl} alt={slide.title} />
                  <p>{slide.title}</p>
                  <p>{slide.description}</p>
                 
                </div>
                
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
