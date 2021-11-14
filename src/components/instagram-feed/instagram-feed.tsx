import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SwiperCore, { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../../instagram-swiper.css";

SwiperCore.use([A11y, Pagination]);

export interface Slide {
  image: any;
  alt: string | null;
}

type DataProps = {
  slides: Slide[];
};

const InstagramFeed: React.FC<DataProps> = ({ slides }) => {
  const [swiper, setSwiper] = useState(null);

  const updateSwiper = () => {
    if (swiper) {
      swiper.update();
    }
  };

  return (
      <div className="overflow-hidden">

      <Swiper
        tag="div"
        className="instagram-swiper-container"
        onSwiper={setSwiper}
        slidesPerView={"auto"}
        centeredSlides={false}
        centeredSlidesBounds={false}
        allowSlidePrev={false}
        allowSlideNext={false}
        allowTouchMove={false}
        spaceBetween={34}
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
          >
             
              {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`instagram-swiper-slide ${
              index === 0 ? "lg:ml-2" : ""
            }`}
                  >

            {/* onLoad hack to make sure swiper is correctly loaded */}
            {getImage(slide.image) && (
              <GatsbyImage
                image={getImage(slide.image)}
                alt={slide.alt}
                onLoad={() => updateSwiper()}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramFeed;
