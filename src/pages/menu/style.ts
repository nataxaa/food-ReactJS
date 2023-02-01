import styled from "styled-components";

export const Container = styled.div`

    display:flex ;
    flex-direction:column ;
    align-items:center ;
    height:100vh ;
    padding-inline:16rem;
    
    
    div.text{
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        h1{
            font-size:30px ;
        }
        p{
            width:30rem ;
            margin-top:1rem ;
        }
    }
    div.items{
        display:grid ;
        grid-template-columns:1.5fr 3fr ;
        gap:20px;
        margin-top:4rem ;
        div.sidebar{
            display:flex ;
            flex-direction:column ;
            align-items:center ;
            gap:8px;
            background-color:var(--pink-color) ;
            height:fit-content ;
            padding:30px 12px;
            border-radius:5px ;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            button{
                background-color:var(--white-color) ;
                padding:6px 15px ;
                width:15rem;
                font-size:17px ;
                font-weight:bold ;
                padding:10px  ;
                border-radius:5px ;
                border:none ;
            }

        }
        div.itens-area{
            display:grid ;
            grid-template-columns:1fr 1fr 1fr ;
            gap:15px;

            div.item{
                display:flex ;
                flex-direction:column ;
                align-items:center ;
                
                
                img{
                    width:18rem ;
                    height:15rem ;
                    border-radius:5px ;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }
                p{
                    display:flex ;
                    flex-direction:column ;
                    align-items:center ;
                    gap:6px;
                    padding:10px 10px ;
                    width:15rem ;
                    background-color:var(--pink-color) ;
                    border-radius:5px ;
                    position:relative ;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    top:-3rem ;
                    h2{
                        font-size:20px ;
                    }
                    span.descri{
                        font-size:14px ;
                        color:var(--black-color) ;
                        margin-bottom:20px ;
                        text-align:center ;
                    }
                    div.price-area{
                        display:flex ;
                        justify-content:space-around ;
                        width:100% ;
                        align-items:center ;
                        button{
                            background-color:transparent ;
                            border: 1px solid var(--orange-color) ;
                            border-radius:5px ;
                            padding:6px 8px ;
                        }
                    }
                    transition:0.2s ;
                }
                :hover{
                    p{
                        top:-5rem ;
                        background-color:var(--orange-color) ;
                    }
                }
            }
        }
    }

`