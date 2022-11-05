import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCamisasBasicas, getProdutos } from "../services/testService";

const Cards = ({ variante }) => {
  const [dadosCards, setDadosCards] = useState([]);

  useEffect(() => {
    if (variante == "basicas") {
      getCamisasBasicas().then(setDadosCards);
      // .catch(window.open("https://www.google.com", "_self"));
    } else {
      getProdutos().then(setDadosCards);
      // .catch(window.open("https://www.google.com", "_self"));
    }
  });

  return (
    <>
      <h2>Meus cars</h2>
      {dadosCards.map((card, indice) => (
        <div style={{ display: "flex", flexDirection: "column" }} key={indice}>
          <img src={card.image} alt="Card da galeria" style={{ width: "30%" }} />
          <h4>{card.nome}</h4>
          <p>R$ {card.preco.toString()}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;
