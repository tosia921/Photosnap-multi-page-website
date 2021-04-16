import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <PageWrapper>
            <Nav />
            <main>{children}</main>
            <Footer />
        </PageWrapper>
    </>
)

export default Layout

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        flex: 1 0 auto;
    }
`
