import React, { useState } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import SwiperCore, { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/a11y/a11y.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([A11y, Pagination]);

export interface Slide {
  image: IGatsbyImageData;
  alt: string | null;
}

type DataProps = {
  slides: Slide[];
};

const ProjectPhotos: React.FC<DataProps> = ({ slides }) => {
  const [swiper, setSwiper] = useState(null);
  const [displayInformation, setDisplayInformation] = useState(true);

  const updateSwiper = () => {
    if (swiper) {
      swiper.update();
    }
  };

  return (
    <div className="border-b border-gris-800">
      <div className="relative">
        <Swiper
          tag="section"
          onSwiper={setSwiper}
          slidesPerView={1.2}
          spaceBetween={50}
          centeredSlidesBounds={true}
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
          grabCursor={true}
          pagination={{
            el: "#project-photos-pagination",
            type: "fraction",
            clickable: false,
          }}
          onSliderFirstMove={() => setDisplayInformation(false)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* onLoad hack to make sure swiper is correctly loaded */}
              {slide.image && (
                <GatsbyImage
                  image={slide.image}
                  alt={slide.alt}
                  onLoad={() => updateSwiper()}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {displayInformation && (
          <div
            onClick={() => setDisplayInformation(false)}
            className="select-none hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-brown-700 text-brown-50 font-bold text-xs uppercase text-center z-10"
          >
            Faites glisser
            <br /> l'image
            <br /> vers la gauche
          </div>
        )}
      </div>
      <div
        id="project-photos-pagination"
        className="uppercase text-xs font-bold py-4 text-right"
      ></div>
    </div>
  );
};

export default ProjectPhotos;
