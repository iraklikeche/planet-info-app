import { createGlobalStyle } from "styled-components";
import stars from "../assets/background-stars.svg";

const GlobalStyles = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

html{
  font-size:62.5%
}

body{
    background-color:${(props) => props.theme.background};
    font-family:"Antonio", "Spartan", sans-serif;
    background-color:${(props) => props.theme.colors.darkBlue};
     background-image: url(${stars}); 
     background-position: center;
     background-repeat: no-repeat;
    background-size: cover;
}

`;

export default GlobalStyles;
