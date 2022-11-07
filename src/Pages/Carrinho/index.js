import React from "react";

export const Carrinho = () => {

  const objetoZerado = {
    "nome": "",
    "quantidade": 0,
    "valorUnitario": 0
  }

  const [produtos, setProdutos] = useState([
    { nome: "Produto 1", quantidade: 0, valorUnitario: 1 },
    { nome: "Produto 1", quantidade: 0, valorUnitario: 1 },
    { nome: "Produto 1", quantidade: 0, valorUnitario: 1 },
    { nome: "Produto 1", quantidade: 0, valorUnitario: 1 }
  ]);

  const [meuObjetoDePost, setMeuObjetoDePost] = useState({
    "nome": "",
    "quantidade": 0,
    "valorUnitario": 0,
    "id": 0
  })

  const chamadaAPI = () => {
    

    function listar(response) {
      console.log(response.data);
      setProdutos(response.data);
    }

    api.get("/produtos/").then(listar);
  };

  const handleDelete = (id) => {
    api.delete(`/produtos/${id}`).then(chamadaAPI)
  }

  const handlePost = () => {
    api.post("/produtos", meuObjetoDePost
    ).then(chamadaAPI)
    setMeuObjetoDePost(objetoZerado)
  }

  const handlePut = (produto) =>{
    api.put(`/produtos/${produto.id}`, {
      "nome": produto.nome,
      "quantidade": produto.quantidade + 1,
      "valorUnitario": produto.valorUnitario + 1,
    }).then(chamadaAPI)
  }

  const handleNomeChange = (e) => {
    setMeuObjetoDePost({...meuObjetoDePost, nome: e.target.value})
  }

  const handleQtdChange = (e) => {
    setMeuObjetoDePost({...meuObjetoDePost, quantidade: +e.target.value})
  }

  const handlevlUnitarioChange = (e) => {
    setMeuObjetoDePost({...meuObjetoDePost, valorUnitario: +e.target.value})
  }

  const handleEdit = (produto) => {
    setMeuObjetoDePost({nome: produto.nome, quantidade: produto.quantidade, valorUnitario: produto.valorUnitario, id: produto.id})
  }

  const handlePut2 = () => {
    api.put(`/produtos/${meuObjetoDePost.id}`, meuObjetoDePost).then(chamadaAPI)
    setMeuObjetoDePost(objetoZerado)
  }

  useEffect(() => {
    chamadaAPI()
  }, [])

                  

  return (
    <>
  <div className="Carrinho">
      <h1>Carrinho de Compras</h1>
      <div>
        <label>Nome: </label>
        <input value={meuObjetoDePost.nome} onChange={handleNomeChange}/>
        <br />
        <label>quantidade: </label>
        <input value={meuObjetoDePost.quantidade} onChange={handleQtdChange} type={'number'}/>
        <br />
        <label>valorUnitario: </label>
        <input value={meuObjetoDePost.valorUnitario} onChange={handlevlUnitarioChange} type={'number'}/>
      </div>
      <button onClick={chamadaAPI}>Consultar</button>
      <button onClick={handlePost}>Inserir</button>
      <button onClick={handlePut2}>Gravar edição</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Qtd</th>
            <th>Deletar</th>
            <th>Adicionar</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.valorUnitario}</td>
              <td><button onClick={() => {handleDelete(produto.id)}}>Delete</button></td>
              <td><button onClick={() => {handlePut(produto)}}>Adicionar</button></td>
              <td><button onClick={() => {handleEdit(produto)}}>Editar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};
