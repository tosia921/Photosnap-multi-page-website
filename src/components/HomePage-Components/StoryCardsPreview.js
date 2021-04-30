import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import StoryCard from '../StoryCard'
// Media queries
import media from '../../styles/MediaQueries'

const StoryCardsPreview = () => {
    // Quering for images from file
    const data = useStaticQuery(graphql`
        query CardsPreview {
            allFile(filter: { sourceInstanceName: { eq: "storiesHomePage" } }) {
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
    `)
    // Assigning each image from the array to its own variable
    const image1 = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    const image2 = getImage(data.allFile.edges[1].node.childrenImageSharp[0])
    const image3 = getImage(data.allFile.edges[2].node.childrenImageSharp[0])
    const image4 = getImage(data.allFile.edges[3].node.childrenImageSharp[0])

    return (
        <CardsPreview>
            <StoryCard image={image1} title="The Mountains" author="John Appleseed" />
            <StoryCard image={image2} title="Sunset Cityscapes" author="Benjamin Cruz" />
            <StoryCard image={image3} title="8 Days Voyage" author="Alexei Borodin" />
            <StoryCard image={image4} title="Architecturals" author="Samantha Brooke" />
        </CardsPreview>
    )
}

export default StoryCardsPreview

const CardsPreview = styled.section`
    margin-bottom: 5rem;

    ${media.tablet`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 50rem 50rem;
    `}
    ${media.desktop`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 65rem 65rem;
    `}
    ${media.desktopLarge`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 50rem;
    `}
`
