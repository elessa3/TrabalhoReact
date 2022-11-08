  import React, { useEffect, useState } from "react";
  import { api } from "../../../src/Services";
  
  export const Carrinho = () => {
  
    const [produtos, setProdutos] = useState([])
  
    const getItemProdutos= () => {
      api.get("/itemProdutos").then((res)=>{
        setProdutos(res.data.content)        
      })
    }   
  
    useEffect(() =>{
      
    })
          
    return (
      <>
          {
            produtos.map((item) => {
              return(
                <>
                <div>
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Qtd</th>
                      <th>Adicionar</th>
                      <th>Deletar</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map((produto) => (
                      <MeuCard
                        produto={produto}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handlePut={handlePut}
                      />
                    ))}
                  </tbody>
                </table>
                  <p>
                  {item.nome}
                  {item.qtdEstoque}
                  {item.valorUnitario}
                  </p>
                </div>
                <div>
                </div>
                </>
              )
            })
          }
  
      </>
      
  
    );
  
};
