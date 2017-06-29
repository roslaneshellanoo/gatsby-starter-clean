import React from "react";
import {prefixLink} from "gatsby-helpers";
import Helmet from "react-helmet";
import {config} from "config";
import quiz from "../../../components/Questions";

export default class JavascriptQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: quiz,
            quizLength: quiz.questions.length,
            steps: quiz.questions.map(function (v, i) {
                return i + 1
            }),
            activeStep: 1,
            questionIndex: 0,
            userResponses: new Array(quiz.questions.length).fill('')
        }

    }

    handleNext = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            activeStep: this.state.activeStep + 1
        })
    }

    handlePrev() {
        this.state.questionIndex--
        this.state.activeStep--
    }

    clickedAnswer = (index, answer) => {
        const updatedAnswers = [...this.state.userResponses]
        updatedAnswers[this.state.questionIndex] = index
        this.setState({
            ...this.state,
            userResponses: updatedAnswers
        })
    }

    score() {
        let rightAnswers = 0
        let quizObj = this.state.quiz
        this.state.userResponses.forEach(function (value, index) {
            if (quizObj.questions[index].answer === value) {
                rightAnswers++
            }
        })
        return rightAnswers
    }

    render() {

        return (
            <div>
                <Helmet title={`${config.siteTitle} | Javascript quiz`}/>
                <h1>
                    this is javascript page
                </h1>
                <div className='wrap-quiz'>
                    <div className='wrap-questions'>
                        {this.state.quiz.questions.map((question, index) => {
                            if (index === this.state.questionIndex) {
                                return (
                                    <div key={index}>

                                        <div key={index}>{question.text}</div>
                                        <div className='wrap-answers'>
                                            {question.responses.map((response, index) =>
                                                <div onClick={() => this.clickedAnswer(index, response.text)}
                                                     key={index}>{index + 1}. {response.text}</div>
                                            )}
                                        </div>
                                    </div>
                                )
                            }

                        })}
                    </div>
                    <div>
                        <button onClick={this.handleNext}>{'Click here'}</button>
                    </div>

                </div>
            </div>
        )
    }
}