import React from "react";
import PropTypes from 'prop-types'
import {Link} from "react-router";
import {prefixLink} from "gatsby-helpers";
import {config} from "config";
import RangeSlider from '../components/rangeSlider'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minValue: 0,
            maxValue: 100,
            step: 5,
            firstRange: 50,
            secondRange: 50,
            thirdRange: 50
        }
    }

    handleChange = (event, name) => {
        let value = event.target.value;
        let name2 = event.target.name
        let obj = {}
        obj[name2] = value
        return this.setState(obj)
    }

    handleChange2 = (event) => {
        let value = event.target.value;
        let name = event.target.name
        let obj = {}
        obj[name] = value
        console.log(obj)
        return this.setState(obj)
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>


                <RangeSlider
                    minValue='0'
                    maxValue='100'
                    rangeValue={this.state.firstRange}
                    rangeName='firstRange'
                    step={this.state.step}
                    handleChange={this.handleChange2} />
                <RangeSlider
                    minValue='0'
                    maxValue='100'
                    rangeValue={this.state.secondRange}
                    rangeName='secondRange'
                    step={this.state.step}
                    handleChange={this.handleChange2} />
                <RangeSlider
                    minValue='0'
                    maxValue='100'
                    rangeValue={this.state.thirdRange}
                    rangeName='thirdRange'
                    step={this.state.step}
                    handleChange={this.handleChange2} />



                <br/>
                <br/>
                <br/>
                <br/>
                <p>Welcome to page 2</p>
                <Link to={prefixLink('/')}>Go back to the homepage</Link>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti dicta eaque
                    explicabo harum necessitatibus repellendus sint. Facilis labore maxime officiis rerum similique. Ab
                    fugiat quisquam reiciendis reprehenderit sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam debitis dolor
                    dolores, eveniet fuga fugiat id magnam molestiae nihil quaerat, repellendus velit. Ipsa maiores
                    quisquam repellendus sint totam.</p>
            </div>
        )
    }
}

export default About