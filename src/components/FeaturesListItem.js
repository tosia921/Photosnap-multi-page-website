import React from 'react'
import styled from 'styled-components'
import Check from '../assets/pricing/check.svg'
// Media Queries
import media from '../styles/MediaQueries'

const FeaturesListItem = ({ feature, basic, pro, business }) => (
    <ListItem>
        <div className="content">
            <div className="feature-name">
                <h5>{feature}</h5>
            </div>
            <div className="plans-box">
                <div className="plan-name">
                    <p className="plan-naming">BASIC</p>
                    {basic && <Check />}
                </div>
                <div className="plan-name">
                    <p className="plan-naming">PRO</p>
                    {pro && <Check className="pro-tick" />}
                </div>
                <div className="plan-name">
                    <p className="plan-naming">BUSINESS</p>
                    {business && <Check className="business-tick" />}
                </div>
            </div>
        </div>
        <div className="line-throught" />
    </ListItem>
)
export default FeaturesListItem

const ListItem = styled.li`
    width: 100%;
    list-style-type: none;

    .content {
        .feature-name {
            ${media.tablet`
                  width: 40%;  
            `}
        }
        .feature-name h5 {
            font-size: 1.2rem;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }
        .plans-box {
            display: flex;
            ${media.tablet`
                  width: 50%;
                  justify-content: space-between;  
            `}
        }

        .plan-name {
            position: relative;
            width: 100%;
            .pro-tick {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            .business-tick {
                position: absolute;
                left: 92%;
                transform: translateX(-50%);
            }
            &:not(:last-child) {
                margin-right: 7rem;
            }
            .plan-naming {
                ${media.tablet`
                    display: none;
                `}
            }
        }
        .plan-name p {
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 1.5px;
        }
        ${media.tablet`
            display: flex;
        `}
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
