import React from 'react'
import styled from 'styled-components'
// svg's
import Responsive from '../../assets/featuresSVG/responsive.svg'
import NoLimit from '../../assets/featuresSVG/no-limit.svg'
import Embed from '../../assets/featuresSVG/embed.svg'
// Media Queries
import media from '../../styles/MediaQueries'

const FeaturesPreview = () => (
    <FeaturesContainer>
        <FeatureBox>
            <div className="svg">
                <Responsive />
            </div>
            <h3>100% Responsive</h3>
            <p>
                No matter which the device you’re on, our site is fully responsive and stories look beautiful on any
                screen.
            </p>
        </FeatureBox>
        <FeatureBox>
            <div className="svg svg-no-limit">
                <NoLimit />
            </div>
            <h3>No Photo Upload Limit</h3>
            <p>
                Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in
                one go.
            </p>
        </FeatureBox>
        <FeatureBox>
            <div className="svg">
                <Embed />
            </div>
            <h3>Available to Embed</h3>
            <p>Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.</p>
        </FeatureBox>
    </FeaturesContainer>
)

export default FeaturesPreview

const FeaturesContainer = styled.section`
    width: 100vw;
    padding: 4rem calc((100vw - 350px) / 2);
    ${media.tablet`
        padding: 4rem calc((100vw - 450px) / 2);
    `}
    ${media.desktopLarge`
        padding: 4rem 0; 
        display: flex;
        align-items: center;
        justify-content: space-around;
    `}
`
const FeatureBox = styled.section`
    height: 23.5rem;
    display: flex;
    flex-direction: column;

    align-items: center;
    margin-bottom: 8rem;

    .svg {
        margin-bottom: 5.5rem;
    }
    ${media.desktopLarge`
        width: 35rem;
    `}
    ${media.desktopLarge`
        .svg-no-limit {
            padding-top: 1.5rem;
            padding-bottom: 2rem;
            

        }
    `}

    h3 {
        margin-bottom: 3rem;
    }
    p {
        text-align: center;
    }
`
