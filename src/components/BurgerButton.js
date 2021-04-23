import React from 'react'
import styled from 'styled-components'

const BurgerButton = ({ burgerMenu, setBurgerMenu }) => (
    <Burger burgerMenu={burgerMenu} onClick={() => setBurgerMenu(!burgerMenu)}>
        <div className="burger" />
    </Burger>
)

export default BurgerButton

const Burger = styled.button`
    outline: none;
    height: 20px;
    width: 20px;
    border: 0px;
    padding: 0px;
    background: transparent;
    .burger {
        display: flex;
        outline: none;
        height: 20px;
        width: 20px;
        border: 0px;
        padding: 0px;
        background: transparent;
        transition: all 250ms ease-out;
        cursor: pointer;
    }

    .burger:before,
    .burger:after {
        content: '';
        width: 20px;
        height: 1.5px;
        position: absolute;
        background: #1a1a1a;
        transition: all 250ms ease-out;
        will-change: transform;
    }

    .burger:before {
        transform: ${props => (props.burgerMenu ? `translateY(12px) rotate(45deg)` : `translateY(12px)`)};
    }

    .burger:after {
        transform: ${props => (props.burgerMenu ? `translateY(12px) rotate(-45deg)` : `translateY(6px)`)};
    }
`
