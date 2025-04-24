import "./Carousel.css";

import useEmblaCarousel from "embla-carousel-react";

import Star from "../../assets/icons/star.svg?react";
import { DummyCarousel } from "./DummyCarousel";

const options = { slidesToScroll: 1, loop: true };

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className="carousel">
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-container">
          {DummyCarousel.map((item, index) => (
            <div className="carousel-slide-container" key={index}>
              <div className="carousel-slide">
                <img alt={item.title} src={item.image} />
                <div className="title">{item.title}</div>
                <div className="price-container">
                  <span className="price">${item.price}</span>
                  <span className="ratings">
                    {new Array(5).fill("").map((_, index) => (
                      <Star
                        key={index}
                        style={
                          index < item.rating
                            ? {}
                            : {
                                filter: "grayscale(1)",
                              }
                        }
                      />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
