import React from 'react'
import styled from 'styled-components'
import ButtonRectangle from './ButtonRectangle'

// Price Card Component, pass 'secondary' prop for PRO plan design

const PriceCard = ({ secondary, name, text, priceM, priceY, paymentOption, ...otherProps }) => (
    <StyledPriceCard secondary={secondary}>
        {secondary && <GradientLine />}
        <h2 className=".smaller-h2">{name}</h2>
        <p>{text}</p>
        <p className="price">$ {paymentOption ? priceM : priceY}</p>
        <p>per {paymentOption ? 'month' : 'year'}</p>
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
