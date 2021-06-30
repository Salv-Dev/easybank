import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Public Sans', sans-serif;
        font-size:  18px;
    }
`;

export default GlobalStyles;