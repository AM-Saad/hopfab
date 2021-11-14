"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gatsby_plugin_image_1 = require("gatsby-plugin-image");
const swiper_1 = require("swiper");
const react_2 = require("swiper/react");
require("swiper/swiper.min.css");
require("swiper/components/a11y/a11y.min.css");
require("swiper/components/pagination/pagination.min.css");
require("../../instagram-swiper.css");
swiper_1.default.use([swiper_1.A11y, swiper_1.Pagination]);
const InstagramFeed = ({ slides }) => {
    const [swiper, setSwiper] = react_1.useState(null);
    const updateSwiper = () => {
        if (swiper) {
            swiper.update();
        }
    };
    return (<div className="overflow-hidden">

      <react_2.Swiper tag="div" className="instagram-swiper-container" onSwiper={setSwiper} slidesPerView={"auto"} centeredSlides={false} centeredSlidesBounds={false} allowSlidePrev={false} allowSlideNext={false} allowTouchMove={false} spaceBetween={34} a11y={{
            prevSlideMessage: "Diapositive précécente",
            nextSlideMessage: "Diapositive suivante",
            firstSlideMessage: "Ceci est la première diapositive",
            lastSlideMessage: "Ceci est la dernière diapositive",
            paginationBulletMessage: "Aller à la diapositive {{index}}",
            // TODO: containerMessage
            // TODO: containerRoleDescriptionMessage
            // TODO: itemRoleDescriptionMessage
        }}>
             
              {slides.map((slide, index) => (<react_2.SwiperSlide key={index} className={`instagram-swiper-slide ${index === 0 ? "lg:ml-2" : ""}`}>

            {/* onLoad hack to make sure swiper is correctly loaded */}
            {gatsby_plugin_image_1.getImage(slide.image) && (<gatsby_plugin_image_1.GatsbyImage image={gatsby_plugin_image_1.getImage(slide.image)} alt={slide.alt} onLoad={() => updateSwiper()}/>)}
          </react_2.SwiperSlide>))}
      </react_2.Swiper>
    </div>);
};
exports.default = InstagramFeed;
