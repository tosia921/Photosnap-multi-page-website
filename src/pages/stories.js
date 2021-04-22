import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonArrow from '../components/ButtonArrow'

const stories = ({ data }) => {
    // Assigning each image from the array to its own variable
    const ImageTop = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    const Picture1 = getImage(data.allFile.edges[1].node.childrenImageSharp[1])
    const Picture2 = getImage(data.allFile.edges[2].node.childrenImageSharp[2])
    const Picture3 = getImage(data.allFile.edges[3].node.childrenImageSharp[3])
    const Picture4 = getImage(data.allFile.edges[4].node.childrenImageSharp[4])
    const Picture5 = getImage(data.allFile.edges[5].node.childrenImageSharp[5])
    const Picture6 = getImage(data.allFile.edges[6].node.childrenImageSharp[6])
    const Picture7 = getImage(data.allFile.edges[7].node.childrenImageSharp[7])
    const Picture8 = getImage(data.allFile.edges[8].node.childrenImageSharp[8])
    const Picture9 = getImage(data.allFile.edges[9].node.childrenImageSharp[9])
    const Picture10 = getImage(data.allFile.edges[10].node.childrenImageSharp[10])
    const Picture11 = getImage(data.allFile.edges[11].node.childrenImageSharp[11])
    const Picture12 = getImage(data.allFile.edges[12].node.childrenImageSharp[12])
    const Picture13 = getImage(data.allFile.edges[13].node.childrenImageSharp[13])
    const Picture14 = getImage(data.allFile.edges[14].node.childrenImageSharp[14])
    const Picture15 = getImage(data.allFile.edges[15].node.childrenImageSharp[15])
    const Picture16 = getImage(data.allFile.edges[16].node.childrenImageSharp[16])

    return (
        <StyledSection>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={ImageTop} alt="Moon over the forest." />
                </div>
                <div className="content-top">
                    <h4>LAST MONTH’S FEATURED STORY</h4>
                    <h1>
                        HAZY FULL <br />
                        MOON OF <br />
                        APPALACHIA
                    </h1>
                    <p className="date-author">
                        March 2nd 2020<bold className="bold-author"> by John Appleseed</bold>
                    </p>
                    <p>
                        The dissected plateau area, while not actually made up of geological mountains, is popularly
                        called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are
                        not high, the terrain is extremely rugged.
                    </p>
                    <ButtonArrow secondary>READ THE STORY</ButtonArrow>
                </div>
            </div>
            <div className="stories-grid" />
        </StyledSection>
    )
}

export const query = graphql`
    query StoriesImages {
        allFile(filter: { sourceInstanceName: { eq: "stories" } }) {
            edges {
                node {
                    id
                    childrenImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 100, formats: [AUTO, WEBP, AVIF])
                    }
                }
            }
        }
    }
`

const StyledSection = styled.section`
    .image-top {
        width: 100%;
        height: 27rem;
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
            margin-top: 0;
            font-weight: 600;
        }
        p {
            margin-bottom: 3.3rem;
        }
        .date-author {
            font-size: 1.3rem;
            .bold-author {
                color: var(--white);
                font-weight: 600;
            }
        }
    }
`

export default stories
