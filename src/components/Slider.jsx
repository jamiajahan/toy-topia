import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const slides = [
  "https://i.postimg.cc/9FjD5Fq2/slider1.jpg",
  "https://i.postimg.cc/6Q9Jf2G5/slider2.jpg",
  "https://i.postimg.cc/T3gkK2Z5/slider3.jpg",
];

export default function Slider() {
  return (
    <div className="max-w-6xl mx-auto my-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl shadow-lg"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-64 md:h-96 object-cover rounded-xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
