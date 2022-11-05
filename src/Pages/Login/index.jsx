import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React from "react";
import { useState } from "react";

const login = (usuario, senha) => {
  alert("Usuário: " + usuario + ", senha: " + senha);
};

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form onSubmit={() => login(usuario, senha)}>
      Usuário:
      <input value={usuario} onChange={(evt) => setUsuario(evt.currentTarget.value)} />
      Senha:
      <input value={senha} onChange={(evt) => setSenha(evt.currentTarget.value)} />
      <button type="submit">Logar</button>
    </form>
  );
};

export default Login;
