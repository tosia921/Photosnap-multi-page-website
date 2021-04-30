import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonArrow from '../ButtonArrow'
import media from '../../styles/MediaQueries'

const HeadlinesGrid = () => {
    // Quering for images from file
    const data = useStaticQuery(graphql`
        query MyQuery {
            allFile(filter: { sourceInstanceName: { eq: "home" } }, sort: { fields: name, order: ASC }) {
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
                <GradientLine />
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
    height: fit-content;
    width: 100vw;

    ${media.tablet`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(3, 65rem);
      grid-template-areas:
        "cont-1 cont-1 img-1"
        "img-2 cont-2 cont-2"
        "cont-3 cont-3 img-3";
    `}
    ${media.desktop`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: 65rem 65rem 60rem;
      grid-template-areas:
        "cont-1 cont-1 cont-1 img-1 img-1 img-1 img-1"
        "img-2 img-2 img-2 img-2 cont-2 cont-2 cont-2"
        "cont-3 cont-3 cont-3 img-3 img-3 img-3 img-3";
    `}

    .image-1 {
        height: calc(100vh - 50vh - 7.2rem);
        width: 100%;
        grid-area: img-1;
        ${media.tablet`
            height: 100%;
        `}
    }
    .image-2 {
        grid-area: img-2;
    }
    .image-3 {
        grid-area: img-3;
    }
    .image-2 .image-3 {
        width: 100%;
        height: 27rem;
    }
    .content-1 {
        min-height: 50vh;
        width: 100%;
        background-color: var(--black);
        color: var(--white);
        padding: 5rem 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        grid-area: cont-1;
        ${media.tablet`
            justify-content: center;
            padding: 5rem calc((40vw - 200px) / 2);
        `}
        ${media.desktop`
            justify-content: center;
            padding: 5rem calc((40vw - 350px) / 2);
        `}
        ${media.desktopLarge`
            padding: 5rem calc((40vw - 350px) / 2);
        `}

        h1 {
            margin-top: 0;
            font-weight: 600;
            ${media.tablet`
                margin-bottom: 5rem;
            `}
        }
        p {
            margin-bottom: 3.3rem;
            ${media.tablet`
                margin-bottom: 10rem;
            `}
        }
    }
    .content-2,
    .content-3 {
        min-height: 42rem;
        width: 100%;
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
        ${media.tablet`
            justify-content: center;
            padding: 5rem calc((40vw - 200px) / 2);
        `}
        ${media.desktop`
            justify-content: center;
            padding: 5rem calc((40vw - 350px) / 2);
        `}
        ${media.desktopLarge`
            padding: 5rem calc((40vw - 350px) / 2);
        `}
    }
    .content-2 {
        grid-area: cont-2;
    }
    .content-3 {
        grid-area: cont-3;
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
    ${media.tablet`
        height: 50%;
        width: 0.6rem;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    `}
`
