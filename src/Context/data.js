import React, { useState } from "react";

export const infoContexto = {

    nome: "",
    qtdEstoque: 0,
    descricao: "",
    valorUnitario: 0,
    imagem: ""
}

export const DataContext = React.createContext(null)

export const Contexto = (props) => {

    const [dados, setDados] = useState(infoContexto)

    function handleSetInfo(e) {
        setDados({ nome: e.target.value, qtdEstoque: e.target.value, valorUnitario: e.target.value, })
    }

    console.log(dados);

    return (
        <DataContext.Provider value={{dados, handleSetInfo }}>
            {props.children}
        </DataContext.Provider>
    )
}