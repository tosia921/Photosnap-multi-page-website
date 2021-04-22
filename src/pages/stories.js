import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import ButtonArrow from '../components/ButtonArrow'
import StoryCard from '../components/StoryCard'

const stories = ({ data }) => {
    // Assigning each image from the array to its own variable
    const Mountains = getImage(data.allFile.edges[0].node.childrenImageSharp[0])
    const rageofthesea = getImage(data.allFile.edges[1].node.childrenImageSharp[0])
    const RunningFree = getImage(data.allFile.edges[2].node.childrenImageSharp[0])
    const behindthewaves = getImage(data.allFile.edges[3].node.childrenImageSharp[0])
    const CalmWaters = getImage(data.allFile.edges[4].node.childrenImageSharp[0])
    const milkeyway = getImage(data.allFile.edges[5].node.childrenImageSharp[0])
    const darkforest = getImage(data.allFile.edges[6].node.childrenImageSharp[0])
    const architectuals = getImage(data.allFile.edges[7].node.childrenImageSharp[0])
    const worldtour = getImage(data.allFile.edges[8].node.childrenImageSharp[0])
    const unforseencorners = getImage(data.allFile.edges[9].node.childrenImageSharp[0])
    const lion = getImage(data.allFile.edges[10].node.childrenImageSharp[0])
    const triptonowhere = getImage(data.allFile.edges[11].node.childrenImageSharp[0])
    const moonofappalacia = getImage(data.allFile.edges[12].node.childrenImageSharp[0])
    const somwarpet = getImage(data.allFile.edges[13].node.childrenImageSharp[0])
    const landofdreams = getImage(data.allFile.edges[14].node.childrenImageSharp[0])
    const cityscapes = getImage(data.allFile.edges[15].node.childrenImageSharp[0])
    const days18 = getImage(data.allFile.edges[16].node.childrenImageSharp[0])

    return (
        <StyledSection>
            <div className="section-top">
                <div className="image-top">
                    <GatsbyImage className="image-wrapper" image={moonofappalacia} alt="Moon over the forest." />
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
                <StoryCard title="The Mountains" author="John Appleseed" date="April 16th 2020" image={Mountains} />
                <StoryCard title="Sunset Cityscapes" author="Benjamin Cruz" date="April 14th 2020" image={cityscapes} />
                <StoryCard title="18 Days Voyage" author="Alexei Borodin" date="April 11th 2020" image={days18} />
                <StoryCard
                    title="Architecturals"
                    author="Samantha Brooke"
                    date="April 9th 2020"
                    image={architectuals}
                />
                <StoryCard title="World Tour 2019" author="Timothy Wagner" date="April 7th 2020" image={worldtour} />
                <StoryCard
                    title="Unforeseen Corners"
                    author="William Malcolm"
                    date="April 3rd 2020"
                    image={unforseencorners}
                />
                <StoryCard
                    title="King on Africa: Part II"
                    author="by Tim Hillenburg"
                    date="March 29th 2020"
                    image={lion}
                />
                <StoryCard
                    title="The Trip to Nowhere"
                    author="Felicia Rourke"
                    date="March 21st 2020"
                    image={triptonowhere}
                />
                <StoryCard
                    title="Rage of The Sea"
                    author="Mohammed Abdul"
                    date="March 19th 2020"
                    image={rageofthesea}
                />
                <StoryCard title="Running Free" author="Michelle" date="March 16th 2020" image={RunningFree} />
                <StoryCard
                    title="Behind the Waves"
                    author="Lamarr Wilson"
                    date="March 11th 2020"
                    image={behindthewaves}
                />
                <StoryCard title="Calm Waters" author="Samantha Brooke" date="March 9th 2020" image={CalmWaters} />
                <StoryCard title="The Milky Way" author="Benjamin Cruz" date="March 5th 2020" image={milkeyway} />
                <StoryCard
                    title="Night at The Dark Forest"
                    author="Mohammed Abdul"
                    date="March 4th 2020"
                    image={darkforest}
                />
                <StoryCard titile="Somwarpet’s Beauty" author="Michelle" date="March 1st 2020" image={somwarpet} />
                <StoryCard
                    title="Land of Dreams"
                    author="William Malcolm"
                    date="February 25th 2020"
                    image={landofdreams}
                />
            </div>
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
`

export default stories
