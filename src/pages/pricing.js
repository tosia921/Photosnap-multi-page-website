import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

const pricing = ({ data }) => {
    // Assigning image from the array to its own variable
    const HeroImg = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    console.log(HeroImg)
    return (
        <SectionFeatures>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={HeroImg} alt="Man with Camera." />
                </div>
                <div className="content-top">
                    <h1>PRICING</h1>
                    <p>
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s
                        the simple way to create and share your photos.
                    </p>
                </div>
            </div>
        </SectionFeatures>
    )
}

export const query = graphql`
    query pricingImages {
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

export default pricing

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
        h1 {
            margin-top: 7rem;
            font-weight: 600;
        }
        p {
            margin-bottom: 7rem;
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
