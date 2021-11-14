"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Helene_jpeg_1 = require("../../images/testimonials/Helene.jpeg");
var Aude_png_1 = require("../../images/testimonials/Aude.png");
var Marc_png_1 = require("../../images/testimonials/Marc.png");
var slides = [
    {
        image: Helene_jpeg_1.default,
        alt: "Nothing",
        description: "“Nous travaillons sur chacun de nos projets d'agencements avec Hopfab depuis que nous les avons rencontrés. Une très grande qualité d'écoute et suivi des projets, sans oublier bien entendu ce qui fait leur force, le carnet d'adresses incroyable. Merci Hopfab !”",
        customer: "Hélène, ",
        company: "fondatrice de l’agence Archipelles,"
    },
    {
        image: Marc_png_1.default,
        alt: "Nothing",
        description: "“Hopfab permet aux architectes de trouver des artisans rapidement, dans le périmètre géographique du projet et à des prix intéressants. Nous avons fait appel à hopfab sur 4 opérations, de la mission mobilier à la mission d’archi d’intérieur. L’équipe Hopfab est dotée d’une grande écoute et de valeurs que nous partageons”",
        customer: "Marc-Antoine, ",
        company: "cofondateur de Same architecte,"
    },
    {
        image: Aude_png_1.default,
        alt: "Nothing",
        description: "“C'est en toute confiance que je confie à Hopfab le sourcing des bons partenaires et l'étude de leurs devis. C'est au moins 1,5 journée de gestion de recherche, de brief et d'appels téléphoniques que je gagne en faisant appel à leur réseau d'artisans sélectionnés”",
        customer: "Aude, ",
        company: "fondatrice de Décodage Création,"
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
//# sourceMappingURL=testimonials.jsx.map