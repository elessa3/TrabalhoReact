import { NomeItem, CardContainer, CardImagem, Preco, Precoparc, BotaoAdicionar } from "./Card.style"

const Card = () => {
    return (
        
        <CardContainer>
            <CardImagem />
            <NomeItem>Camiseta irada</NomeItem>
            <Preco>R$100,00</Preco>
            <Precoparc>ou em 4x de R$25,00</Precoparc>
            <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
        </CardContainer>
    )
}
export default Card