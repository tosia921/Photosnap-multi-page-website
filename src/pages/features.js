import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const features = ({ data }) => {
    console.log(data)
    return <div />
}

export const query = graphql`
    query FeaturesImages {
        allFile(filter: { sourceInstanceName: { eq: "features" } }) {
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

export default features
