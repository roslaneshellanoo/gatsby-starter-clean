import React from "react";
import PropTypes from "prop-types";
import {prefixLink} from "gatsby-helpers";
import Helmet from "react-helmet";
import {config} from "config";
import quiz from "../../../components/Questions";
import {List, ListItem, makeSelectable} from "material-ui/List";
import Divider from "material-ui/Divider";
import Avatar from "material-ui/Avatar";
import {pinkA200, transparent} from "material-ui/styles/colors";
import RaisedButton from "material-ui/RaisedButton";
import base from '../../../utils/firebase'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
    return class SelectableList extends React.Component {
        static propTypes = {
            children: PropTypes.node.isRequired,
            defaultValue: PropTypes.number,
        };

        componentWillMount() {
            this.setState({
                selectedIndex: this.props.defaultValue,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange}
                >
                    {this.props.children}
                </ComposedComponent>
            );
        }
    };
}

SelectableList = wrapState(SelectableList);

export default class JavascriptQuiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: [],
            quizLength: null,
            activeStep: 1,
            questionIndex: 0,
            userResponses: new Array(quiz.length).fill(null),
            score: 0
        }

    }

    componentDidMount() {
        this.ref = base.syncState('quiz', {
            context: this,
            state: 'quiz',
            asArray: true,
            then (er) {
                console.log(er)
                this.setState({quizLength: quiz.length})
            }
        })
    }

    handleNext = () => {

        let quizObj = this.state.quiz
        let quizIndex = this.state.questionIndex
        let responses = this.state.userResponses
        if (responses[quizIndex] === quizObj.questions[quizIndex].answer) {
            this.setState({score: this.state.score + 1})
        }
        if (responses[quizIndex] !== null) {
            this.setState({
                questionIndex: this.state.questionIndex + 1,
                activeStep: this.state.activeStep + 1
            })
        }
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

    restart = (e) => {
        this.setState({
            quiz: quiz,
            quizLength: quiz.length,
            steps: quiz.map(function (v, i) {
                return i + 1
            }),
            activeStep: 1,
            questionIndex: 0,
            userResponses: new Array(quiz.length).fill(null),
            score: 0
        })
    }

    finalScore = () => {
        if (this.state.questionIndex >= this.state.quizLength) {
            return (
                <div>
                    <div>My score is {this.state.quizLength}/{this.state.score}</div>
                    <RaisedButton onTouchTap={this.restart} label="Restart"/>
                </div>
            )
        }
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
                        {this.state.quiz.map((question, index) => {
                            if (index === this.state.questionIndex) {
                                return (
                                    <div key={index}>

                                        <div key={index}>{question.question}</div>
                                        <SelectableList className='wrap-answers'>
                                            {question.answers.map((response, index) =>
                                                <ListItem
                                                    value={index}
                                                    onTouchTap={() => this.clickedAnswer(index, response)}
                                                    key={index}
                                                    primaryText={response}
                                                    leftAvatar={
                                                        <Avatar
                                                            color={'red'} backgroundColor={transparent}
                                                            style={{left: 8}}
                                                        >
                                                            {index + 1 + '.'}
                                                        </Avatar>
                                                    }
                                                />
                                            )}
                                        </SelectableList>

                                    </div>
                                )
                            }

                        })}
                    </div>
                    <div>
                        { this.state.questionIndex < this.state.quizLength ?
                            <RaisedButton onTouchTap={this.handleNext} label="Next" primary/> :
                            null
                        }
                        <br />
                        <br />
                    </div>
                    <Divider />

                    {this.finalScore()}

                </div>
            </div>
        )
    }
}