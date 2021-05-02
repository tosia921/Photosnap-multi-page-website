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
// Media Queries
import media from '../styles/MediaQueries'

const Footer = () => (
    <FooterContainer>
        <div className="left-side">
            <Logo className="Logo" />
            <div className="social-links">
                <FacebookSVG />
                <YoutubeSVG />
                <TwitterSVG />
                <PinerestSVG />
                <InstagramSVG />
            </div>
            <div className="footer-nav">
                <Link to="/" activeStyle={{ color: 'var(--LinkActiveFooter)' }}>
                    HOME
                </Link>
                <Link to="/stories" activeStyle={{ color: 'var(--LinkActiveFooter)' }}>
                    STORIES
                </Link>
                <Link to="/features" activeStyle={{ color: 'var(--LinkActiveFooter)' }}>
                    FEAURES
                </Link>
                <Link to="/pricing" activeStyle={{ color: 'var(--LinkActiveFooter)' }}>
                    PRICING
                </Link>
            </div>
        </div>
        <div className="right-side">
            <ButtonArrow secondary>GET AN INVITE</ButtonArrow>
            <p>Copyright 2019. All Rights Reserved</p>
        </div>
    </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.5rem 0;

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        height: 28.5rem;
    `}
    ${media.desktop`
        height: 25rem;
    `}

    .left-side {
        ${media.tablet`
            padding: 6rem 4rem;
            width: 50%;
            height: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 10% 80% 10%;
            justify-items: start;
            align-items: start;
            grid-template-areas: 
                "logo-footer"
                "nav-footer"
                "links-footer";
        `}
        ${media.desktop`
            padding: 6.5rem 0 6.5rem 15rem;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 10% 80% 10%;
            grid-template-areas: 
                "logo-footer nav-footer"
                ". nav-footer"
                "links-footer nav-footer";
        `}
        .social-links {
            grid-area: links-footer;
            margin: 3rem 0 5rem 0;
            ${media.tablet`
                margin: 0;
            `}
            svg:not(:last-child) {
                margin-right: 1.3rem;
            }
        }

        .footer-nav {
            color: var(--white);
            font-size: 1.2rem;
            letter-spacing: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 12.5rem;
            grid-area: nav-footer;

            ${media.tablet`
                flex-direction: row;
                height: fit-content;
                padding-top: 3rem;
            `}
            ${media.desktop`
                height: 100%;
                width: 100%;
                margin-bottom: 0;
                flex-direction: column;
                justify-items: center;
                padding-top: 0rem;
                align-items: start;
                padding-left: 2rem;
            `}

            a {
                color: inherit;
                text-decoration: none;
            }
            a:not(:last-child) {
                margin-bottom: 2.6rem;
                ${media.tablet`
                    margin-bottom: 0;
                    margin-right: 1rem;
                `}
                ${media.desktop`
                    margin-bottom: 2.5rem;
                    margin-right: 0;
                `}
            }
        }
        .Logo {
            grid-area: logo-footer;
        }
    }
    .right-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        ${media.tablet`
            width: 50%;
            height: 100%;
            padding: 6rem 4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;

        `}
        ${media.desktop`
            padding: 6.5rem 15rem 6.5rem 0;
            
        `}
        button {
            margin-bottom: 4rem;
        }
    }
`
