import React from "react";
import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import {Link} from "react-router";
import {prefixLink} from "gatsby-helpers";
import {config} from "config";
import Quiz from '../components/Quiz/Quiz'
import JavascriptQuestions from '../components/Quiz/Questions/JavascriptQuestions'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: JavascriptQuestions
        }
    }

    handleChange = (event) => {
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
                <Helmet title={`${config.siteTitle} | About Us`}/>
                <Quiz questions={this.state.quiz}/>

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