import styled from "styled-components";

export const Container = styled.div`

    display:flex ;
    justify-content:center ;
    gap:30px;
    margin-top:4rem ;
    margin-bottom:3rem ;
    
    div.items-home{
        display:flex ;
        align-items: center;
    }

    div.text-home{
        width:34rem ;
        font-size:25px ;
        span{
            color:var(--orange-color) ;
        }
        p{
            color:var(--black-color) ;
            font-size:20px ;
            margin-top:1rem ;
        }
        div.area-buttons{
            display:flex ;
            gap:20px;
            align-items:center ;
            margin-top:2rem ;
            button.menu{
                background-color:var(--orange-color) ;
                border-radius:5px ;
                color:var(--white-color) ;
                border:1px solid var(--orange-color) ;
                cursor: pointer;
                font-size:20px ;
                padding:15px 20px ;
                transition: 0.2s ;
                :hover{
                    background-color:var(--white-color) ;
                    color: var(--h1-color) ;
                }
            }
            button.now{
                background-color:transparent;
                border-radius:5px ;
                border:1px solid var(--orange-color) ;
                color:var(--h1-color) ;
                cursor: pointer;
                font-size:20px ;
                padding:15px 20px ;
                transition: 0.2s ;
                :hover{
                    background-color:var(--orange-color) ;
                    color:var(--white-color) ;
                }

            }
        }
    }

    .layer{  
        width:32rem ;
    }

    img.first{
        position:absolute ;
        top:12.5rem ;
        right:14rem ;
        width:33rem ;
    }

`