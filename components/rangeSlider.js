import React from 'react'
import PropTypes from 'prop-types'

class RangeSlider extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="range-holder">
                <input
                    name={this.props.rangeName}
                    type="range"
                    value={this.props.rangeValue}
                    min={this.props.minValue}
                    max={this.props.maxValue}
                    step={this.props.step}
                    onChange={this.props.handleChange}
                    className="range"
                />
                <p>
                    Range :  {this.props.rangeValue}
                </p>
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
    testProp: PropTypes.any
}
export default RangeSlider