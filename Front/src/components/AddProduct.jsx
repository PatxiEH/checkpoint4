import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import Logout from "./Logout";

const AddProduct = ({ idUser, updateList, setUpdateList, setIdUser }) => {
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const [seasonNumber, setSeasonNumber] = useState(null);

  const [showAddProductDiv, setShowAddProductDiv] = useState(false);

  const updateProductList = () => {
    if ((name != null) & (type != null) & (seasonNumber != null)) {
      axios.post(
        `http://localhost:8000/api/${type}/`,
        {
          name: name,
          season_id: seasonNumber,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUpdateList(!updateList);
    } else {
      alert("Erreur de saisie");
    }
  };

  const showDiv = () => {
    setShowAddProductDiv(!showAddProductDiv);
  };

  return (
    <>
      <div className="links">
        <a className="a_showdiv" onClick={showDiv}>
          Ajouter un fruit ou un légume
        </a>
        {idUser !== null ? (
          <Logout
            setIdUser={setIdUser}
            setShowAddProductDiv={setShowAddProductDiv}
          />
        ) : (
          <></>
        )}
      </div>
      {showAddProductDiv === true ? (
        <>
          {idUser !== null ? (
            <div className="add_product_container">
              <div className="add_product">
                <h2>Ajouter un produit</h2>
                <div>
                  <h4>Nom</h4>
                  <input
                    type="text"
                    defaultValue={null}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <h4>Fruit où légume ?</h4>
                  <select
                    name="product_type"
                    id="type_type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value={null}>---</option>
                    <option value="fruits">Fruit</option>
                    <option value="vegetables">Légumes</option>
                  </select>
                </div>
                <div>
                  <h4>Quelle saison ?</h4>
                  <select
                    name="seasons"
                    id="seasons"
                    onChange={(e) => setSeasonNumber(e.target.value)}
                  >
                    <option value={null}>---</option>
                    <option value="1">Printemps</option>
                    <option value="2">Été</option>
                    <option value="3">Automne</option>
                    <option value="4">Hiver</option>
                  </select>
                </div>
                <button onClick={updateProductList}>Ajouter</button>
              </div>
            </div>
          ) : (
            <>
              <LoginForm idUser={idUser} setIdUser={setIdUser} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddProduct;
