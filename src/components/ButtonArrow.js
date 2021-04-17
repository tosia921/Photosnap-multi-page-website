import React from 'react'
import styled from 'styled-components'
import Arrow from '../assets/shared/arrow.svg'
// RENDER: <ButtonArrow>text</ButtonArrow> or <ButtonArrow secondary>text</ButtonArrow>

const ButtonArrow = ({ children, ...otherProps }) => (
    <StyledButton type="button" {...otherProps}>
        <span>{children}</span>
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
    span {
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        span {
            margin-right: 1rem;
            text-decoration: underline;
            color: white;
        }
    }
`

const StyledArrow = styled(Arrow)`
    margin-left: 0.5rem;
`
