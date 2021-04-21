import { createGlobalStyle } from 'styled-components'
import media from './MediaQueries'

const Typography = createGlobalStyle`
  html {
    font-family: 'DM Sans', sans-serif; 
  }
  h1,h2 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 3.3px;
      ${media.tablet`
      font-size: 4rem;
      line-height: 4.8rem;
      letter-spacing: 4.17px;
    `}
  }
  .smaller-h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.5rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
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
    color: #999999;
  }
  .cardAuthorAndDate {
    color: var(--white);
    font-size: 1.3rem;
  }
`

export default Typography
