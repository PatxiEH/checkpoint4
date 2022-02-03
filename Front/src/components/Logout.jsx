import React from "react";

const Logout = ({ setIdUser, setShowAddProductDiv }) => {
  const logoutUser = () => {
    setIdUser(null);
    setShowAddProductDiv(false);
  };

  return (
    <div>
      <h2 onClick={logoutUser}>
        Déconexion <i className="fas fa-sign-out-alt"></i>
      </h2>
    </div>
  );
};

export default Logout;
