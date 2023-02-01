import styled from "styled-components";

export const Container = styled.div`

    background-color:var(--orange-color) ;
    width:100% ;
    display:flex ;
    flex-direction:row ;
    gap:3rem;
    justify-content:space-evenly ;
    align-items:center ;
    height:18rem ;
    color: var(--white-color);

    img{
        width:12rem ;
        height:12rem ;
    }
    div.style{
        display:flex ;
        gap:40px;
    }
    div.navegation{
        display:flex ;
        flex-direction:column ;
        align-items:left ;
        h2{
            margin-bottom:10px ;
        }
    }
    div.contact{
        display:flex ;
        flex-direction:column ;
        align-items:left ;
        
        h2{
            margin-bottom:10px ;
        }
    }

    div.letter{
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        width:15rem ;
        h2{
            margin-bottom:10px ;
        }
        input{
            background-color:var(--white-color) ;
            padding: 8px 5px ;
            border:none ;
            border-radius:5px ;
            margin-bottom:5px ;
            width:100% ;
        }
        button{
            width: 100%;
            border:none ;
            border-radius:5px ;
            padding:6px 10px ;
            background-color:var(--black-color) ;
            color:var(--white-color) ;
        }
    }

`