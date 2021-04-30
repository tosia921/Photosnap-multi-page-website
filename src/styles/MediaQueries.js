import { css } from 'styled-components'

const sizes = {
    desktopLarge: 1400,
    desktop: 1024,
    tablet: 768,
}
export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}px) {
            ${css(...args)};
        }
    `
    return acc
}, {})
