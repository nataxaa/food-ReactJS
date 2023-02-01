import { Container } from "./style";
import logo from '../../assets/footer.png'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone, AiOutlineWhatsApp} from 'react-icons/ai'

export function Footer(){
    return(
        <Container id="contato">
            <img src={logo} alt="" />
            <div className="style">
            <div className="navegation">
                <h2>Navegação</h2>
                <span>Home</span>
                <span>Delivery</span>
                <span>Cardápio</span>
                <span>Contato</span>
            </div>

            <div className="contact">
                <h2>Contato</h2>
                <span><MdEmail/> xxxxx@gmail.com</span>
                <span><AiFillPhone/> 00 0000-0000</span>
                <span><AiOutlineWhatsApp/>+55 00 00000-0000</span>
            </div>

            <div className="letter">
                <h2>NEWS LETTER</h2>
                <input type="text" />
                <input type="text" />
                <button>ENVIAR</button>
            </div>
            </div>
        </Container>
    )
}