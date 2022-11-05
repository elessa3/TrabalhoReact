import GaleriaDeCards from "../../components/GaleriaDeCards"
import Header from "../../components/Header"
import FooterPag from "../../components/FooterPag"
import Footer from "../../components/Footer"
import { Titulo } from "./style"

const temaPadrao = "white"
const Home = (props) => {
    const {variante, tema}= props
    return (
        <div>
        {/* <Titulo tema={tema}> Home - {variante ?? "Todas as categorias"}</Titulo> */}
        {/* <div>{tema ?? temaPadrao}</div> */}
        <Header />
        <GaleriaDeCards />
        <FooterPag />
        <Footer />
        </div>
    )
}
export default Home
