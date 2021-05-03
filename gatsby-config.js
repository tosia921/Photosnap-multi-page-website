// Gatsby Config file, for more See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `features`,
                path: `${__dirname}/src/assets/features`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `featuresSVG`,
                path: `${__dirname}/src/assets/featuresSVG`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `home`,
                path: `${__dirname}/src/assets/home`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pricing`,
                path: `${__dirname}/src/assets/pricing`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `shared`,
                path: `${__dirname}/src/assets/shared`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `stories`,
                path: `${__dirname}/src/assets/stories`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `storiesHomePage`,
                path: `${__dirname}/src/assets/storiesHomePage`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['DM Sans'],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
}
