// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";
// import { useState } from "react";
// import { fazerLogin } from "../service/testService";

// const verificaLogin = () => {
//   const usuarioLocalStorage = localStorage.getItem("info_usuario_usuario");
//   const senhaLocalStorage = localStorage.getItem("info_usuario_senha");

//   return usuarioLocalStorage && senhaLocalStorage;
// };

// const LoginFormikYup = () => {
//   const [estaLogado, setEstaLogado] = useState(verificaLogin());

//   // UseEffect é uma função é que é disparada no carregamento da página e toda vez
//   // que um estado dentro do colchetes for autalizado
//   // Use effects são comumente usados para fazer chamadas a API
//   // useEffect(() => {
//   //   if (estaLogado) {
//   //     alert("Seja bem vindo, " + localStorage.getItem("info_usuario_usuario"));
//   //   } else {
//   //     alert("Por favor, faça login. Nunca te pedi nada");
//   //   }
//   // }, [estaLogado, formik.values.usuario]);

//   const logar = (usuario, senha) => {
//     // localStore é uma memória do navegador
//     // Você consegue salvar valores com a função setItem, passando uma chave e um valor
//     localStorage.setItem("info_usuario_usuario", usuario);
//     localStorage.setItem("info_usuario_senha", senha);

//     fazerLogin()
//       .then((resposta) => localStorage.setItem("info_usuario_token", resposta?.token))
//       .catch(() => localStorage.removeItem("info_usuario_token"));
//     setEstaLogado(true);
//   };

//   const deslogar = () => {
//     // localStore é uma memória do navegador
//     // Você consegue remover valores com a função removeItem, passando uma chave
//     localStorage.removeItem("info_usuario_usuario");
//     localStorage.removeItem("info_usuario_senha");
//     setEstaLogado(false);
//     formik.values.usuario = "";
//     formik.values.senha = "";
//   };

//   const formik = useFormik({
//     initialValues: {
//       usuario: "",
//       senha: "",
//     },
//     validationSchema: Yup.object({
//       usuario: Yup.string()
//         .min(3, "O campo deve possuir pelo menos 3 letras")
//         .max(25, "O campo deve possuir no máximo 25 letras")
//         .required("Usuário é obrigatório"),
//       senha: Yup.string()
//         .min(8, "O campo deve possuir pelo menos 8 letras")
//         .max(16, "O campo deve possuir no máximo 16 letras")
//         .required("Senha é obrigatória"),
//     }),
//     onSubmit: () => logar(formik.values.usuario, formik.values.senha),
//   });

//   if (estaLogado) {
//     return (
//       <button type="click" onClick={deslogar}>
//         Deslogar
//       </button>
//     );
//   }

//   return (
//     <FormLoginStyle onSubmit={formik.handleSubmit}>
//       <label>
//         Usuário:
//         <input value={formik.values.usuario} onChange={formik.handleChange} onBlur={formik.handleBlur} name="usuario" />
//       </label>
//       <MensagemErroUsuario foiTocado={formik.touched["usuario"]} erros={formik.errors["usuario"]} />
//       <label>
//         Senha:
//         <input value={formik.values.senha} onChange={formik.handleChange} onBlur={formik.handleBlur} name="senha" />
//       </label>
//       {formik.touched["senha"] && formik.errors["senha"] ? <p>{formik.errors["senha"]}</p> : <></>}
//       <button type="submit">Logar</button>
//     </FormLoginStyle>
//   );
// };

// const MensagemErroUsuario = (props) => {
//   const { foiTocado, erros } = props;
//   if (foiTocado && erros) {
//     return <p>{erros}</p>;
//   }
//   return <></>;
// };

// const FormLoginStyle = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// export default LoginFormikYup;
