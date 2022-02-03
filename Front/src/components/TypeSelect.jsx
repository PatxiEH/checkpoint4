import React from "react";

const TypeSelect = ({
  showFruits,
  setShowFruits,
  showVegetables,
  setShowVegetables,
}) => {
  return (
    <div className="type_select_constainer">
      <div
        className={showFruits === true ? "select_button" : "button_inactive"}
        onClick={() => {
          setShowFruits(!showFruits);
        }}
      >
        <h2>
          <span className="select_button__emoji">🍎</span> Fruits
        </h2>
      </div>
      <div
        className={
          showVegetables === true ? "select_button" : "button_inactive"
        }
        onClick={() => {
          setShowVegetables(!showVegetables);
        }}
      >
        <h2>
          <span className="select_button__emoji">🥦</span> Legumes
        </h2>
      </div>
    </div>
  );
};

export default TypeSelect;
