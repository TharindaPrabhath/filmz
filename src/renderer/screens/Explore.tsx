import React from "react";
import { useEffect } from "react";
import Slider from "../components/Slider";

import "../screens/Explore.css";

import axios from "../../shared/utils/axios";
import requests from "../../shared/data/tmdb/requests";

import { useState } from "react";
import Film from "../../shared/types/film";

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

  //console.log(trendings[0]?.adult);

  return (
    <div className="explore">
      <Slider films={trendings.slice(0, 5)} />
    </div>
  );
};

export default Explore;
