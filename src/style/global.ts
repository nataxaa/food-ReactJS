import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

:root{
  --orange-color: #FF5A00;
  --black-color: #262626;
  --h1-color: #000000;
  --white-color: #FFFFFF;
  --pink-color: #FFBD99;
  --orange-dark-color: #802D00;
}


*{
  margin: 0;
  padding: 0;
}

html{
        scroll-behavior:smooth;
}

body{
  font-family: 'Rubik', sans-serif;
}


`