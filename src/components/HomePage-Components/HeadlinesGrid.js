import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const HeadlinesGrid = () => {
    // Quering for images from file
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: { sourceInstanceName: { eq: "home" } }) {
                edges {
                    node {
                        id
                        childrenImageSharp {
                            gatsbyImageData(width: 1400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                        }
                    }
                }
            }
        }
    `)
    // Assigning each image from the array to its own variable
    const image1 = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    const image2 = getImage(data.allFile.edges[1].node.childrenImageSharp[0])
    const image3 = getImage(data.allFile.edges[2].node.childrenImageSharp[0])

    return (
        <StyledHeadlines>
            <div className="image-1">
                <GatsbyImage className="hero-image-wrapper" image={image1} alt="numero uno" />
            </div>
            <div className="content-1">b</div>
            <div className="image-2">
                <GatsbyImage image={image2} alt="numero duo" />
            </div>
            <div className="content-2">d</div>
            <div className="image-3">
                <GatsbyImage image={image3} alt="numero tres" />
            </div>
            <div className="content-3">f</div>
        </StyledHeadlines>
    )
}

export default HeadlinesGrid

const StyledHeadlines = styled.section`
    .image-1 {
        height: calc(100vh - 50vh - 7.2rem);
        width: 100vw;
        .hero-image-wrapper {
            height: 100%;
            width: 100%;
        }
    }
    .image-2 {
    }
    .image-3 {
    }
    .content-1 {
        height: 50vh;
        width: 100vw;
        background-color: var(--black);
    }
    .content-2 {
    }
    .content-3 {
    }
`
