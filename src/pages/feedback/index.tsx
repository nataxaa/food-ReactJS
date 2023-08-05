import { Container } from "./style";
import layer from '../../assets/feedback.png'
import frango from '../../assets/frango.png'
import perfil from '../../assets/perfil.png'

export function Feedback(){
    return(
        <Container>
            <img className="layer" src={layer} alt="" />
            <img className="frango" src={frango} alt="" />
            <div className="feedback">
                <h1>Feedback dos clientes</h1>
                <div className="feed-text">

                <div className="card">
                        <div className="title">
                            <img src={perfil} alt="" />
                            <div>
                                <h2>Afonso</h2>
                                <span>Administrador</span>                    
                            </div>
                        </div>
                        <p>
                            "Não posso deixar de elogiar. A comida era incrível e o serviço foi impecável.
                             Definitivamente voltarei novamente."
                        </p>
                    </div>

                    <div className="card">
                        <div className="title">
                            <img src={perfil} alt="" />
                            <div>
                                <h2>Afonso</h2>
                                <span>Administrador</span>                    
                            </div>
                        </div>
                        <p>
                            "Não posso deixar de elogiar. A comida era incrível e o serviço foi impecável.
                             Definitivamente voltarei novamente."
                        </p>
                    </div>

                   
                </div>
            </div>
        </Container>
    )
}