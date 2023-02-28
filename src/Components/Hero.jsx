import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const hero = [
    {
      id: 1,
      img: "../../hero/hero-3second.jpg",
    },
    {
      id: 2,
      img: "../../hero/hero-famo.jpg",
    },
    {
      id: 3,
      img: "../../hero/hero-moutley.jpg",
    },
  ];
  return (
    <div className="">
      <Swiper
        rewind={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {hero.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
