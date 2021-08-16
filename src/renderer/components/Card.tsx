import React from "react";
import { useState } from "react";
import { IMAGE_BASE_URL } from "../../shared/data/tmdb/meta";
import Film from "../../shared/types/film";

import "../components/Card.css";

const Card = ({ film, isLarge }: { film: Film; isLarge: boolean }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={isLarge ? "card-large" : "card"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="card__content"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL + film?.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <HoveredCard show={hover} />
      </div>
    </div>
  );
};

const HoveredCard = ({ show }: { show: boolean }) => {
  return (
    <div
      className="hovered-card"
      style={show ? { opacity: 1 } : { opacity: 0 }}
    >
      <h3>Hovered!</h3>
    </div>
  );
};

export default Card;
