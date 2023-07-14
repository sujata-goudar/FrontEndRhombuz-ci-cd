import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import {
  CarouselBox,
  CarouselContainer,
  CarouselDotbox,
  Dots,
  SlideWrapper,
} from './index.sc';

const Carousel = ({
  slides,
  dotSize = '.5rem',
  dotBgColor = '#675ef2',
  dotBorder = '.0625rem solid #675ef2',
  backgroundColor = '#FFFFFF',
  handleClick = () => {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const handleClickdot = (event, index) => {
    const container = containerRef.current;
    if (index > currentSlide) {
      container.scrollLeft +=
        (index - currentSlide) * (container.clientWidth + 10);
    } else if (index < currentSlide) {
      container.scrollLeft -=
        (currentSlide - index) * (container.clientWidth + 10);
    }
    setCurrentSlide(index);
    event.stopPropagation();
  };

  return (
    <CarouselContainer
      style={{
        // width,
        // borderRadius,
        background: backgroundColor,
      }}
    >
      <CarouselBox
        onClick={handleClick}
        className="product-carousel"
        ref={containerRef}
      >
        {slides.map((slide, i) => (
          <SlideWrapper key={i}>{slide.component}</SlideWrapper>
        ))}
      </CarouselBox>
      <CarouselDotbox>
        {slides.map((_, index) => (
          <Dots
            style={{
              width: dotSize,
              border: dotBorder,
              backgroundColor:
                index === currentSlide ? dotBgColor : 'transparent',
              opacity: 1,
            }}
            key={index}
            onClick={(e) => handleClickdot(e, index)}
          ></Dots>
        ))}
      </CarouselDotbox>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  dotSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dotBorder: PropTypes.string,
  dotBgColor: PropTypes.string,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

export default Carousel;
