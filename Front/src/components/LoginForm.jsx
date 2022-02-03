import React, { useEffect, useState } from "react";
import axios from "axios";

const LoginForm = ({ idUser, setIdUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  console.log(password);
  console.log(idUser);

  const Login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        { email, password },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data.id);
        setIdUser(data.id);
        setErrorMessage("");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMessage("Email ou mot de passe incorrect");
        } else {
          setErrorMessage(err);
        }
      });
  };

  return (
    <div className="login_form_container">
      <div className="login_form">
        <h4>Email</h4>
        <input
          type="email"
          placeholder="utilisateur@email.fr"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Mot de passe</h4>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={Login}>Se connecter</button>
      </div>
    </div>
  );
};

export default LoginForm;
