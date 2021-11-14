"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var swiper_1 = require("swiper");
var react_2 = require("swiper/react");
require("swiper/swiper.min.css");
require("swiper/components/a11y/a11y.min.css");
require("swiper/components/pagination/pagination.min.css");
swiper_1.default.use([swiper_1.A11y, swiper_1.Pagination]);
var ProjectPhotos = function (_a) {
    var slides = _a.slides;
    var _b = react_1.useState(null), swiper = _b[0], setSwiper = _b[1];
    var _c = react_1.useState(true), displayInformation = _c[0], setDisplayInformation = _c[1];
    var updateSwiper = function () {
        if (swiper) {
            swiper.update();
        }
    };
    return (<div className="border-b border-gris-800">
      <div className="relative">
        <react_2.Swiper tag="section" onSwiper={setSwiper} slidesPerView={1.2} spaceBetween={50} centeredSlidesBounds={true} a11y={{
            prevSlideMessage: "Diapositive précécente",
            nextSlideMessage: "Diapositive suivante",
            firstSlideMessage: "Ceci est la première diapositive",
            lastSlideMessage: "Ceci est la dernière diapositive",
            paginationBulletMessage: "Aller à la diapositive {{index}}",
            // TODO: containerMessage
            // TODO: containerRoleDescriptionMessage
            // TODO: itemRoleDescriptionMessage
        }} grabCursor={true} pagination={{
            el: "#project-photos-pagination",
            type: "fraction",
            clickable: false,
        }} onSliderFirstMove={function () { return setDisplayInformation(false); }}>
          {slides.map(function (slide, index) { return (<react_2.SwiperSlide key={index}>
              {/* onLoad hack to make sure swiper is correctly loaded */}
              {slide.image && (<gatsby_plugin_image_1.GatsbyImage image={slide.image} alt={slide.alt} onLoad={function () { return updateSwiper(); }}/>)}
            </react_2.SwiperSlide>); })}
        </react_2.Swiper>
        {displayInformation && (<div onClick={function () { return setDisplayInformation(false); }} className="select-none hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-brown-700 text-brown-50 font-bold text-xs uppercase text-center z-10">
            Faites glisser
            <br /> l'image
            <br /> vers la gauche
          </div>)}
      </div>
      <div id="project-photos-pagination" className="uppercase text-xs font-bold py-4 text-right"></div>
    </div>);
};
exports.default = ProjectPhotos;
//# sourceMappingURL=project-photos.jsx.map