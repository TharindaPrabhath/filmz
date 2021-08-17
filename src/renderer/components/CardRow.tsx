import React from "react";
import Film from "../../shared/types/film";

import "../components/CardRow.css";
import Card from "./Card";
import SlickSlider from "./SlickSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardRow = ({
  title,
  films,
  slickSliderConfig,
  cardSize,
}: {
  title?: string;
  films: Film[];
  slickSliderConfig: any;
  cardSize: string;
}) => {
  return (
    <div className="card-row">
      <div className="card-row__content">
        <h3 className="title">{title}</h3>
        <SlickSlider {...slickSliderConfig}>
          {films.map((film, index) => {
            return <Card key={index} film={film} size={cardSize} />;
          })}
        </SlickSlider>
      </div>
    </div>
  );
};

export default CardRow;
