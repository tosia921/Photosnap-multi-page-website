import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonRectangle from './ButtonRectangle'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}
const DropDownAnimation = {
    hidden: { y: -300 },
    visible: {
        y: 0,
        transition: { duration: 1 },
    },
    exit: {
        y: -300,
        transition: { duration: 1 },
    },
}

const MobileDropDownMenu = ({ burgerMenu, setBurgerMenu }) => (
    <AnimatePresence exitBeforeEnter>
        {burgerMenu && (
            <Backdrop variants={backdrop} initial="hidden" animate="visible">
                <DropDownMenu variants={DropDownAnimation} initial="hidden" animate="visible" exit="exit">
                    <MobileMenuLinks>
                        <Link to="/stories" onClick={() => setBurgerMenu(false)}>
                            STORIES
                        </Link>
                        <Link to="/features" onClick={() => setBurgerMenu(false)}>
                            FEATURES
                        </Link>
                        <Link to="/pricing" onClick={() => setBurgerMenu(false)}>
                            PRICING
                        </Link>
                    </MobileMenuLinks>
                    <div className="line-throught" />
                    <ButtonRectangle className="dropdown-menu-button">GET AN INVITE</ButtonRectangle>
                </DropDownMenu>
            </Backdrop>
        )}
    </AnimatePresence>
)

export default MobileDropDownMenu

const DropDownMenu = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 25.5rem;
    background-color: var(--white);
    z-index: 300;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .line-throught {
        height: 1.5px;
        width: 80%;
        opacity: 0.3;
        border-radius: 1px;
        background-color: #979797;
    }
    .dropdown-menu-button {
        font-size: 1.5rem;
        width: 80%;
    }
`
const Backdrop = styled(motion.div)`
    position: fixed;
    top: 7.2rem;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 300;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`
const MobileMenuLinks = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--black);
    font-size: 1.6rem;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        color: inherit;
        text-decoration: none;
    }
    a:not(:last-child) {
        margin-bottom: 2.6rem;
    }
`
