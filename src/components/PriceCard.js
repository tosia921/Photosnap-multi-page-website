import React from 'react'
import styled from 'styled-components'
import ButtonRectangle from './ButtonRectangle'

// Price Card Component, pass 'secondary' prop for PRO plan design

const PriceCard = ({ secondary, name, text, priceM, priceY, paymentOption }) => (
    <StyledPriceCard secondary={secondary}>
        {secondary && <GradientLine />}
        <h2 className=".smaller-h2">{name}</h2>
        <p className="content-card">{text}</p>
        <p className="price">$ {paymentOption ? priceM : priceY}</p>
        <p className="pay-option">per {paymentOption ? 'month' : 'year'}</p>
        {secondary ? (
            <ButtonRectangle secondary>PICK PLAN</ButtonRectangle>
        ) : (
            <ButtonRectangle>PICK PLAN</ButtonRectangle>
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
    }
    .content-card {
        text-align: center;
        margin-bottom: 4rem;
    }
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
    }
`
const GradientLine = styled.div`
    width: 100%;
    height: 0.6rem;
    background: var(--MainAccentGradient);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 500;
`
