import React from 'react'
import styled from 'styled-components'

// RENDER: <ButtonRectangle>text</ButtonRectangle> or <ButtonRectangle secondary>text</ButtonRectangle>

const ButtonRectangle = ({ children, ...otherProps }) => (
    <StyledButton type="button" {...otherProps}>
        {children}
    </StyledButton>
)

export default ButtonRectangle

const StyledButton = styled.button`
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 1.5rem 2.5rem;
    border: none;
    display: inline-block;
    color: ${props => (props.secondary ? `var(--black)` : `var(--white)`)};
    background-color: ${props => (props.secondary ? `var(--white)` : `var(--black)`)};
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--gray);
        color: var(--black);
    }
`
