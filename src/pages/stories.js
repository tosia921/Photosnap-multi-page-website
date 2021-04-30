import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonArrow from '../components/ButtonArrow'
import StoryCard from '../components/StoryCard'
// Media Queries
import media from '../styles/MediaQueries'

const stories = ({ data }) => {
    // Assigning each image from the array to its own variable
    const heroImg = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    const picture1 = getImage(data.allFile.edges[1].node.childrenImageSharp[0])
    const picture2 = getImage(data.allFile.edges[2].node.childrenImageSharp[0])
    const picture3 = getImage(data.allFile.edges[3].node.childrenImageSharp[0])
    const picture4 = getImage(data.allFile.edges[4].node.childrenImageSharp[0])
    const picture5 = getImage(data.allFile.edges[5].node.childrenImageSharp[0])
    const picture6 = getImage(data.allFile.edges[6].node.childrenImageSharp[0])
    const picture7 = getImage(data.allFile.edges[7].node.childrenImageSharp[0])
    const picture8 = getImage(data.allFile.edges[8].node.childrenImageSharp[0])
    const picture9 = getImage(data.allFile.edges[9].node.childrenImageSharp[0])
    const picture10 = getImage(data.allFile.edges[10].node.childrenImageSharp[0])
    const picture11 = getImage(data.allFile.edges[11].node.childrenImageSharp[0])
    const picture12 = getImage(data.allFile.edges[12].node.childrenImageSharp[0])
    const picture13 = getImage(data.allFile.edges[13].node.childrenImageSharp[0])
    const picture14 = getImage(data.allFile.edges[14].node.childrenImageSharp[0])
    const picture15 = getImage(data.allFile.edges[15].node.childrenImageSharp[0])
    const picture16 = getImage(data.allFile.edges[16].node.childrenImageSharp[0])

    return (
        <StyledSection>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={heroImg} alt="Moon over the forest." />
                </div>
                <div className="content-top">
                    <h4>LAST MONTH’S FEATURED STORY</h4>
                    <h1>
                        HAZY FULL <br />
                        MOON OF <br />
                        APPALACHIA
                    </h1>
                    <p className="date-author">
                        March 2nd 2020<b className="b-author"> by John Appleseed</b>
                    </p>
                    <p>
                        The dissected plateau area, while not actually made up of geological mountains, is popularly
                        called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are
                        not high, the terrain is extremely rugged.
                    </p>
                    <ButtonArrow secondary>READ THE STORY</ButtonArrow>
                </div>
            </div>
            <div className="stories-grid">
                <StoryCard title="The Mountains" author="John Appleseed" date="April 16th 2020" image={picture1} />
                <StoryCard title="Sunset Cityscapes" author="Benjamin Cruz" date="April 14th 2020" image={picture2} />
                <StoryCard title="18 Days Voyage" author="Alexei Borodin" date="April 11th 2020" image={picture3} />
                <StoryCard title="Architecturals" author="Samantha Brooke" date="April 9th 2020" image={picture4} />
                <StoryCard title="World Tour 2019" author="Timothy Wagner" date="April 7th 2020" image={picture5} />
                <StoryCard title="Unforeseen Corners" author="William Malcolm" date="April 3rd 2020" image={picture6} />
                <StoryCard
                    title="King on Africa: Part II"
                    author="by Tim Hillenburg"
                    date="March 29th 2020"
                    image={picture7}
                />
                <StoryCard
                    title="The Trip to Nowhere"
                    author="Felicia Rourke"
                    date="March 21st 2020"
                    image={picture8}
                />
                <StoryCard title="Rage of The Sea" author="Mohammed Abdul" date="March 19th 2020" image={picture9} />
                <StoryCard title="Running Free" author="Michelle" date="March 16th 2020" image={picture10} />
                <StoryCard title="Behind the Waves" author="Lamarr Wilson" date="March 11th 2020" image={picture11} />
                <StoryCard title="Calm Waters" author="Samantha Brooke" date="March 9th 2020" image={picture12} />
                <StoryCard title="The Milky Way" author="Benjamin Cruz" date="March 5th 2020" image={picture13} />
                <StoryCard
                    title="Night at The Dark Forest"
                    author="Mohammed Abdul"
                    date="March 4th 2020"
                    image={picture14}
                />
                <StoryCard titile="Somwarpet’s Beauty" author="Michelle" date="March 1st 2020" image={picture15} />
                <StoryCard
                    title="Land of Dreams"
                    author="William Malcolm"
                    date="February 25th 2020"
                    image={picture16}
                />
            </div>
        </StyledSection>
    )
}

export const query = graphql`
    query StoriesImages {
        allFile(filter: { sourceInstanceName: { eq: "stories" } }, sort: { fields: name }) {
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

const StyledSection = styled.section`
    .image-top {
        width: 100%;
        height: 32rem;

        ${media.tablet`
            height: calc(100vh - 7.2rem);
            position: relative;
        `}
    }
    .image-wrapper {
        height: 100%;
        width: 100%;
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
        ${media.tablet`
            padding: 0 0;
            padding-left: 4rem;
            position: absolute;
            top: 50%;
            left: 0;
            background: transparent;
            width: 50%;
            transform: translateY(-44%);
        `}
        ${media.desktop`
            width: 40%;
        `}
        ${media.desktopLarge`
            width: 30%;
        `}
        h1 {
            margin-top: 0;
            font-weight: 600;
        }
        h4 {
            margin-bottom: 2.8rem;
        }
        p {
            margin-bottom: 3.3rem;
        }
        .date-author {
            font-size: 1.3rem;
            .b-author {
                margin-left: 5px;
                color: var(--white);
                font-weight: 400;
            }
        }
    }
    .stories-grid {
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
    }
`

export default stories
