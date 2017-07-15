import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'
import { Container } from 'react-responsive-grid'
// import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../components/Header'
import Banner from '../components/Banner'

// Styles
import 'flexboxgrid'
import '../assets/style.scss'
import '../css/markdown-styles'

injectTapEventPlugin()


import { rhythm } from '../utils/typography'

class Template extends React.Component {

    render () {
        // if (location.pathname === prefixLink('/')) {
        //     return <Banner />
        // }
        const { location, children } = this.props
        const classHome = location.pathname === prefixLink('/') ?  'homepage' : null

        return (
        <MuiThemeProvider>
            {}
            <div className={classHome}>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
                <Header />
                {location.pathname === prefixLink('/') ?  <Banner /> : null}
                <Container
                    style={{
                        maxWidth: 960,
                        padding: `${rhythm(1)} ${rhythm(3/4)}`,
                    }}
                >
                    {children}
                </Container>
            </div>
        </MuiThemeProvider>

        )
    }
}

Template.propTypes = {
    children: PropTypes.any,
    location: React.PropTypes.object
}

export default Template