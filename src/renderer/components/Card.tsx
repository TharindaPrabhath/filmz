import React from "react";
import { useState } from "react";
import { IMAGE_BASE_URL } from "../../shared/data/tmdb/meta";
import Film from "../../shared/types/film";
import Size from "../../shared/types/size";
import mapGenre from "../../shared/utils/genreMapper";

import "../components/Card.css";

const Card = ({ film, size }: { film: Film; size: string }) => {
  const [hover, setHover] = useState<boolean>(false);

  return size === Size.SMALL ? (
    <div
      className="card"
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
        <HoveredCard film={film} show={hover} />
      </div>
    </div>
  ) : (
    <div className="card-extra-large">
      <div
        className="card-extra-large__content"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL + film?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="footer">
          <div className="footer__content">
            <h3 className="title">{film.title || film.original_title}</h3>
            <div className="genres">
              {film?.genre_ids.map((genre, index) => {
                return (
                  <div key={index} className="genre">
                    {mapGenre(genre)}
                  </div>
                );
              })}
            </div>

            <div className="footer__bottom">
              <label className="rating">{film.vote_average}</label>
              <button className="wishlist-btn">Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HoveredCard = ({ film, show }: { film: Film; show: boolean }) => {
  return (
    <div
      className="hovered-card"
      style={show ? { opacity: 1 } : { opacity: 0 }}
    >
      <div className="hovered-card__content">
        <div className="info">
          <h3 className="title">{film.title || film.original_title}</h3>
          <h4 className="year">{film.release_date?.substring(0, 4)}</h4>
          <div className="genres">
            {film?.genre_ids.map((genre, index) => {
              return (
                <div key={index} className="genre">
                  {mapGenre(genre)}
                </div>
              );
            })}
          </div>
        </div>
        <label className="rating">{film.vote_average}</label>
        <button className="wishlist-btn">Add to wishlist</button>
      </div>
    </div>
  );
};

export default Card;
