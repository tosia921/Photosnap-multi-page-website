import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/shared/logo.svg'
import BurgerMenu from './BurgerMenu'

const Nav = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    return (
        <StyledHeader>
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
            </nav>
        </StyledHeader>
    )
}

export default Nav

const StyledHeader = styled.header`
    height: 7.2rem;
    padding: 0 2.4rem;
    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
