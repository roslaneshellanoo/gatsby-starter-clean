import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import ActionMenu from 'material-ui/svg-icons/navigation/menu'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Logo from '../assets/baby-puzzle.svg'

const style = {
  'toolbar': {
    'backgroundColor': '#ffffff',
    'boxShadow': 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    'position': 'fixed',
    'top': 0,
    'left': 0,
    'width': '100%',
    'zIndex': 1756
  },
  'link': { 'margin': '10px 10px', },
  'label': {
    'fontSize': '13px',
    'fontWeight': 300,
    'textTransform': 'none',
    'letterSpacing': '1px',
    'color': '#707070',
    'padding': '0 5px'
  }
}
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'value': 3,
      'open': true
    }
  }

  render () {
    return (
      <div>
        <Toolbar style={style.toolbar}>
          <ToolbarGroup firstChild={false}>
            <div className='menu-icon'>
              <ActionMenu onClick={this.props.toggleMenu} />
            </div>

            <div className='logo'>
              <Link to={prefixLink('/')}>
                Quizio
              </Link>
            </div>

          </ToolbarGroup>
          <ToolbarGroup className={'rightToolbar'}>
            <FlatButton
              style={style.link}
              labelStyle={style.label}
              containerElement={<Link to='/about/' />}
              label={'About'}
            />
            <FlatButton
              style={style.link}
              labelStyle={style.label}
              containerElement={<Link
                style={style.link}
                to='/quizes/'
              />}
              label={'Quizes'}
            />
            <FlatButton
              style={style.link}
              labelStyle={style.label}
              containerElement={<Link
                style={style.link}
                to='/quizes/javascript/'
              />}
              label={'Blog'}
            />
          </ToolbarGroup>
        </Toolbar>

      </div>

    )
  }
}
Header.propTypes = { 'toggleMenu': PropTypes.any }
export default muiThemeable()(Header)
