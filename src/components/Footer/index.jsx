
import { Rodape } from "./style";

function Footer() {
  return (
    <Rodape>
      <span className="direitos-de-uso">
        <span>@2022 Todos os direitos reservados |</span> <span>Desenvolvido por Grupo1</span>
      </span>
      <div className="logo-footer">
        <img
          src=".."
          className="logo-footer"
          alt="Logo com imagem de um carrinho com o nome do site e o numero 1"
        />
      </div>
    </Rodape>
  );
}

export default Footer;