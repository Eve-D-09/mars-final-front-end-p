import React, { useState } from "react";
// import { imageData } from "../../../myData/imageData";

const Slider = ({ slides }) => {
  const [ index, setIndex ] = useState(0);
  const nextImage = index < slides.length -1;
  
  const [currentSlide, setCurrentSlide] = useState(0);
// console.log(slides);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    if ( nextImage ) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  

  return (
    <div className="imageSliderContainer">
      <div>
        <button onClick={prevSlide}>prev</button>
        <p> ({index + 1} of {slides.length}) </p>
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
