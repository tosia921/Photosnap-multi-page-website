import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../assets/shared/logo.svg'

const Nav = () => (
    <StyledHeader>
        <nav>
            <Link to="/">
                <Logo />
            </Link>
            <div className="burger-menu">
                <div />
                <div />
            </div>
        </nav>
    </StyledHeader>
)

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
