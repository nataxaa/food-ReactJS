import styled from "styled-components";

export const Container = styled.div`
    margin-top:2rem ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;

    button.arrow{
        font-size:15px ;
    }
    h1{
        margin-bottom:3rem ;
    }
    div.team{
        display:grid ;
        grid-template-columns:1fr 1fr 1fr 1fr ;
        gap:20px;

        div.cart-team{
            display:flex ;
            flex-direction:column ;
            align-items:center ;
            p{
                background-color:var(--pink-color) ;
                width:13rem ;
                position:relative ;
                top:-7.5rem ;
                display:flex ;
                flex-direction:column ;
                align-items:center ;
                gap:5px;
                padding:10px 8px ;
                border-radius:5px ;
                div.social{
                    font-size:20px ;
                    display:inline-flex ;
                    gap:3px;
                    color:var(--orange-dark-color) ;
                }
            }
        }
    }

`