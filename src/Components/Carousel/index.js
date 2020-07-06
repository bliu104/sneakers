import React from "react"
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({ image }) => {
  console.log(image)
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={image.length}
      infinite
    >
      <Slider>
        {image.map((images, index) => {
          return < Slide index={index} > {images} </Slide>
        }
        )
        }
      </Slider>
      < DotGroup />
    </CarouselProvider >

  )
}

export default Carousel