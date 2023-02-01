import styled from "styled-components";

export const Container = styled.div`

display:flex ;
width:60vw;

div.feedback{
    position:relative ;
    right:24rem ;
    h1{
        margin-bottom:1rem ;
    }
}

img.layer{
    height:28rem ;
    width:40rem ;
}
img.frango{
    position:relative ;
    right:25rem ;
}
div.feed-text{
    display:grid ;
    grid-template-columns:1fr 1fr 1fr ;
    gap:10px;

    div.card{
        background-color:var(--pink-color) ;
        padding:10px 1rem 5rem;
        display:flex ;
        flex-direction:column ;
        border-radius:5px ;
        width:13rem ;

        div.title{
            display:flex ;
            gap:10px;
            margin-bottom:20px ;
        }

        div.title{
            span{
                font-size:14px ;
            }
        }
        p{
            font-size:10px ;
            width:fit-content ;
        }
    }


}

`