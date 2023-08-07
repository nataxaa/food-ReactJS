import { Container } from "./style";
import imghome from '../../assets/imghome.png'
import layer from '../../assets/layer.png'

export function Home(){
    return(
        <Container id="home">
            <div className="items-home">
            <div className="text-home">
                <h1><span> Reserve </span> a sua mesa e <span> Faça</span> o seu pedido.</h1>
                <p>
                    Coma a comida dos sonhos e com preço acessivel.
                    Não quer sair de casa? Realizamos entrega, chegamos em minutos.
                </p>
                <div className="area-buttons">
                    <button className="menu">VER CARDÁPIO</button>
                    <button className="now">PEDIR AGORA</button>
                </div>
            </div>
            <div style={{position:'relative'}}>
                <img className="layer" src={layer} alt="" />
                <img className="first" src={imghome} alt="" />
            </div>
            
            </div>
        </Container>
    )
}