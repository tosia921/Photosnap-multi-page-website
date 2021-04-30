import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Beta from '../components/Beta'
import FeaturesListItem from '../components/FeaturesListItem'
import PriceCard from '../components/PriceCard'
import CheckboxButton from '../components/CheckboxButton'
import media from '../styles/MediaQueries'

const Pricing = ({ data }) => {
    // Payment option state
    const [paymentOption, setpaymentOption] = useState(true)

    // Assigning image from the array to its own variable
    const HeroImg = getImage(data.allFile.edges[1].node.childrenImageSharp[0])

    return (
        <SectionFeatures paymentOption={paymentOption}>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={HeroImg} alt="Women with Camera, sunset." />
                </div>
                <div className="content-top">
                    <div className="content-top-text">
                        <GradientLine />
                        <h1>PRICING</h1>
                        <p>
                            Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                            It’s the simple way to create and share your photos.
                        </p>
                    </div>
                </div>
            </div>
            <div className="price-option">
                <p className="monthly-yearly monthly">Monthly</p>
                <CheckboxButton onClick={() => setpaymentOption(!paymentOption)} />
                <p className="monthly-yearly yearly">Yearly</p>
            </div>
            <PriceBoxes>
                <PriceCard
                    name="Basic"
                    text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
                    priceM="19.00"
                    priceY="190.00"
                    paymentOption={paymentOption}
                />
                <PriceCard
                    name="Pro"
                    text="More advanced features available. Recommended for photography veterans and professionals."
                    priceM="39.00"
                    priceY="390.00"
                    paymentOption={paymentOption}
                    secondary
                />
                <PriceCard
                    name="Business"
                    text="Additional features available such as more detailed metrics. Recommended for business owners."
                    priceM="99.00"
                    priceY="990.00"
                    paymentOption={paymentOption}
                />
            </PriceBoxes>
            <h2 className="compare">COMPARE</h2>
            <Features>
                <div className="features-names">
                    <h4>THE FEATURES</h4>
                    <div className="options">
                        <h4>BASIC</h4>
                        <h4>PRO</h4>
                        <h4>BUSINESS</h4>
                    </div>
                </div>
                <div className="thick-line-throught" />
                <ul>
                    <FeaturesListItem feature="UNLIMITED STORY POSTING" basic pro business />
                    <FeaturesListItem feature="UNLIMITED PHOTO UPLOAD" basic pro business />
                    <FeaturesListItem feature="EMBEDDING CUSTOM CONTENT" pro business />
                    <FeaturesListItem feature="CUSTOMIZE METADATA" pro business />
                    <FeaturesListItem feature="ADVANCED METRICS" business />
                    <FeaturesListItem feature="PHOTO DOWNLOADS" business />
                    <FeaturesListItem feature="SEARCH ENGINE INDEXING" business />
                    <FeaturesListItem feature="CUSTOM ANALYTICS" business />
                </ul>
            </Features>
            <Beta />
        </SectionFeatures>
    )
}

export const query = graphql`
    query PricingImages {
        allFile(filter: { sourceInstanceName: { eq: "pricing" } }) {
            edges {
                node {
                    id
                    childrenImageSharp {
                        gatsbyImageData(width: 2000, placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    }
`

export default Pricing

const SectionFeatures = styled.section`
    .section-top {
        ${media.tablet`
            height: 49rem;
            display: flex;
            flex-direction: row-reverse;
        `}
    }
    .image-top {
        width: 100%;
        height: 29rem;
        ${media.tablet`
            height: 49rem;
            width: 40%;
        `}
        ${media.desktop`
            height: 55rem;
            width: 60%;
        `}
        ${media.desktopLarge`
            height: 65rem;
            width: 70%;
        `}
    }
    .content-top {
        min-height: 50vh;
        width: 100vw;
        background-color: var(--black);
        color: var(--white);
        padding: 5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        .content-top-text {
            ${media.tablet`
                width: 39rem;
            `}
        }
        ${media.tablet`
            min-height: 49rem;
            width: 60%;
        `}
        ${media.desktop`
            min-height: 55rem;
            width: 40%;
        `}
        ${media.desktopLarge`
            min-height: 65rem;
            width: 30%;
        `}
        h1 {
            margin-top: 7rem;
            font-weight: 600;
        }
        p {
            margin-bottom: 7rem;
        }
    }
    .price-option {
        margin-top: 4.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        ${media.tablet`
            padding-top: 8rem;
        `}
        input {
            margin: 0 2rem;
        }
        .monthly-yearly {
            font-size: 1.8rem;
            line-height: 2.5rem;
            font-weight: 700;
            transition: 0.2s ease-in;
        }
        .monthly {
            color: ${props => (props.paymentOption === true ? `var(--black)` : `#999999`)};
        }
        .yearly {
            color: ${props => (props.paymentOption === false ? `var(--black)` : `#999999`)};
        }
        ${media.tablet`
            margin-top: 5rem;
        `}
        ${media.desktop`
            margin-top: 10rem;
        `}
        ${media.desktopLarge`
            margin-top: 20rem;
        `}
    }
    .content {
        h2 {
            text-transform: uppercase;
        }
    }
    .image-wrapper {
        height: 100%;
        width: 100%;
    }
    .compare {
        width: 100%;
        text-align: center;
        margin: 8rem 0 6rem 0;
        display: none;

        ${media.tablet`
            display: block;
        `}
    }
`
const GradientLine = styled.div`
    width: 12.8rem;
    height: 0.6rem;
    background: var(--MainAccentGradient);
    position: absolute;
    top: 0;
    left: 3.5rem;
    z-index: 500;
    ${media.tablet`
        height: 50%;
        width: 0.6rem;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    `}
`
const PriceBoxes = styled.section`
    padding: 5rem 3.5rem;

    ${media.desktop`
        padding: 5rem 20rem;
    `}
    ${media.desktopLarge`
        width: 100vw;
        padding: 5rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    `}
`
const Features = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 3.5rem;
    padding-bottom: 5rem;
    margin-bottom: 5rem;

    h4 {
        margin-bottom: 2.5rem;
    }

    .thick-line-throught {
        width: 100%;
        height: 1.5px;
        border-radius: 1px;
        background-color: var(--black);
        margin-bottom: 2rem;
    }

    .features-names {
        display: flex;
        width: 100%;
        h4 {
            width: 30%;
        }
        .options {
            display: none;
            width: 70%;
            justify-content: space-around;
            align-items: center;
            h4 {
                text-align: center;
            }
            h4:nth-child(1) {
                padding-right: 2rem;
            }
            h4:nth-child(2) {
                padding-left: 0.2rem;
            }
            h4:nth-child(3) {
                padding-left: 1.5rem;
            }
            ${media.tablet`
                display: flex;
            `}
        }
    }
    ${media.tablet`
        padding: 5rem 5rem;
    `}
    ${media.desktop`
        padding: 5rem 10rem;
    `}
    ${media.desktopLarge`
        padding: 5rem 35rem;
    `}
`
