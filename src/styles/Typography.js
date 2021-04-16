import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
  html {
    font-family: 'DM Sans', sans-serif; 
  }
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: 4.17px;
    text-transform: uppercase;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem; 
  }
`

export default Typography
