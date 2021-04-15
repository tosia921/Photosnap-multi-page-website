import React from 'react'
import Layout from './src/components/Layout'

// Wraps every page in Layout component, more in Gatsby doc's: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}
