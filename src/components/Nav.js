import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/shared/logo.svg'
import BurgerButton from './BurgerButton'
import MobileDropDownMenu from './MobileDropDownMenu'
import ButtonRectangle from './ButtonRectangle'
// Media Queries
import media from '../styles/MediaQueries'

const Nav = () => {
    const [burgerMenu, setBurgerMenu] = useState(false)
    return (
        <>
            <StyledHeader>
                <nav>
                    <Link to="/" onClick={() => setBurgerMenu(false)}>
                        <Logo />
                    </Link>
                    <BurgerButton burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
                    <Menu>
                        <Link to="/stories" activeStyle={{ color: 'var(--LinkActiveHeader)' }}>
                            STORIES
                        </Link>
                        <Link to="/features" activeStyle={{ color: 'var(--LinkActiveHeader)' }}>
                            FEATURES
                        </Link>
                        <Link to="/pricing" activeStyle={{ color: 'var(--LinkActiveHeader)' }}>
                            PRICING
                        </Link>
                    </Menu>
                    <ButtonRectangle className="button-nav-desktop">GET AN INVITE</ButtonRectangle>
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

        .button-nav-desktop {
            display: none;
            ${media.tablet`
                display: block;
            `}
        }
    }
`

const Menu = styled.ul`
    color: var(--black);
    font-size: 1.6rem;
    letter-spacing: 2px;
    display: none;
    align-items: center;
    font-weight: 600;
    ${media.tablet`
        display: flex;
    `}
    a {
        color: inherit;
        text-decoration: none;
    }
    a:not(:last-child) {
        margin-right: 3.8rem;
    }
`
