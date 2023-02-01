import { Container } from "./style";
import imagem from '../../assets/logo.png'

export function Header(){
    return(
        <Container>
            <img src={imagem} alt="Imagem de um logo."/>
            <ul>
                <a href="">Home</a>
                <a href="#delivery">Delivery</a>
                <a href="#menu">Cardápio</a>
                <a href="#contato">Contato</a>
            </ul>
            <button>Pedir Agora</button>
        </Container>
    )
}