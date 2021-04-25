import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Beta from '../components/Beta'
import FeaturesListItem from '../components/FeaturesListItem'
import PriceCard from '../components/PriceCard'
import CheckboxButton from '../components/CheckboxButton'

const Pricing = ({ data }) => {
    // Payment option state
    const [paymentOption, setpaymentOption] = useState(true)
    // function that handles payment option button

    // Assigning image from the array to its own variable
    const HeroImg = getImage(data.allFile.edges[1].node.childrenImageSharp[0])

    return (
        <SectionFeatures paymentOption={paymentOption}>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={HeroImg} alt="Women with Camera, sunset." />
                </div>
                <div className="content-top">
                    <GradientLine />
                    <h1>PRICING</h1>
                    <p>
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s
                        the simple way to create and share your photos.
                    </p>
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
            <Features>
                <h4>THE FEATURES</h4>
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

export default Pricing

const SectionFeatures = styled.section`
    .image-top {
        width: 100%;
        height: 29rem;
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
        input {
            margin: 0 2rem;
        }
        .monthly-yearly {
            font-size: 1.8rem;
            line-height: 2.5rem;
            font-weight: 700;
        }
        .monthly {
            color: ${props => (props.paymentOption === true ? `var(--black)` : `#999999`)};
        }
        .yearly {
            color: ${props => (props.paymentOption === false ? `var(--black)` : `#999999`)};
        }
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
`
const GradientLine = styled.div`
    width: 12.8rem;
    height: 0.6rem;
    background: var(--MainAccentGradient);
    position: absolute;
    top: 0;
    left: 3.5rem;
    z-index: 500;
`
const PriceBoxes = styled.section`
    padding: 5rem 3.5rem;
`
const Features = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 3.5rem;
    padding-bottom: 5rem;

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
`
