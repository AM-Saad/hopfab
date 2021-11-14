"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var nico_jpg_1 = require("../../images/testimonials/nico.jpg");
var Lineetraphael_jpg_1 = require("../../images/testimonials/Lineetraphael.jpg");
var benjamin_jpg_1 = require("../../images/testimonials/benjamin.jpg");
var Val_rieetDavid_jpg_1 = require("../../images/testimonials/Val\u00E9rieetDavid.jpg");
var slides = [
    {
        image: Lineetraphael_jpg_1.default,
        alt: "Nothing",
        description: "“Nous travaillons avec Hopfab depuis nos débuts, ils ont suivi toute notre évolution. Ils nous apportent de très belles opportunités avec des projets variés voire inattendus.A chaque fois le cahier des charges est clair et précis cela nous permet de gagner un temps précieux !”",
        customer: "Line et raphael",
        company: "menuisiers-ébénistes"
    },
    {
        image: Val_rieetDavid_jpg_1.default,
        alt: "Nothing",
        description: "Pour nous, travailler avec Hopfab c’était vraiment une belle opportunité de se faire connaître, et être artisan chez Hopfab c’est être reconnu comme un artisan de qualité. Nous avons la possibilité de travailler directement avec les clients pour donner vie à des projets qui leur ressemblent.",
        customer: "Valérie et David",
        company: "serruriers-métalliers"
    },
    {
        image: benjamin_jpg_1.default,
        alt: "Nothing",
        description: "Au-delà des opportunités de projets, Hopfab m’a donné un cadre. Mes projets, de la négociation commerciale à la livraison, sont mieux structurés. Je me sens en confiance et la preuve c’est que je transforme bien mieux les projets que je chiffre.",
        customer: "Benjamin",
        company: "menuisier"
    },
    {
        image: nico_jpg_1.default,
        alt: "Nothing",
        description: "J’ai rejoint Hopfab quasiment à la création de mon entreprise. Ils m’ont vraiment permis de lancer mon activité, de me développer sur des projets de plus en plus ambitieux et de structurer mon activité.",
        customer: "Nicolas",
        company: "agenceur"
    }
];
var testimonials = function () {
    var inputEl = react_1.useRef(null);
    var _a = react_1.useState(false), isDown = _a[0], setIsDown = _a[1];
    var _b = react_1.useState(null), scrollLeft = _b[0], setScrollLeft = _b[1];
    var _c = react_1.useState(null), startX = _c[0], setStartX = _c[1];
    var mouseDown = function (e) {
        setScrollLeft(inputEl.current.scrollLeft);
        setStartX(e.pageX - inputEl.current.offsetLeft);
        setIsDown(true);
        // `current` points to the mounted text input element
    };
    var mouseLeave = function () {
        setIsDown(false);
    };
    var mouseUp = function () { setIsDown(false); };
    var mouseMove = function (e) {
        if (!isDown)
            return;
        e.preventDefault();
        var x = e.pageX - inputEl.current.offsetLeft;
        var walk = (x - startX) * 3; //scroll-fast
        inputEl.current.scrollLeft = scrollLeft - walk;
    };
    return (<div className="flex max-w-full overflow-x-scroll overflow-y-hidden testimonials relative" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove} ref={inputEl}>

          {slides.map(function (s) {
            return <div className="mr-10 testimonials-item" key={s.customer}>
                      <div className="testimonials-item_img overflow-hidden">
                     <img src={s.image} alt={s.alt} className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full h-full"/>
                      </div>
                      <p className=" my-4 text-xsm "> <span className="font-bold"> {s.customer} </span>{s.company}</p>
                      <p className="text-3xl md:text-2.4xl font-medium font-serif">{s.description}</p>
                  </div>;
        })}
    </div>);
};
exports.default = testimonials;
//# sourceMappingURL=testimonials-artisan.jsx.map