import React, { useEffect, useRef, useState } from "react";
import Nicolas from "../../images/testimonials/nico.jpg"
import Lineraphael from "../../images/testimonials/Lineetraphael.jpg"
import benjamin from "../../images/testimonials/benjamin.jpg"
import ValérieDavid from "../../images/testimonials/ValérieetDavid.jpg"

export interface Slide {
  image: any;
    alt: string | null;
    description: string | null;
    customer: string | null,
    company:string | null
}

const slides: Slide[] = [
    {
        image: Lineraphael,
    alt: "Nothing",
        description: "“Nous travaillons avec Hopfab depuis nos débuts, ils ont suivi toute notre évolution. Ils nous apportent de très belles opportunités avec des projets variés voire inattendus.A chaque fois le cahier des charges est clair et précis cela nous permet de gagner un temps précieux !”",
        customer: "Line et raphael",
        company:"menuisiers-ébénistes"

    },
    {
        image: ValérieDavid,
        alt: "Nothing",
        description: "Pour nous, travailler avec Hopfab c’était vraiment une belle opportunité de se faire connaître, et être artisan chez Hopfab c’est être reconnu comme un artisan de qualité. Nous avons la possibilité de travailler directement avec les clients pour donner vie à des projets qui leur ressemblent.",
        customer: "Valérie et David",
        company:"serruriers-métalliers"
    },
    {
        image: benjamin,
        alt: "Nothing",
        description: "Au-delà des opportunités de projets, Hopfab m’a donné un cadre. Mes projets, de la négociation commerciale à la livraison, sont mieux structurés. Je me sens en confiance et la preuve c’est que je transforme bien mieux les projets que je chiffre.",
        customer: "Benjamin",
        company:"menuisier"
    },
    {
        image: Nicolas,
        alt: "Nothing",
        description: "J’ai rejoint Hopfab quasiment à la création de mon entreprise. Ils m’ont vraiment permis de lancer mon activité, de me développer sur des projets de plus en plus ambitieux et de structurer mon activité.",
        customer: "Nicolas",
        company:"agenceur"
    }
]
const testimonials = () => {
    const inputEl = useRef(null);   
    const [isDown, setIsDown] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(null)
    const [startX, setStartX] = useState(null)

    const mouseDown = (e) => {
        setScrollLeft( inputEl.current.scrollLeft)
        setStartX(e.pageX - inputEl.current.offsetLeft)
        setIsDown(true)


        // `current` points to the mounted text input element
    };
    const mouseLeave = () => {
        setIsDown(false)
    }
    const mouseUp = () => { setIsDown(false) }

    const mouseMove = (e) => {
        if (!isDown) return
        e.preventDefault();
        const x = e.pageX - inputEl.current.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        inputEl.current.scrollLeft = scrollLeft - walk;

    }

  
    
 
    return (
        <div className="flex max-w-full overflow-x-scroll overflow-y-hidden testimonials relative" onMouseDown={mouseDown} onMouseLeave={mouseLeave} onMouseUp={mouseUp} onMouseMove={mouseMove} ref={inputEl}>

          {
              slides.map(s => {
                  return <div className="mr-10 testimonials-item" key={s.customer}>
                      <div className="testimonials-item_img overflow-hidden">
                     <img src={s.image}
                          alt={s.alt}
                          className="transform duration-200 ease-in-out scale-100 hover:scale-110 w-full h-full"
                      />
                      </div>
                      <p className=" my-4 text-xsm "> <span className="font-bold"> {s.customer} </span>{s.company}</p>
                      <p className="text-3xl md:text-2.4xl font-medium font-serif">{s.description}</p>
                  </div>
              })
          }
    </div>
  );
};

export default testimonials;
