import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import ButtonArrow from './ButtonArrow'

const StoryCard = ({ title, author, date, image }) => (
    <Card>
        <GradientLine className="gradient-line" />
        <GatsbyImage image={image} className="image-background" alt="abc" />
        <div className="content">
            <p className="cardAuthorAndDate">{date}</p>
            <h2>{title}</h2>
            <p className="cardAuthorAndDate">by {author}</p>
            <div className="line-throught" />
            <ButtonArrow secondary className="card-button">
                READ STORY
            </ButtonArrow>
        </div>
    </Card>
)

export default StoryCard

const Card = styled.article`
    height: 37.5rem;
    width: 100%;
    position: relative;
    background-color: #000000;
    transition: transform 0.3s ease-in;

    &:hover {
        transform: translateY(-3rem);
        .gradient-line {
            display: block;
        }
    }

    .image-background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0.8;
    }
    .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 3;
        padding: 4.5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        h2 {
            color: var(--white);
            line-height: 2.5rem;
            font-size: 1.8rem;
            letter-spacing: 0px;
        }
        .line-throught {
            height: 1.5px;

            width: 100%;
            opacity: 0.3;
            border-radius: 1px;
            background-color: #979797;
            position: relative;
            margin: 1.5rem 0 2.5rem 0;
        }
        .card-button {
            display: flex;
            width: 100%;
            svg {
                margin-left: auto;
            }
        }
    }
`

const GradientLine = styled.div`
    width: 100%;
    height: 0.6rem;
    background: var(--MainAccentGradient);
    position: absolute;
    bottom: -0.6rem;
    left: 0;
    z-index: 500;
    display: none;
`
