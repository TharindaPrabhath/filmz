import React from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";
import SlickSlider from "react-slick";

import "../screens/Explore.css";

import axios from "../../shared/utils/axios";
import requests from "../../shared/data/tmdb/requests";

import { useState } from "react";
import Film from "../../shared/types/film";
import CardRow from "../components/CardRow";

const Explore = () => {
  const [trendings, setTrendings] = useState<Film[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      const res = await axios.get(requests.fetchTrending);
      setTrendings(res.data.results as Film[]);
      return res;
    }

    fetchTrending();
  }, [requests.fetchTrending]);

  return (
    <div className="explore">
      <div className="explore__content">
        <Slider films={trendings.slice(0, 5)} />
        <CardRow title="New Arrivals" films={trendings.slice(6, 16)} />
        <CardRow title="New Arrivals" films={trendings.slice(6, 16)} />
      </div>
    </div>
  );
};

export default Explore;
