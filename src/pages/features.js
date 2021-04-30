import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
// svg's
import Responsive from '../assets/featuresSVG/responsive.svg'
import NoLimit from '../assets/featuresSVG/no-limit.svg'
import Embed from '../assets/featuresSVG/embed.svg'
import DragDrop from '../assets/featuresSVG/drag-drop.svg'
import BoostExposure from '../assets/featuresSVG/boost-exposure.svg'
import CustomDomain from '../assets/featuresSVG/custom-domain.svg'
import Beta from '../components/Beta'
// Media Queries
import media from '../styles/MediaQueries'

const features = ({ data }) => {
    // Assigning image from the array to its own variable
    const HeroImg = getImage(data.allFile.edges[1].node.childrenImageSharp[0])
    return (
        <SectionFeatures>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={HeroImg} alt="Man with Camera." />
                </div>
                <div className="content-top">
                    <div className="content-top-text">
                        <GradientLine />
                        <h1>FEATURES</h1>
                        <p>
                            We make sure all of our features are designed to be loved by every aspiring and even
                            professional photograpers who wanted to share their stories.
                        </p>
                    </div>
                </div>
            </div>
            <FeaturesContainer>
                <FeatureBox>
                    <div className="svg">
                        <Responsive />
                    </div>
                    <h3>100% Responsive</h3>
                    <p>
                        No matter which the device you’re on, our site is fully responsive and stories look beautiful on
                        any screen.
                    </p>
                </FeatureBox>
                <FeatureBox>
                    <div className="svg svg-no-limit">
                        <NoLimit />
                    </div>
                    <h3>No Photo Upload Limit</h3>
                    <p>
                        Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your
                        stories in one go.
                    </p>
                </FeatureBox>
                <FeatureBox>
                    <div className="svg">
                        <Embed />
                    </div>
                    <h3>Available to Embed</h3>
                    <p>
                        Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.
                    </p>
                </FeatureBox>
                <FeatureBox>
                    <div className="svg">
                        <CustomDomain />
                    </div>
                    <h3>Custom Domain</h3>
                    <p>
                        With Photosnap subscriptions you can host your stories on your own domain. You can also remove
                        our branding!
                    </p>
                </FeatureBox>
                <FeatureBox>
                    <div className="svg">
                        <DragDrop />
                    </div>
                    <h3>Boost Your Exposure</h3>
                    <p>
                        Users that viewed your story or gallery can easily get notifed of new and featured stories with
                        our built in mailing list.
                    </p>
                </FeatureBox>
                <FeatureBox>
                    <div className="svg">
                        <BoostExposure />
                    </div>
                    <h3>Drag & Drop Image</h3>
                    <p>
                        Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to
                        add friction to creating stories.
                    </p>
                </FeatureBox>
            </FeaturesContainer>
            <Beta />
        </SectionFeatures>
    )
}

export const query = graphql`
    query FeaturesImages {
        allFile(filter: { sourceInstanceName: { eq: "features" } }) {
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

export default features

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
        min-height: calc(100vh - 29rem - 7.2rem);
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
    .image-wrapper {
        height: 100%;
        width: 100%;
    }
`
const FeaturesContainer = styled.section`
    width: 100%;
    height: fit-content;
    margin-top: 4rem;
    padding: 0 3.5rem;
    margin-bottom: 6rem;
    ${media.tablet`
        padding: 0;
        margin-top: 5rem;
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 24rem);
        column-gap: 2rem;
        row-gap: 8rem;
    `}
    ${media.desktop`
        margin-top: 10rem;
    `}
    ${media.desktopLarge`
        margin-top: 20rem;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(2, 24rem);
    `}
`
const FeatureBox = styled.section`
    height: 23.5rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-bottom: 8rem;

    ${media.tablet`
        width: 35rem;
        .svg-no-limit {
            padding-top: 1.5rem;
            padding-bottom: 2rem;
        }
    `}

    .svg {
        margin-bottom: 5.5rem;
    }
    h3 {
        margin-bottom: 3rem;
    }
    p {
        text-align: center;
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
