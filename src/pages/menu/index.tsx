import { Container } from "./style";
import img from '../../assets/hamburger.jpg'

export function Menu(){
    return(
        <Container id="menu">
            <div className="text">
                <h1>Temos diversos sabores para o seu paladar.</h1>
                <p>Navegue pelo nosso cardápio. Temos desde os grandes pratos brasileiros até todas as culinárias orientais e árabes. </p>
            </div>

            <div className="items">
                <div className="sidebar">
                    <button>Pizza</button>
                    <button>Hamburger</button>
                    <button>Bolos/Doces</button>
                    <button>Bebidas</button>
                </div>
                <div className="itens-area">
                    <div className="item">
                        <img src={img} alt="" />
                        <p>
                        <h2>Hambuguer Splet</h2>
                        <span className="descri">2x carne 80g, Pão especial da casa, Salada, Queijo coalho e ovo.</span>
                        <div className="price-area">
                            <span>R$ 28,70</span>
                            <button>Pedir</button>
                        </div>
                        </p>
                    </div>

                    <div className="item">
                        <img src={img} alt="" />
                        <p>
                        <h2>Hambuguer Splet</h2>
                        <span className="descri">2x carne 80g, Pão especial da casa, Salada, Queijo coalho e ovo.</span>
                        <div className="price-area">
                            <span>R$ 28,70</span>
                            <button>Pedir</button>
                        </div>
                        </p>
                    </div>

                    <div className="item">
                        <img src={img} alt="" />
                        <p>
                        <h2>Hambuguer Splet</h2>
                        <span className="descri">2x carne 80g, Pão especial da casa, Salada, Queijo coalho e ovo.</span>
                        <div className="price-area">
                            <span>R$ 28,70</span>
                            <button>Pedir</button>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}