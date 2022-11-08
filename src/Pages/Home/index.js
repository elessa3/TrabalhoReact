import React, { useState, useEffect } from "react";
import { api } from "./Services";

export const Home = () => {

    const[produtos, setProdutos] = useState([])

    const getProdutos= () => {
      api.get("/produtos").then((res)=>{
        setProdutos(res.data.content)        
      })
    } 

    //funcao para chamar os produtos
    function handleNomeChange (e) {
        setProdutos({...produtos, nome: e.target.value})        
    }
    function handleDescChange (e) {
        setProdutos({...produtos, descricao: e.target.value})        
    }
    function handleValorcChange (e) {
        setProdutos({...produtos, valorUnitario: e.target.value  })        
    }
    
    const handlePost = () => {
        api.post(`/itemprodutos/{id}`, produtos).then((res)=>{})      
    }
    const handleDelete = () => {
        api.delete(`/produtos/{id}`, produtos)      
    }
    const handlePut = () => {
        api.put(`/produtos/{id}`, produtos)      
    }


    useEffect(() =>{
        getProdutos()
      })
    

    return(
        <>
        
        <h1>Tela Inicial</h1>
        <div>
            <table>
            
                <tbody>
                {produtos.map((item) => (
                    <tr key={item.id}>
                        <td>{item.nome}</td>
                        <td>{item.descricao}</td>
                        <td>{item.valorUnitario}</td>
                        <td>{item.imagem}</td>
                        <link to={`/carrinho`}>
                        <td><button onClick={() => {handlePost(produtos.id)}}>Adicionar ao carrinho</button></td>
                        </link>
                    </tr>
                ))}
                </tbody>
        </table>

        </div>
    </>


    )
}