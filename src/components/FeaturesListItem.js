import React from 'react'
import styled from 'styled-components'
import Check from '../assets/pricing/check.svg'

const FeaturesListItem = ({ feature, basic, pro, business }) => (
    <ListItem>
        <div className="feature-name">
            <h5>{feature}</h5>
        </div>
        <div className="plans-box">
            <div className="plan-name">
                <p>BASIC</p>
                {basic && <Check />}
            </div>
            <div className="plan-name">
                <p>PRO</p>
                {pro && <Check />}
            </div>
            <div className="plan-name">
                <p>BUSINESS</p>
                {business && <Check />}
            </div>
        </div>
        <div className="line-throught" />
    </ListItem>
)
export default FeaturesListItem

const ListItem = styled.li`
    width: 100%;
    list-style-type: none;

    .feature-name h5 {
        font-size: 1.2rem;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }
    .plans-box {
        display: flex;
    }

    .plan-name {
        &:not(:last-child) {
            margin-right: 7rem;
        }
    }
    .plan-name p {
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1.5px;
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
`
