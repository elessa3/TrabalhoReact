import styled from "styled-components";

export const CardContainer = styled.span`
    flex:30%;
    display:flex ;
    flex-direction:column;
    
    background-color:  #FFFFFF;
    background-position: 0% 0%;
    color: #333333;
    border-right: 0.2px solid  #E6E6E6;
    border-bottom: 0.1px solid  #E6E6E6;
    
    gap: 0.7rem;
    padding-left: 0.5rem;
`

export const NomeItem = styled.h4`
    font-size: var(--tamanho-fonte-forms);
            font-weight: 500;

`
export const Preco = styled.p`
    font-size: var(--tamanho-fonte-forms);
            font-weight: 500;

`
export const Precoparc = styled.p`
     font-size: calc(var(--tamanho-font-forms) - .25rem);

`
export const BotaoAdicionar = styled.button`
    cursor: pointer;
        font-size: var(--tamanho-fonte-buttons);
        color: var(--cor-texto-claro);
        
        margin-top: 1rem;
        padding: .5rem 2rem;
        border-radius: .5rem;
        border: none;
    
        background-color: var(--cor-fundo-escuro);
        transition: background-color .4s;
        
        &:hover {
            background-color: var(--cor-fundo-escuro-alternativo);
        }
`
export const CardImagem = styled.div`
    background-color: black;
    width: 100%;
    height: 22.25rem;

`