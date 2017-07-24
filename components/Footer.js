import React from 'react'
import Earth from '../assets/earth.svg'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render () {
    return (
      <footer className={`footer container-fluid ${this.props.padFooter}`}>
        <div className='row'>
          <div className='col-xs start'>
            <div className='made-in'>
            Made in planet <img src={Earth} />
            </div></div>
          <div className='col-xs end'><a className='link-foot' href='#'>⇪ back to top</a></div>
        </div>
      </footer>
    )
  }
}
Footer.propTypes = {
  padFooter: PropTypes.any
}
export default Footer
