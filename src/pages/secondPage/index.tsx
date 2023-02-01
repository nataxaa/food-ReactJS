import { Container } from "./style";
import image from '../../assets/comida.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'


export function SecondPage(){
    return(
        <Container id="delivery">
            <div className="area-itens">
                <img src={image} alt="" />
                <div className="text-area">
                    <h1>Entregamos nas seguintes regiões: Jaboatão dos Guararapes, Recife e Cabo.</h1>
                    <p>
                        Uma variedade de alimentos com menos sal, açucares e totalmente naturais, sem
                       adições de industrializados, é essencial para uma comida saborosa e saudável.
                    </p>
                    <button className="menu">VER CARDÁPIO</button>
                    <div className="icons">
                        <button>
                            <img src={icon1} alt="" />
                            <p>Pedidos online</p>
                        </button>
                        <button>
                            <img src={icon2} alt="" />
                            <p>Reservas</p>
                        </button>
                        <button>
                            <img src={icon3} alt="" />
                            <p>Super chefs</p>
                        </button>
                        <button>
                            <img src={icon4} alt="" />
                            <p>Serviços</p>
                        </button>
                    </div>

                </div>
            </div>
        </Container>
    )
}