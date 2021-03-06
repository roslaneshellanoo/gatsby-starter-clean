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
import Footer from '../components/Footer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
// import Spinner from '../components/Spinner'

// Styles
import 'flexboxgrid'
import '../assets/style.scss'
import '../css/markdown-styles'

const style = {
  menuItem: {
    fontSize: '14px',
    color: 'rgb(112, 112, 112)'
  },
  subheader: {
    fontSize: '12px'
  }
}

injectTapEventPlugin()

class Template extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true,
      spinner: true,
      windowHeight: typeof window !== 'undefined' && window.innerHeight,
      windowWidth: typeof window !== 'undefined' && window.innerWidth
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

  delayStateSpinner = (propGet) => {
    setTimeout(() => {
      this.setState({
        spinner: false
      })
    }, 700)
  }

  handleResize = (e) => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    })
    if (this.state.windowWidth < 768) {
      console.log('resized!')
      this.setState({
        open: false
      })
    }
  }

  componentWillMount () {
    let setMenuOnHome = (this.props.location.pathname !== prefixLink('/'))
    this.setState({
      open: setMenuOnHome
    })
    if (this.state.windowWidth < 768) {
      this.setState({
        open: false
      })
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', ::this.handleResize)
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', ::this.handleResize)
    }

    this.delayStateSpinner()
  }

  componentWillReceiveProps (nextProps) {
    let setMenuOnHome = (nextProps.location.pathname !== prefixLink('/'))
    if (this.state.windowWidth < 768) {
      this.setState({
        open: false,
      })
    } else {
      this.setState({
        open: setMenuOnHome,
      })
    }
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
        <div className={`main-wrapper ${classHome || ''}`}>
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
              <Subheader style={style.subheader}>Javascript</Subheader>
              <MenuItem style={style.menuItem} containerElement={<Link to='/quizes/javascript/' />} primaryText='Javascript - Beginner' />

              <MenuItem style={style.menuItem} primaryText='Javascript - Senior' />

              <MenuItem style={style.menuItem} primaryText='Javascript - ES6/ES2015' />
              <Divider />
              <MenuItem style={style.menuItem} containerElement={<Link to='/quizes/react/' />} primaryText='React.js' />

              <MenuItem style={style.menuItem} primaryText='Node.js' />

              <MenuItem style={style.menuItem} primaryText='Python' />
            </Menu>
          </div>

          <div
            className={`container main-container nav-${this.toggleClass()}`}
          >
            <div className='wrap-content'>
              {children}
            </div>
          </div>
          <Footer padFooter={this.toggleClass()}/>

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
