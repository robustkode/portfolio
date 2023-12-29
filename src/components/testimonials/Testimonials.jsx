import React from "react";
import "./testimonials.css";
import { RxAvatar } from "react-icons/rx";

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "",
    name: "Your name",
    review: "Booked for you!",
  },
];

// https://swiperjs.com/demos#pagination-dynamic

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testiomonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="coworker-avatar">
                <RxAvatar size={60} />
              </div>
              <h5 className="coworker__name">{name}</h5>
              <small className="coworker__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
