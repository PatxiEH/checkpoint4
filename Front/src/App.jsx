import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SigninForm from "./components/SigninForm";

function App() {
  const [season, setSeason] = useState(null);
  const [showFruits, setShowFruits] = useState(false);
  const [showVegetables, setShowVegetables] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [idUser, setIdUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </>
  );
}

export default App;
