import React from "react"
import Carousel from "."

export default {
  title: 'Carousel',
  component: Carousel,
}

const img = ["hello", "butts", "poop"]

export const CarouselSB = () => {
  return (
    <Carousel image={img} />

  )
}