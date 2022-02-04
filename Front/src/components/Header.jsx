import React from "react";
import kiwi from "../assets/kiwi.png";
import { Link } from "react-router-dom";

const Header = ({ idUser }) => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src={kiwi} alt="logo" />
          <h1>Les fruits et les légumes de saison</h1>
        </div>
        <Link to="/signin">
          {idUser === null ? (
            <h2 className="header__signin-link">S'enregistrer</h2>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </>
  );
};

export default Header;
