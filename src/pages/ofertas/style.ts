import styled from "styled-components";
import img from '../../assets/rest.png'



export const Container = styled.div`

    background-image:url(${img}) ;
    background-position:center ;
    height:500px ;
    color: var(--white-color);
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content:center ;
    

    div{
        display:flex ;
        flex-direction:column ;
        gap:20px;
        h1{
            font-size:40px ;
        }
        p{
            font-size:20px ;
        }
        width:30rem ;
        button{
            padding:12px 20px ;
            border-radius:5px ;
            background-color:var(--orange-color) ;
            border:none ;
            color:var(--white-color) ;
            font-size:16px ;
            width:fit-content ;
        }
    }
    

`