import React from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";

import "../screens/Explore.css";

import axios from "../../shared/utils/axios";
import requests from "../../shared/data/tmdb/requests";

import { useState } from "react";
import Film from "../../shared/types/film";
import CardRow from "../components/CardRow";
import {
  centeredSlide,
  multipleSlides,
  singleSlide,
} from "../../shared/data/slickSliderConfigs";
import Size from "../../shared/types/size";
import Card from "../components/Card";

const Explore = () => {
  const [trendings, setTrendings] = useState<Film[]>([]);
  const [mostPopulars, setMostPopulars] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await axios.get(requests.fetchTrending);
      setTrendings(res.data.results as Film[]);
      return res;
    }

    async function fetchMostPopular() {
      const res = await axios.get(requests.fetchMostPopular);
      setMostPopulars(res.data.results as Film[]);
      return res;
    }

    fetchTrending();
    fetchMostPopular();
  }, [requests.fetchTrending, requests.fetchMostPopular]);

  return (
    <div className="explore">
      <div className="explore__content">
        <Slider films={trendings.slice(0, 5)} />
        <CardRow
          title="New Arrivals"
          films={trendings.slice(6, 16)}
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

        <h1>________</h1>
        <h1>________</h1>
        <h1>________</h1>
        <h1>________</h1>
      </div>
    </div>
  );
};

export default Explore;
