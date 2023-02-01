import { Container } from "./style";
import image from '../../assets/prato.png'

export function Ofertas(){
    return(
        <Container id="ofertas">
            <div>
                <h1>Grandes ofertas do dia.</h1>
                <p>
                    Venha nos visitar e experimente a nossa culinária incrível.
                    não perca a chance de aproveitar as nossas grandes ofertas do dia!
                    Aproveite os melhores pratos do nosso cardápio com preços imperdíveis.
                </p>
                <button>VER CARDÁPIO</button>
            </div>
            <img src={image} alt="" />
        </Container>
    )
}