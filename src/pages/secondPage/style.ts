import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    margin-bottom:3rem ;
    
    img{
        width:42rem ;
        height:40rem ;
    }

    div.area-itens{
        display:flex ;
        align-items:center ;
    }
    div.text-area{
        width:34rem ;
        font-size:18px ;
        p{
            color:var(--black-color) ;
            font-size:20px ;
            margin-top:1rem ;
            margin-bottom:20px ;
        }
            button.menu{
                background-color:var(--orange-color) ;
                border-radius:5px ;
                color:var(--white-color) ;
                border:1px solid var(--orange-color) ;
                cursor: pointer;
                font-size:20px ;
                padding:10px 20px ;
                transition: 0.2s ;
                :hover{
                    background-color:var(--white-color) ;
                    color: var(--h1-color) ;
                }
            }

        div.icons{
              
            display:flex ;
            align-items: center;
            gap:1rem;
            margin-top:20px ;
            
            button{
                display:flex ;
                flex-direction:column ;
                align-items:center ;
                gap:15px;
                padding: 20px 20px ;
                background-color:transparent ;
                border:1px solid var(--orange-color) ;
                border-radius:5px ;
                img{
                    width:30px ;
                    height:30px ;
                    font-size: 20px ;
                }
                p{
                    height:20px ;
                }
            }
              
        }
        
    }
`