import React, { useState } from "react";
import axios from "axios";

const SigninForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [lastname, setLastname] = useState();
  const [firstname, setFirstname] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState();

  const Login = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/users",
        { email, lastname, firstname, password },
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
        console.log(data);
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
    <form className="signin_form_container">
      <div className="signin_form">
        <h4>Nom</h4>
        <input
          type="lastname"
          placeholder="Nom"
          onChange={(e) => setLastname(e.target.value)}
        />
        <h4>Prénom</h4>
        <input
          type="firstname"
          placeholder="Prénom"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <h4>Email</h4>
        <input
          type="email"
          placeholder="utilisateur@email.fr"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h4>Mot de passe</h4>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={Login}>S'enregister</button>
      </div>
    </form>
  );
};

export default SigninForm;
