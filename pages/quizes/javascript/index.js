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
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    quizWrapper: {
        padding: '0',
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none'
    },
    list: {
        borderBottom: '1px solid #d9d9d9'
    },
    sidebar: {
        top: {
            color: '#9f7ece',
            fontSize: '30px',
            textAlign: 'center',
            margin: '2rem 0'
        }
    }
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
                    style={styles.quizWrapper}
                    className="5435435"
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
            completed: 0,
            quiz: quiz,
            quizLength: quiz.questions.length,
            steps: quiz.questions.map(function (v, i) {
                return i + 1
            }),
            activeStep: 1,
            questionIndex: 0,
            userResponses: new Array(quiz.questions.length).fill(null),
            score: 0
        }

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
                activeStep: this.state.activeStep + 1,
                completed: this.state.completed + 20
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
            quizLength: quiz.questions.length,
            steps: quiz.questions.map(function (v, i) {
                return i + 1
            }),
            activeStep: 1,
            questionIndex: 0,
            userResponses: new Array(quiz.questions.length).fill(null),
            score: 0,
            completed: 0
        })
    }

    finalScore = () => {
        if (this.state.questionIndex >= this.state.quizLength ) {
            return (
                <div>
                    <div>My score is {this.state.score}</div>
                    <RaisedButton onTouchTap={this.restart} label="Restart" />
                </div>
            )
        }
    }

    render() {

        return (
            <div className="row">
                <Helmet title={`${config.siteTitle} | Javascript quiz`}/>
                {/*<h1>*/}
                    {/*this is javascript page*/}
                {/*</h1>*/}
                <div className='wrap-quiz col-xs-12 col-sm-9'>
                    <div className='wrap-questions'>
                        {this.state.quiz.questions.map((question, index) => {
                            if (index === this.state.questionIndex) {
                                return (
                                    <div key={index}>

                                        <h3 key={index}>{question.text}</h3>
                                            <SelectableList className='wrap-answers'>
                                                {question.responses.map((response, index) =>
                                                        <ListItem
                                                            style={styles.list}
                                                            value={index}
                                                            onTouchTap={() => this.clickedAnswer(index, response.text)}
                                                            key={index}
                                                            primaryText={response.text}
                                                            leftAvatar={
                                                                <Avatar
                                                                    color={'#00bcd4'} backgroundColor={transparent}
                                                                    style={{
                                                                        left: 8,
                                                                        top: 12,
                                                                        border: '1px solid',
                                                                        fontSize: '15px',
                                                                        fontWeight: 300,
                                                                        width: '30px',
                                                                        height: '30px'
                                                                    }}
                                                                >
                                                                    {index + 1 }
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
                        <br/>
                        { this.state.questionIndex < this.state.quizLength  ?
                            <RaisedButton onTouchTap={this.handleNext} label="Next" primary/> :
                            null
                        }
                        <br />
                        <br />
                    </div>


                    {this.finalScore()}

                </div>
                <div className="content-sidebar col-sm-3">
                    <LinearProgress style={{borderRadius: 0}} mode="determinate" value={this.state.completed} />
                    <div className="box-row">
                        <div style={styles.sidebar.top}>
                            <span>83%</span>
                        </div>
                       <h4> STAGE {this.state.questionIndex} of {this.state.quizLength}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        <p>At beatae cupiditate deleniti ea facere in inventore, ipsum iure maxime mollitia nostrum, odit perferendis quam quasi quos recusandae repudiandae rerum sit?</p>
                    </div>

                </div>


            </div>
        )
    }
}