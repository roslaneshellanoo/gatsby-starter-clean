import React from "react";
import PropTypes from 'prop-types';
import {prefixLink} from "gatsby-helpers";
import Helmet from "react-helmet";
import {config} from "config";
import quiz from "../../../components/Questions";
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

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
            userResponses: new Array(quiz.questions.length).fill(''),
            score: 0
        }

    }

    handleNext = () => {

        let quizObj = this.state.quiz
        let quizIndex = this.state.questionIndex
        if (this.state.userResponses[quizIndex] === quizObj.questions[quizIndex].answer) {
            this.setState({score: this.state.score + 1})
        }
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

    // score = () => {
    //     let quizObj = this.state.quiz
    //     let quizIndex = this.state.questionIndex
    //     if (this.state.userResponses[quizIndex] === quizObj.questions[quizIndex].answer) {
    //         this.setState({score: this.state.score + 1})
    //     }
    //
    // }

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
                                        <List className='wrap-answers'>
                                            {question.responses.map((response, index) =>
                                                <ListItem
                                                onTouchTap={() => this.clickedAnswer(index, response.text)}
                                                key={index}
                                                primaryText={response.text}
                                                />
                                            )}
                                        </List>
                                    </div>
                                )
                            }

                        })}
                    </div>
                    <div>
                        <button onClick={this.handleNext}>{'Click here'}</button>
                    </div>

                    <div>my score is {this.state.score}</div>
                    <div>my score is {() => this.score}</div>
                    <div>
                        <Divider />
                        <List>
                            <ListItem
                                primaryText="Notifications"
                            />
                            <ListItem
                                primaryText="Sounds"
                            />
                            <ListItem
                                primaryText="Video sounds"
                            />
                        </List>
                    </div>
                </div>
            </div>
        )
    }
}