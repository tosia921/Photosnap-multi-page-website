import React from 'react'
// Components
import HeadlinesGrid from '../components/HomePage-Components/HeadlinesGrid'
import FeaturesPreview from '../components/HomePage-Components/FeaturesPreview'
import StoryCardsPreview from '../components/HomePage-Components/StoryCardsPreview'

export default function Home() {
    return (
        <>
            <HeadlinesGrid />
            <StoryCardsPreview />
            <FeaturesPreview />
        </>
    )
}
