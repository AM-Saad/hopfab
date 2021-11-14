import React, { useEffect, useRef,useState } from "react";
import Helene from "../../images/testimonials/Helene.jpeg"
import Aude from "../../images/testimonials/Aude.png"
import Virginie from "../../images/testimonials/Virginie.jpeg"
import Marc from "../../images/testimonials/Marc.png"

export interface Slide {
  image: any;
    alt: string | null;
    description: string | null;
    customer: string | null,
    company:string | null
}

const slides: Slide[] = [
    {
        image: Helene,
    alt: "Nothing",
        description: "“Nous travaillons sur chacun de nos projets d'agencements avec Hopfab depuis que nous les avons rencontrés. Une très grande qualité d'écoute et suivi des projets, sans oublier bien entendu ce qui fait leur force, le carnet d'adresses incroyable. Merci Hopfab !”",
        customer: "Hélène, ",
        company:"fondatrice de l’agence Archipelles,"

    },
    {
        image: Marc,
        alt: "Nothing",
        description: "“Hopfab permet aux architectes de trouver des artisans rapidement, dans le périmètre géographique du projet et à des prix intéressants. Nous avons fait appel à hopfab sur 4 opérations, de la mission mobilier à la mission d’archi d’intérieur. L’équipe Hopfab est dotée d’une grande écoute et de valeurs que nous partageons”",
        customer: "Marc-Antoine, ",
        company:"cofondateur de Same architecte,"
    },
    {
        image: Aude,
        alt: "Nothing",
        description: "“C'est en toute confiance que je confie à Hopfab le sourcing des bons partenaires et l'étude de leurs devis. C'est au moins 1,5 journée de gestion de recherche, de brief et d'appels téléphoniques que je gagne en faisant appel à leur réseau d'artisans sélectionnés”",
        customer: "Aude, ",
        company:"fondatrice de Décodage Création,"
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
