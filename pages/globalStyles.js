import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Public Sans', sans-serif;
        font-size:  18px;
        background-color: hsl(0, 0%, 98%);
    }
`;

export default GlobalStyles;