import React from "react";
import Film from "../../shared/types/film";

import "../components/CardRow.css";
import Card from "./Card";
import SlickSlider from "./SlickSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardRow = ({ title, films }: { title?: string; films: Film[] }) => {
  const slickSliderConfig = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-row">
      <div className="card-row__content">
        <h3 className="title">{title}</h3>
        <SlickSlider {...slickSliderConfig}>
          {films.map((film, index) => {
            return <Card key={index} film={film} isLarge={false} />;
          })}
        </SlickSlider>
      </div>
    </div>
  );
};

export default CardRow;
