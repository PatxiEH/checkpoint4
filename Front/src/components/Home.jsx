import React, { useState } from "react";

import Header from "./Header";
import SeasonsList from "./SeasonsList";
import FruitsAndVegetablesList from "./FruitsAndVegetablesList";
import TypeSelect from "./TypeSelect";
import AddProduct from "./AddProduct";

function Home() {
  const [season, setSeason] = useState(null);
  const [showFruits, setShowFruits] = useState(false);
  const [showVegetables, setShowVegetables] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [idUser, setIdUser] = useState(null);

  return (
    <>
      <Header idUser={idUser} />
      <SeasonsList setSeason={setSeason} />
      <TypeSelect
        setShowFruits={setShowFruits}
        showFruits={showFruits}
        setShowVegetables={setShowVegetables}
        showVegetables={showVegetables}
      />
      <FruitsAndVegetablesList
        season={season}
        showFruits={showFruits}
        showVegetables={showVegetables}
        updateList={updateList}
      />
      <AddProduct
        idUser={idUser}
        setIdUser={setIdUser}
        updateList={updateList}
        setUpdateList={setUpdateList}
      />
    </>
  );
}

export default Home;
