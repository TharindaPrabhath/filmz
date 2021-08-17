import React from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";

import "../screens/Explore.css";
import "../components/Card.css";

import axios from "../../shared/utils/axios";
import requests from "../../shared/data/tmdb/requests";

import { useState } from "react";
import Film from "../../shared/types/film";
import CardRow from "../components/CardRow";
import {
  centeredSlide,
  multipleSlides,
} from "../../shared/data/slickSliderConfigs";
import Size from "../../shared/types/size";
import Card from "../components/Card";

const Explore = () => {
  const [trendings, setTrendings] = useState<Film[]>([]);
  const [mostPopulars, setMostPopulars] = useState<Film[]>([]);
  const [newArrivals, setNewArrivals] = useState<Film[]>([]);
  const [toprated, setToprated] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await axios.get(requests.fetchTrending);
      setTrendings(res.data.results as Film[]);
      return res;
    }

    async function fetchNewArrival() {
      const res = await axios.get(requests.fetchNewArrivals);
      setNewArrivals(res.data.results as Film[]);
      return res;
    }

    async function fetchMostPopular() {
      const res = await axios.get(requests.fetchMostPopular);
      setMostPopulars(res.data.results as Film[]);
      return res;
    }

    async function fetchTopRated() {
      const res = await axios.get(requests.fetchTopRated);
      setToprated(res.data.results as Film[]);
      return res;
    }

    fetchTrending();
    fetchNewArrival();
    fetchMostPopular();
    fetchTopRated();
  }, [
    requests.fetchTrending,
    requests.fetchMostPopular,
    requests.fetchNewArrivals,
  ]);

  return (
    <div className="explore">
      <div className="explore__content">
        <Slider films={trendings.slice(0, 5)} />
        <CardRow
          title="New Arrivals"
          films={newArrivals.slice(0, 10)}
          slickSliderConfig={multipleSlides}
          cardSize={Size.SMALL}
        />

        <div className="most-popular">
          <CardRow
            films={mostPopulars.slice(0, 5)}
            title="Most Popular"
            slickSliderConfig={centeredSlide}
            cardSize={Size.EXTRA_LARGE}
          />
        </div>

        <CardRow
          title="Trending"
          films={trendings.slice(6, 16)}
          slickSliderConfig={multipleSlides}
          cardSize={Size.SMALL}
        />

        <div className="top-rated">
          <div className="top-rated__title">
            <h3>Top Rated</h3>
          </div>

          <div className="top-rated__content">
            {toprated.slice(0, 8).map((film, index) => {
              return <Card key={index} film={film} size={Size.SMALL} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
