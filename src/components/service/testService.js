import client from "../clients/testClient";

export const getProdutos = async () => {
  return client
    .get("/produtos")
    .then((resposta) => {
      return resposta.data;
    })
    .catch((excecao) => {
      console.error(excecao?.message);
      return [];
    });
};

export const getCamisasBasicas = async () => {
  return client
    .get("/produtos?categoria=camisas_basicas")
    .then((resposta) => {
      return resposta.data;
    })
    .catch((excecao) => {
      console.error(excecao?.message);
      return [];
    });
};

export const getCamisasTematicas = async () => {
  return client
    .get("/produtos?categoria=camisas_tematicas")
    .then((resposta) => {
      return resposta.data;
    })
    .catch((excecao) => {
      console.error(excecao?.message);
      return [];
    });
};

export const getCamisasFitness = async () => {
  return client
    .get("/produtos?categoria=camisas_fitness")
    .then((resposta) => {
      return resposta.data;
    })
    .catch((excecao) => {
      console.error(excecao?.message);
      return [];
    });
};

export const fazerLogin = async (usuario, senha) => {
  return client
    .post("/login", {
      usuario: usuario,
      senha: senha,
    })
    .then((resposta) => {
      return resposta.data;
    })
    .catch((excecao) => {
      console.error(excecao?.message);
      return {};
    });
};

// export const efetuarCompra = async (dadosPedido) => {
//   return client
//     .post(
//       "/compras",
//       {
//         pedido: {
//           produto: "camisa x",
//           quantide: "y",
//           comprador: "190241259",
//           endereco: "rqwotiwqtow"
//         },
//       },
//       {
//         headers: {
//           Authorization: `JWT ${localStorage.getItem("info_usuario_token")}`,
//         },
//       }
//     )
//     .then((resposta) => {
//       return resposta.data;
//     })
//     .catch((excecao) => {
//       console.error(excecao?.message);
//       return {};
//     });
// };
