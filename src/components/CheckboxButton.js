import React from 'react'
import styled from 'styled-components'

const CheckboxButton = ({ ...otherProps }) => <StyledCheckbox type="checkbox" name="" {...otherProps} />

export default CheckboxButton

const StyledCheckbox = styled.input`
    position: relative;
    width: 64px;
    height: 32px;
    appearance: none;
    background-color: var(--gray);
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease-in-out;
    &:checked {
        background-color: var(--black);
    }
    &:checked:before {
        background-color: var(--white);
        left: 35px;
    }
    &:before {
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        top: 4px;
        left: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        background-color: var(--black);
        transition: all 0.5s ease-in-out;
    }
`
