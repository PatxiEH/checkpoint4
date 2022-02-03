import React, { useState } from "react";

import Header from "./components/Header";
import SeasonsList from "./components/SeasonsList";
import FruitsAndVegetablesList from "./components/FruitsAndVegetablesList";
import TypeSelect from "./components/TypeSelect";
import AddProduct from "./components/AddProduct";

function App() {
  const [season, setSeason] = useState(null);
  const [showFruits, setShowFruits] = useState(false);
  const [showVegetables, setShowVegetables] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [idUser, setIdUser] = useState(null);

  return (
    <>
      <Header />
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

export default App;
