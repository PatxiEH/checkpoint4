import React from "react";
import kiwi from "../assets/kiwi.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={kiwi} alt="logo" />
      </div>
      <h1>Les fruits et les légumes de saison</h1>
    </div>
  );
};

export default Header;
