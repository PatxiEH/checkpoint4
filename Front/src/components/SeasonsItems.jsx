import React, { useState } from "react";

const SeasonsItems = ({ seasonName, seasonId, id_season, setSeason }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <li
        className={selected ? "seasons_items" : "seasons_items_inactive"}
        id={seasonId}
        onClick={(e) => {
          setSeason(id_season);
        }}
      >
        {seasonName}
      </li>
    </>
  );
};

export default SeasonsItems;
