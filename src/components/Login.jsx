import React, { useState } from "react";
import "../assents/Login.css"; // Archivo CSS personalizado

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (email === "" || password === "") {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    // Aquí puedes agregar la lógica de autenticación
    console.log("Email:", email);
    console.log("Password:", password);
  
    setErrorMessage(""); // Limpiar el mensaje de error si todo está bien
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;

