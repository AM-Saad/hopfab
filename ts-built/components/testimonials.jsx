"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var html_react_parser_1 = require("html-react-parser");
var swiper_1 = require("swiper");
var react_2 = require("swiper/react");
require("swiper/swiper.min.css");
require("swiper/components/a11y/a11y.min.css");
require("swiper/components/pagination/pagination.min.css");
var testimonials_json_1 = require("../content/testimonials.json");
var right_arrow_icon_1 = require("./icons/right-arrow-icon");
swiper_1.default.use([swiper_1.A11y, swiper_1.Navigation, swiper_1.Pagination]);
var Testimonials = function (_a) {
    var className = _a.className;
    return (<react_2.Swiper className={className} tag="section" slidesPerView={1} autoHeight={true} loop={true} a11y={{
            prevSlideMessage: "Diapositive précécente",
            nextSlideMessage: "Diapositive suivante",
            firstSlideMessage: "Ceci est la première diapositive",
            lastSlideMessage: "Ceci est la dernière diapositive",
            paginationBulletMessage: "Aller à la diapositive {{index}}",
            // TODO: containerMessage
            // TODO: containerRoleDescriptionMessage
            // TODO: itemRoleDescriptionMessage
        }} navigation={{
            nextEl: ".swiper-button-next",
        }} pagination={{
            el: "#testimonials-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return " <div className=\"font-bold\">\n              " + testimonials_json_1.default[current - 1].name + "\n            </div>\n            <div class=\"hidden md:block md:text-3xl lg:text-3.8xl xl:text-5.5xl\">\n              (<span>" + current + "</span>/<span>" + total + "</span>)\n            </div>";
            },
        }}>
      <div slot="container-start" className="flex items-center border-b border-gris-800 py-4">
        <div id="testimonials-pagination" className="flex items-center justify-between font-bold text-3.8xl lg:text-4.6xl xl:text-6.1xl w-full"></div>
        <div className="flex items-center ml-4 mr-1">
          <div className="swiper-button-next rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brown-50 focus-visible:ring-brown-700">
            <right_arrow_icon_1.default className="w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-10 xl:h-10"/>
          </div>
        </div>
      </div>
      {testimonials_json_1.default.map(function (testimonial, index) {
            var _a;
            return (<react_2.SwiperSlide key={index}>
          <div className="font-serif text-2.5xl md:text-2.4xl lg:text-3xl xl:text-4.6xl md:leading-snug lg:leading-snug xl:leading-tight py-6">
            “{html_react_parser_1.default((_a = testimonial.content) !== null && _a !== void 0 ? _a : "")}”
          </div>
          <div className="text-sm md:text-xs lg:text-sm uppercase mt-4">
            <span className="font-bold">{testimonial.authorName}</span>
            <span className="whitespace-pre">, </span>
            {testimonial.authorFunction}
          </div>
        </react_2.SwiperSlide>);
        })}
    </react_2.Swiper>);
};
exports.default = Testimonials;
//# sourceMappingURL=testimonials.jsx.map