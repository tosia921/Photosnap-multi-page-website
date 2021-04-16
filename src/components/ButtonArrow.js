import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/shared/desktop/arrow.svg'

// RENDER: <ButtonArrow>text</ButtonArrow> or <ButtonArrow secondary>text</ButtonArrow>

const ButtonArrow = ({ children, ...otherProps }) => (
    <StyledButton type="button" {...otherProps}>
        {children}
        <StyledArrow />
    </StyledButton>
)

export default ButtonArrow

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    color: ${props => (props.secondary ? `var(--white)` : `var(--black)`)};
    stroke: ${props => (props.secondary ? `var(--white)` : `var(--black)`)};
    transition: all 0.2s ease-in-out;

    &:hover {
        text-decoration: underline;
    }
`

const StyledArrow = styled(Arrow)`
    margin-left: 1rem;
`
