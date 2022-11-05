import React from "react";
import { BrowserRouter, Routes as Roteador, Route } from "react-router-dom";
import CadastroDeUsuario from "./pages/CadastroDeUsuario";
import Carrinho from "./pages/Carrinho";
import CategoriaProduto from "./pages/CategoriaProduto";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Pesquisa from "./pages/Pesquisa";

const Routes = () => (
    <BrowserRouter>
        <Roteador>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroDeUsuario />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/basicas" element={<Home variante="Basicas" />} />
            <Route path="/tematicas" element={<Home variante="tematicas" />} />
            <Route path="/fitness" element={<Home variante="fitness" />} />
            <Route path="/pesquisa/:nome" component={Pesquisa} />
            <Route path="/categoria/:id" component={CategoriaProduto} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
        </Roteador>
    </BrowserRouter>
)
export default Routes