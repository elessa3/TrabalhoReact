import { useRef, useState, useEffect } from "react";
import "./styleSubheader.css";

import api from "../../service/testService";

function Subheader() {
  const dropDownRef = useRef(null);
  const [categorias, setCategorias] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    api
      .get(`api/v1/categorias`)
      .then((response) => {
        if (response.status === 200) {
          setCategorias(response.data);
        }
      })
      .catch((error) => {
        alert(error?.response?.data?.listaErros[0]);
      });
  }, []);

  return (
    <div className="subheader">
      <nav className="barra-subheader">
        <div className="menu-drop">
          <div className="menu-container">
            <button onClick={onClick} className="menu-button">
              <img src="../img/icone-menu.svg" alt="menu"></img>
              <span className="todas-categorias">Todas as categorias</span>
            </button>
            <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
              <ul className="C-dropdown">
                {categorias.length === 0
                  ? ""
                  : categorias.map((categoria) => {
                      return (
                          <a
                            key={categoria.id}
                            className={"cat-dropdown" + categoria.id}
                            href={"/categoria/" + categoria.id}
                          >
                        <li key={categoria.id} className={"c-dropdown__item cat" + categoria.id}>
                            {categoria.nome}
                        </li>
                          </a>
                      );
                    })}
              </ul>
            </nav>
          </div>
        </div>
        <div className="barra-links-categorias">
          {categorias.length === 0
            ? ""
            : categorias.map((categoria, index) => {
                return (
                  <a key={categoria.id} className={"cat-destaque" + (index + 1)} href={"/categoria/" + categoria.id}>
                    {categoria.nome}
                  </a>
                );
              })}
        </div>
      </nav>
    </div>
  );
}

export default Subheader;