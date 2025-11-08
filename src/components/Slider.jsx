import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Slider() {
  const slides = [
    { id: 1, title: "Couple Showpices", img: "/assets/images/slide1.jpg" },
    { id: 2, title: "Soft Plush Toys", img: "/assets/images/slide2.jpg" },
    { id: 3, title: "Outdoor Fun", img: "/assets/images/slide3.jpg" },
  ];

  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-64 md:h-96 bg-cover bg-center flex items-center justify-center transition-transform duration-500 hover:scale-105"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="bg-black/40 p-6 md:p-10 rounded-lg text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
