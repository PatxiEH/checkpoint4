import React, { useEffect, useState } from "react";
import axios from "axios";

const FruitsAndVegetablesList = ({
  season,
  showVegetables,
  showFruits,
  updateList,
}) => {
  const [fruitsList, setFruitsList] = useState();
  const [vegetablesList, setVegetablesList] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/fruits/seasons/${season}`)
      .then((results) => results.data)
      .then((data) => setFruitsList(data));

    axios
      .get(`http://localhost:8000/api/vegetables/seasons/${season}`)
      .then((results) => results.data)
      .then((data) => setVegetablesList(data));
  }, [season, updateList]);

  return (
    <>
      {season == null ? (
        <></>
      ) : (
        <div className="fruits_and_veg">
          <div className="fruits_and_veg__container">
            {showFruits === true ? (
              <ul>
                {" "}
                <h2>Fruits</h2>{" "}
                {fruitsList &&
                  fruitsList.map((fruit, index) => (
                    <li key={index}>{fruit.name}</li>
                  ))}
              </ul>
            ) : (
              <></>
            )}
            {showVegetables === true ? (
              <ul>
                {" "}
                <h2>Legumes</h2>
                {vegetablesList &&
                  vegetablesList.map((vegetable, index) => (
                    <li key={index}>{vegetable.name}</li>
                  ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FruitsAndVegetablesList;
