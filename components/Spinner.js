import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

export default class Spinner extends React.Component {
  render () {
    return (
      <div className='loading-container'>
        <CircularProgress size={50} thickness={5} />
        <br/>
        <div className='loading-text'>Loading...</div>
      </div>
    )
  }
}
