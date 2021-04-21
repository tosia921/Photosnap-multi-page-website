import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonArrow from '../ButtonArrow'

const HeadlinesGrid = () => {
    // Quering for images from file
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: { sourceInstanceName: { eq: "home" } }) {
                edges {
                    node {
                        id
                        childrenImageSharp {
                            gatsbyImageData(
                                width: 1400
                                quality: 100
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
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
                <GatsbyImage className="image-wrapper" image={image1} alt="numero uno" />
            </div>
            <div className="content-1">
                <h1>
                    CREATE AND <br />
                    SHARE YOUR <br />
                    PHOTO STORIES
                </h1>
                <p>
                    Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos,
                    tell stories and connect with others.
                </p>
                <ButtonArrow secondary>GET AN INVITE</ButtonArrow>
            </div>
            <div className="image-2">
                <GatsbyImage image={image2} className="image-wrapper" alt="numero duo" />
            </div>
            <div className="content-2">
                <h2>
                    BEAUTIFUL <br />
                    STORIES <br />
                    EVERY TIME
                </h2>
                <p>
                    We provide design templates to ensure your stories look terrific. Easily add photos, text, embed
                    maps and media from other networks. Then share your story with everyone.
                </p>
                <ButtonArrow>VIEW THE STORIES</ButtonArrow>
            </div>
            <div className="image-3">
                <GatsbyImage image={image3} className="image-wrapper" alt="numero tres" />
            </div>
            <div className="content-3">
                <h2>
                    DESIGNED FOR <br />
                    EVERYONE
                </h2>
                <p>
                    Photosnap can help you create stories that resonate with your audience. Our tool is designed for
                    photographers of all levels, brands, businesses you name it.
                </p>
                <ButtonArrow>VIEW THE STORIES</ButtonArrow>
            </div>
        </StyledHeadlines>
    )
}

export default HeadlinesGrid

const StyledHeadlines = styled.section`
    .image-1 {
        height: calc(100vh - 50vh - 7.2rem);
        width: 100vw;
    }
    .image-2 .image-3 {
        width: 100%;
        height: 27rem;
    }
    .content-1 {
        min-height: 50vh;
        width: 100vw;
        background-color: var(--black);
        color: var(--white);
        padding: 5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
            margin-top: 0;
            font-weight: 600;
        }
        p {
            margin-bottom: 3.3rem;
        }
    }
    .content-2,
    .content-3 {
        min-height: 42rem;
        width: 100vw;
        background-color: var(--white);
        color: var(--black);
        padding: 5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            margin-top: 0;
            font-weight: 600;
            margin-bottom: 3rem;
        }
        p {
            margin-bottom: 3rem;
        }
    }
    .image-wrapper {
        height: 100%;
        width: 100%;
    }
`
