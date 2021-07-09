import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: 'hsl(233, 26%, 24%)',
        secondary: 'hsl(136, 65%, 51%)',
        tertiary: 'hsl(192, 70%, 51%)',
        neutral: {
            primary: 'hsl(233, 8%, 62%)',
            secondary: 'hsl(220, 16%, 96%)',
            tertiary: 'hsl(0, 0%, 98%)',
            white: 'hsl(0, 0%, 100%)'
        }
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}