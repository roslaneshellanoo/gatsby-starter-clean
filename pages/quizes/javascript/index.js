import React from "react";
import PropTypes from "prop-types";
import {prefixLink} from "gatsby-helpers";
import Helmet from "react-helmet";
import {config} from "config";
import Quiz from '../../../components/Quiz/Quiz'
import JavascriptQuestions2 from '../../../components/Quiz/Questions/JavascriptQuestions2'




export default class JavascriptQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: JavascriptQuestions2,
        }

    }

    render() {

        return (
            <div className="row">
                <Helmet title={`${config.siteTitle} | Javascript quiz`}/>
                <Quiz questions={this.state.quiz}/>

            </div>
        )
    }
}