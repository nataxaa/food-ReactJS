import styled from "styled-components"


export const Container = styled.header`

    
    display:flex ;
    justify-content:space-evenly ;
    align-items:center ;
    padding:25px  0;
    border-bottom:1px solid var(--orange-color) ;
    
    img{
        width:100px ;
    }

    ul{
        list-style: none;
        display: flex ;
        gap:2rem;
        font-size:24px ;
        a{
            cursor: pointer;
            border-radius:5px ;
            transition:0.2s ;
            padding:2px 6px ;
            text-decoration:none ;
            color: var(--black-color) ;
            :hover{
                background-color: var(--orange-color) ;
                color:var(--white-color) ;
            }
        }
    }

    button{
        background-color:var(--white-color);
        border: 1px solid var(--orange-color) ;
        border-radius:5px ;
        padding: 12px 22px ;
        cursor: pointer;
        font-size:20px ;
        transition:0.2s ;
        :hover{
            background-color: var(--orange-color) ;
            color: var(--white-color) ;
        }
    }


`