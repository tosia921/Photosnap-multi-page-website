import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '../assets/shared/logoFooter.svg'
import FacebookSVG from '../assets/shared/facebook.svg'
import YoutubeSVG from '../assets/shared/youtube.svg'
import TwitterSVG from '../assets/shared/twitter.svg'
import PinerestSVG from '../assets/shared/pinterest.svg'
import InstagramSVG from '../assets/shared/instagram.svg'
import ButtonArrow from './ButtonArrow'

const Footer = () => (
    <FooterContainer>
        <Logo />
        <div className="social-links">
            <FacebookSVG />
            <YoutubeSVG />
            <TwitterSVG />
            <PinerestSVG />
            <InstagramSVG />
        </div>
        <div className="footer-nav">
            <Link to="/">HOME</Link>
            <Link to="/stories">STORIES</Link>
            <Link to="/features">FEAURES</Link>
            <Link to="/pricing">PRICING</Link>
        </div>
        <ButtonArrow secondary>GET AN INVITE</ButtonArrow>
        <p>Copyright 2019. All Rights Reserved</p>
    </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.5rem 0;

    .social-links {
        margin: 3rem 0 5rem 0;
        svg:not(:last-child) {
            margin-right: 1.3rem;
        }
    }

    .footer-nav {
        color: var(--white);
        font-size: 1.6rem;
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 12.5rem;
        a {
            color: inherit;
            text-decoration: none;
        }
        a:not(:last-child) {
            margin-bottom: 2.6rem;
        }
    }

    button {
        margin-bottom: 4rem;
    }
`
