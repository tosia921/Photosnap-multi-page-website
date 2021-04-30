import React from 'react'
import styled from 'styled-components'
import ButtonRectangle from './ButtonRectangle'
// Media Queries
import media from '../styles/MediaQueries'

// Price Card Component, pass 'secondary' prop for PRO plan design

const PriceCard = ({ secondary, name, text, priceM, priceY, paymentOption }) => (
    <StyledPriceCard secondary={secondary}>
        {secondary && <GradientLine />}
        <h2 className=".smaller-h2">{name}</h2>
        <p className="content-card">{text}</p>
        <div className="price-container">
            <p className="price">$ {paymentOption ? priceM : priceY}</p>
            <p className="pay-option">per {paymentOption ? 'month' : 'year'}</p>
        </div>
        {secondary ? (
            <ButtonRectangle secondary className="button">
                PICK PLAN
            </ButtonRectangle>
        ) : (
            <ButtonRectangle className="button">PICK PLAN</ButtonRectangle>
        )}
    </StyledPriceCard>
)

export default PriceCard

const StyledPriceCard = styled.div`
    width: 100%;
    height: 41rem;
    background-color: ${props => (props.secondary ? `var(--black)` : `var(--primaryCardBackground)`)};
    color: ${props => (props.secondary ? `var(--white)` : `var(--black)`)};
    margin-bottom: 2.5rem;
    padding: 5rem 4rem;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        margin-bottom: 2rem;
        letter-spacing: 0;
        grid-area: price-name;
        ${media.tablet`
            margin-bottom: 2rem;
            align-self: top;
        `}
    }
    .content-card {
        text-align: center;
        margin-bottom: 4rem;
        grid-area: card-content;
        ${media.tablet`
            text-align: left;
            margin-bottom: 2rem;
        `}
        ${media.desktopLarge`
            text-align: center;
        `}
    }
    .price-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-area: price-container;

        .price {
            font-weight: 700;
            font-size: 4rem;
            letter-spacing: 4px;
            line-height: 4.8rem;
            margin-bottom: 0.5rem;
            color: inherit;
        }
        .pay-option {
            margin-bottom: 4rem;
            ${media.tablet`
            margin-bottom: 0;
            ${media.desktopLarge`
                margin-bottom: 4rem;
            `}
        `}
        }
        ${media.tablet`
                margin-top: 1.5rem;
                justify-self: end;
        `}
    }
    .button {
        grid-area: button;
    }
    ${media.tablet`
        padding: 4rem 3rem;
        height: 27rem;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 28% 44% 28%;
        grid-template-areas:
            "price-name price-container"
            "card-content ."
            "button .";
    `}
    ${media.desktopLarge`
        height: ${props => (props.secondary ? `47rem` : `40rem`)};
        width: 35rem;
        display: flex;
        grid-template-columns: none;
        grid-template-rows: none;
        grid-template-areas: none;
    `}
`
const GradientLine = styled.div`
    width: 100%;
    height: 0.6rem;
    background: var(--MainAccentGradient);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
    ${media.tablet`
        height: 100%;
        width: 0.6rem;
        top: 0;
        left: 0;
    `}
    ${media.desktopLarge`
        width: 100%;
        height: 0.6rem;
        top: 0;
        left: 0;
    `}
`
