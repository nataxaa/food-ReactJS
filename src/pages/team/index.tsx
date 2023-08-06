import { Container } from "./style";
import img1 from '../../assets/time1.png'

import {AiOutlineWhatsApp, AiFillFacebook, AiFillInstagram, AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'


export function Team(){
    return(
        <Container id="team">
            <h1>Nosso Time</h1>
            <div className="team">
                <div className="cart-team">
                    <img src={img1} alt="" />
                    <p>
                        <h2>Arthur</h2>
                        <span>Auxiliar de cozinha</span>
                        <div className="social">
                            <AiOutlineWhatsApp/>
                            <AiFillFacebook/>
                            <AiFillInstagram/>
                        </div>
                    </p>
                </div>
                <div className="cart-team">
                    <img src={img1} alt="" />
                    <p>
                        <h2>Arthur</h2>
                        <span>Auxiliar</span>
                        <div className="social">
                            <AiOutlineWhatsApp/>
                            <AiFillFacebook/>
                            <AiFillInstagram/>
                        </div>
                    </p>
                </div>
                <div className="cart-team">
                    <img src={img1} alt="" />
                    <p>
                        <h2>Arthur</h2>
                        <span>Auxiliar</span>
                        <div className="social">
                            <AiOutlineWhatsApp/>
                            <AiFillFacebook/>
                            <AiFillInstagram/>
                        </div>
                    </p>
                </div>
                <div className="cart-team">
                    <img src={img1} alt="" />
                    <p>
                        <h2>Arthur</h2>
                        <span>Auxiliar</span>
                        <div className="social">
                            <AiOutlineWhatsApp/>
                            <AiFillFacebook/>
                            <AiFillInstagram/>
                        </div>
                    </p>
                </div>
            </div>
        </Container>
    )
}