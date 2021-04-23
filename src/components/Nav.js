import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/shared/logo.svg'
import BurgerButton from './BurgerButton'
import MobileDropDownMenu from './MobileDropDownMenu'

const Nav = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    console.log(burgerMenu)
    return (
        <>
            <StyledHeader>
                <nav>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <BurgerButton burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
                </nav>
            </StyledHeader>
            <MobileDropDownMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
        </>
    )
}

export default Nav

const StyledHeader = styled.header`
    height: 7.2rem;
    padding: 0 2.4rem;
    z-index: 500;
    background-color: var(--white);
    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 500;
    }
`
