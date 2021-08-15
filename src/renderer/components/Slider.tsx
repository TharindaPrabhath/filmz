import React from "react";
import { useState } from "react";
import Film from "../../shared/types/film";

import "../components/Slider.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IMAGE_BASE_URL } from "../../shared/data/tmdb/meta";
import { useEffect } from "react";
import mapGenre from "../../shared/utils/genreMapper";

const Slider = ({ films }: { films: Film[] }) => {
  const [film, setFilm] = useState<Film>();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setFilm(films[0]);
  }, [films]);

  const nextSlide = () => {
    if (index == films.length - 1) {
      setIndex(0);
      setFilm(films[index]);
    } else {
      setIndex(index + 1);
      setFilm(films[index]);
    }
  };

  const prevSlide = () => {
    if (index == 0) {
      setIndex(films.length - 1);
      setFilm(films[index]);
    } else {
      setIndex(index - 1);
      setFilm(films[index]);
    }
  };

  const moveSlide = (i: number) => {
    setIndex(i);
    setFilm(films[index]);
  };

  console.log(film?.title);
  console.log(IMAGE_BASE_URL + film?.backdrop_path);
  return (
    <div className="slider">
      <div
        className="slider__content"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL + film?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <button id="prev-btn" className="btn" onClick={() => prevSlide()}>
          <IoIosArrowBack size={32} color={"white"} />
        </button>
        <button id="next-btn" className="btn" onClick={() => nextSlide()}>
          <IoIosArrowForward size={32} color={"white"} />
        </button>

        <div className="left-col">
          <div className="left-col__content">
            <h1 className="title">{film?.title || film?.original_title}</h1>
            <p className="overview">{film?.overview}</p>

            <div className="genres">
              {film?.genre_ids.map((genre, index) => {
                return (
                  <div key={index} className="genre">
                    {mapGenre(genre)}
                  </div>
                );
              })}
            </div>

            <div className="rating">
              <label>{film?.vote_average}</label>
            </div>
          </div>
        </div>
        <div className="dots">
          {Array.from({ length: 5 }).map((dot, i) => (
            <div
              key={i}
              onClick={() => moveSlide(i)}
              className={i == index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>

        <div className="bottom-shade"></div>
      </div>
    </div>
  );
};

export default Slider;
