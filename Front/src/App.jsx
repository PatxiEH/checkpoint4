import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SeasonsList from "./components/SeasonsList";
import FruitsAndVegetablesList from "./components/FruitsAndVegetablesList";
import TypeSelect from "./components/TypeSelect";
import AddProduct from "./components/AddProduct";
import SigninForm from "./components/SigninForm";

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
      <Routes>
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </>
  );
}

export default App;
