import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import ButtonArrow from './ButtonArrow'

const Beta = () => {
    // Quering for images from file
    const data = useStaticQuery(graphql`
        query BetaImg {
            allFile(filter: { sourceInstanceName: { eq: "features" } }) {
                edges {
                    node {
                        id
                        childrenImageSharp {
                            gatsbyImageData(
                                width: 2000
                                placeholder: BLURRED
                                quality: 100
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    `)
    // Assigning image from the array to its own variable
    const bgBeta = getImage(data.allFile.edges[0].node.childrenImageSharp[0])

    return (
        <BetaBackground>
            <GradientLine />
            <GatsbyImage className="image-wrapper" image={bgBeta} alt="Sand" />
            <div className="content">
                <h2>
                    We’re in beta. <br />
                    Get your invite <br />
                    today!
                </h2>
                <ButtonArrow secondary>GET AN INVITE</ButtonArrow>
            </div>
        </BetaBackground>
    )
}

export default Beta

const BetaBackground = styled.div`
    width: 100vw;
    height: 29rem;
    position: relative;
    .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 29rem;
        width: 100vw;
        color: var(--white);
        padding: 5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h2 {
            margin-top: 0;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    .image-wrapper {
        height: 100%;
        width: 100%;
    }
    .gradient-position {
        position: absolute;
        top: 0.6rem;
        left: 5rem;
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
