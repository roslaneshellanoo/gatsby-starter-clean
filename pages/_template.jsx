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
import Footer from '../components/Footer'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

// Styles
import 'flexboxgrid'
import '../assets/style.scss'
import '../css/markdown-styles'

injectTapEventPlugin()


import { rhythm } from '../utils/typography'

const style = {
    display: 'inline-block',
    margin: '4px 32px 16px 0',
    position: 'fixed',
    height: '100%',

};

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
                {location.pathname === prefixLink('/') ?  <Banner /> :
                    <Paper style={style}>
                        <Menu  width={130}>
                            <Subheader>Javascript</Subheader>
                            <MenuItem primaryText="Javascript - Beginner" />

                            <MenuItem primaryText="Javascript - Senior"  />

                            <MenuItem primaryText="Javascript - ES6/ES2015"  />
                            <Divider />
                            <MenuItem primaryText="React.js" />

                            <MenuItem primaryText="Node.js" />

                            <MenuItem primaryText="Python" />
                        </Menu>
                    </Paper>
                }



                <Container
                    style={{
                        maxWidth: 960,
                        padding: `${rhythm(1)} ${rhythm(3/4)}`,
                    }}
                >
                    {children}
                </Container>
                {/*<Footer/>*/}
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