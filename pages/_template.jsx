import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../components/Header'
import Banner from '../components/Banner'
// import Footer from '../components/Footer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Spinner from '../components/Spinner'

// Styles
import 'flexboxgrid'
import '../assets/style.scss'
import '../css/markdown-styles'

injectTapEventPlugin()

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true,
      spinner: true
    }
  }

    toggleMenu = (event) => {
      console.log('clicked menu')
      this.setState({
        open: !this.state.open
      })
    }

    toggleClass = (event) => {
      return this.state.open ? 'opened' : 'closed'
    }
    componentWillMount () {
      let setMenuOnHome = (this.props.location.pathname !== prefixLink('/'))

      this.setState({
        open: setMenuOnHome
      })
    }

  delayStateSpinner = (propGet) => {
    setTimeout(() => {
      this.setState({
        spinner: false
      })
    }, 700)
  }

  componentDidMount () {
    this.delayStateSpinner()
  }

  componentWillReceiveProps (nextProps) {
    let setMenuOnHome = (nextProps.location.pathname !== prefixLink('/'))
    this.setState({
      open: setMenuOnHome,
    })
    if (nextProps.location) {
      this.setState({ spinner: true }, this.delayStateSpinner())
    }
  }

  render () {
    // if (location.pathname === prefixLink('/')) {
    //     return <Banner />
    // }
    const { location, children } = this.props
    const classHome = location.pathname === prefixLink('/') ? 'homepage' : null

    return (
      <MuiThemeProvider>
        <div className={classHome}>
          <Helmet
            title={config.siteTitle}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          {/* {this.state.spinner ? <Spinner /> : null } */}
          <Header toggleMenu={this.toggleMenu} />
          {location.pathname === prefixLink('/')
            ? <Banner /> : null
          }

          <div className={`side-nav ${this.toggleClass()}`}>
            <Menu width={130}>
              <Subheader>Javascript</Subheader>
              <MenuItem containerElement={<Link to='/quizes/javascript/' />} primaryText='Javascript - Beginner' />

              <MenuItem primaryText='Javascript - Senior' />

              <MenuItem primaryText='Javascript - ES6/ES2015' />
              <Divider />
              <MenuItem containerElement={<Link to='/quizes/react/' />} primaryText='React.js' />

              <MenuItem primaryText='Node.js' />

              <MenuItem primaryText='Python' />
            </Menu>
          </div>

          <div
            className={`container main-container nav-${this.toggleClass()}`}
          >
            <div className='wrap-content'>
              {children}
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      </MuiThemeProvider>

    )
  }
}

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default Template
