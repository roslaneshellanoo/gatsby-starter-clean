import React from 'react'
import Earth from '../assets/earth.svg'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render () {
    return (
      <footer className={`footer container-fluid ${this.props.padFooter}`}>
        <div className='row center-xs text-center'>
          <div className='col-xs'>
            <div className='made-in center-xs'>
            Made in planet <img src={Earth} />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  padFooter: PropTypes.any
}
export default Footer
