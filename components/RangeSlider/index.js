import React from 'react'
import PropTypes from 'prop-types'
import './_range.scss'
class RangeSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className={'range-range-slider '+ this.props.position}>
        <input
          name={this.props.rangeName}
          type='range'
          value={this.props.rangeValue}
          min={this.props.minValue}
          max={this.props.maxValue}
          step={this.props.step}
          onChange={this.props.handleChange}
          className={'range-slider__range '+ this.props.position}
        />

        <div>
                    Range :  {this.props.rangeValue}
        </div>
      </div>
    )
  }
}
RangeSlider.propTypes = {
  handleChange: PropTypes.any,
  rangeValue: PropTypes.any,
  minValue: PropTypes.any,
  maxValue: PropTypes.any,
  step: PropTypes.any,
  rangeName: PropTypes.any,
  testProp: PropTypes.any,
  position: PropTypes.any
}
RangeSlider.defaultProps = {
  position: 'horizontal'
}
export default RangeSlider