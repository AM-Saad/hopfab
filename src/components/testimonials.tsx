import React from "react";
import parse from "html-react-parser";
import SwiperCore, { A11y, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/pagination/pagination.min.css";

import testimonials from "../content/testimonials.json";
import RightArrowIcon from "./icons/right-arrow-icon";

SwiperCore.use([A11y, Navigation, Pagination]);

type DataProps = {
  className?: string;
};

const Testimonials: React.FC<DataProps> = ({ className }) => {
  return (
    <Swiper
      className={className}
      tag="section"
      slidesPerView={1}
      autoHeight={true}
      loop={true}
      a11y={{
        prevSlideMessage: "Diapositive précécente",
        nextSlideMessage: "Diapositive suivante",
        firstSlideMessage: "Ceci est la première diapositive",
        lastSlideMessage: "Ceci est la dernière diapositive",
        paginationBulletMessage: "Aller à la diapositive {{index}}",
        // TODO: containerMessage
        // TODO: containerRoleDescriptionMessage
        // TODO: itemRoleDescriptionMessage
      }}
      navigation={{
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        el: "#testimonials-pagination",
        type: "custom",
        renderCustom: (swiper, current, total) =>
          ` <div className="font-bold">
              ${testimonials[current - 1].name}
            </div>
            <div class="hidden md:block md:text-3xl lg:text-3.8xl xl:text-5.5xl">
              (<span>${current}</span>/<span>${total}</span>)
            </div>`,
      }}
    >
      <div
        slot="container-start"
        className="flex items-center border-b border-gris-800 py-4"
      >
        <div
          id="testimonials-pagination"
          className="flex items-center justify-between font-bold text-3.8xl lg:text-4.6xl xl:text-6.1xl w-full"
        ></div>
        <div className="flex items-center ml-4 mr-1">
          <div className="swiper-button-next rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
            <RightArrowIcon className="w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10" />
          </div>
        </div>
      </div>
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="font-serif text-2.5xl md:text-2.4xl lg:text-3xl xl:text-4.6xl md:leading-snug lg:leading-snug xl:leading-tight py-6">
            “{parse(testimonial.content ?? "")}”
          </div>
          <div className="text-sm md:text-xs lg:text-sm uppercase mt-4">
            <span className="font-bold">{testimonial.authorName}</span>
            <span className="whitespace-pre">, </span>
            {testimonial.authorFunction}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
