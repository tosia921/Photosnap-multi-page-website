import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --MainAccentGradient: linear-gradient(45deg, rgba(255,197,147,1) 0%, rgba(188,113,152,1) 50%, rgba(90,119,255,1) 100%);
    --black: #000000;
    --gray: #DFDFDF;
    --white: #FFFFFF;
  }

  * { 
  box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  
`

export default GlobalStyles
