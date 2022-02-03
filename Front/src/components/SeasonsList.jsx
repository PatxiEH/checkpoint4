import React, { useState, useEffect } from "react";
import axios from "axios";
import SeasonItems from "./SeasonsItems";

const SeasonsList = ({ setSeason }) => {
  const [seasonsList, setSeasonsList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/seasons`)
      .then((results) => results.data)
      .then((data) => setSeasonsList(data));
  }, []);

  return (
    <ul className="seasons_list">
      {seasonsList &&
        seasonsList.map((season) => (
          <SeasonItems
            key={season.id_season}
            seasonName={season.name}
            seasonId={"item" + season.id_season}
            id_season={season.id_season}
            setSeason={setSeason}
          />
        ))}
    </ul>
  );
};

export default SeasonsList;
