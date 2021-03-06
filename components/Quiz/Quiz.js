import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, makeSelectable } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'
import { Card, CardActions, CardTitle } from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import shuffle from 'lodash/shuffle'
import RawHtml from 'react-raw-html'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  quizWrapper: {
    padding: '0',
    border: 'solid 1px #d9d9d9',
    borderBottom: 'none',
  },
  list: {
    borderBottom: '1px solid #d9d9d9',
    // fontWeight: '400'
    // backgroundColor: 'red'
  },
  sidebar: {
    top: {
      color: '#9f7ece',
      fontSize: '30px',
      textAlign: 'center',
      margin: '2rem 0'
    }
  }
}

let SelectableList = makeSelectable(List)

function wrapState (ComposedComponent) {
  return class SelectableList extends React.Component {
        static propTypes = {
          children: PropTypes.node.isRequired,
          defaultValue: PropTypes.number,
        };

        componentWillMount () {
          this.setState({
            selectedIndex: this.props.defaultValue,
          })
        }

        handleRequestChange = (event, index) => {
          this.setState({
            selectedIndex: index,
          })
        };

        render () {
          return (
            <ComposedComponent
              selectedItemStyle={{ backgroundColor: 'rgba(0, 150, 78, 0.13)' }}
              style={styles.quizWrapper}
              className='wrap-list-items'
              value={this.state.selectedIndex}
              onChange={this.handleRequestChange}
            >
              {this.props.children}
            </ComposedComponent>
          )
        }
  }
}

SelectableList = wrapState(SelectableList)

export default class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completed: 0,
      quiz: shuffle(this.props.questions.questions),
      quizLength: this.props.questions.questions.length,
      steps: this.props.questions.questions.map((v, i) => {
        return i + 1
      }),
      activeStep: 1,
      questionIndex: 0,
      userResponses: new Array(this.props.questions.questions.length).fill(null),
      score: 0,
    }
  }

    handleNext = () => {
      let totalPercent = 100 / this.state.quizLength
      let quizObj = this.state.quiz
      let quizIndex = this.state.questionIndex
      let responses = this.state.userResponses
      if (responses[quizIndex] === quizObj[quizIndex].answer) {
        this.setState({ score: this.state.score + 1 })
      }
      if (responses[quizIndex] !== null) {
        this.setState({
          questionIndex: this.state.questionIndex + 1,
          activeStep: this.state.activeStep + 1,
          completed: this.state.completed + totalPercent
        })
      }
    }

    handlePrev () {
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
        quiz: this.props.questions.questions,
        quizLength: this.props.questions.questions.length,
        steps: this.props.questions.questions.map(function (v, i) {
          return i + 1
        }),
        activeStep: 1,
        questionIndex: 0,
        userResponses: new Array(this.props.questions.questions.length).fill(null),
        score: 0,
        completed: 0
      })
    }
    buttonState = () => {
      return 'disabled'
    }

    finalScore = () => {
      let scorePercent = 100 / this.state.quizLength
      if (this.state.questionIndex >= this.state.quizLength) {
        return (
          <div>
            <h2 className='text-center'>{this.props.quizTitle} is Finished</h2>
            <Card style={{ textAlign: 'center', maxWidth: '350px', margin: 'auto' }}>
              <CardTitle
                style={{ background: 'linear-gradient(160deg, #02CCBA 0%, #AA7ECD 100%)', padding: '3rem 1rem' }}
                titleStyle={{ color: 'white', fontSize: '46px', marginBottom: '1rem' }}
                subtitleStyle={{ color: 'white', letterSpacing: '2px' }}
                title={`${parseInt(this.state.score * scorePercent)}%`}
                subtitle={`Your Score`} >
                <span className='white'>{this.state.score} / {this.state.quizLength}</span>
              </CardTitle>
              <CardActions style={{ padding: '1rem' }}>
                <div className='text-center'>
                  <RaisedButton onTouchTap={this.restart} label='Restart Quiz' />
                </div>
              </CardActions>
            </Card>
            <br/>
            <br/>
            <div className='wrap-results-questions'>
              {this.state.quiz.map((question, questionIndex) =>
                <Paper key={questionIndex} zDepth={1}>
                  <div key={questionIndex}>
                    <h4 className='results-question'>
                      <RawHtml.span>{question.text}</RawHtml.span>
                    </h4>
                    <ul>
                      {question.responses.map((response, index) => {
                        return (
                          <li key={index}
                            className={ (question.answer === index) ? 'mark-right-answer' : null} >

                            {response.text}

                          </li>
                        )
                      }
                      )}
                    </ul>
                  </div>
                </Paper>

              )}
            </div>

          </div>
        )
      }
    }

    render () {
      return (
        <div className='row'>
          <div className='wrap-quiz col-xs-12 col-sm-12'>
            <div className='wrap-questions'>
              {this.state.quiz.map((question, index) => {
                if (index === this.state.questionIndex) {
                  return (
                    <div key={index}>

                      <div className='que-block'>
                        <h3 className='question-title' key={index}>
                          <RawHtml.span>{question.text}</RawHtml.span>
                        </h3>
                        {question.code
                          ? <pre><code>{question.code.trim()}</code></pre>
                          : null
                        }
                      </div>

                      <SelectableList className='wrap-answers'>
                        {question.responses.map((response, index) =>
                          <ListItem
                            style={styles.list}
                            hoverColor={'#f9fffb'}
                            value={index}
                            onTouchTap={() => this.clickedAnswer(index, response.text)}
                            key={index}
                            primaryText={response.text}
                            leftAvatar={
                              <Avatar
                                color={'#00bcd4'} backgroundColor={'transparent'}
                                style={{
                                  left: 8,
                                  top: 18,
                                  border: '1px solid #00bcd4',
                                  fontSize: '12px',
                                  fontWeight: 300,
                                  width: '20px',
                                  height: '20px'
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
              {/* { */}
              {/* this.state.userResponses[this.state.questionIndex] === null */}
              {/* ? 'disabled' */}
              {/*: null */}
              {/* } */}

              { this.state.questionIndex < this.state.quizLength
                ? <RaisedButton onTouchTap={this.handleNext} label='Next' primary />
                : null
              }
            </div>

            {this.finalScore()}

          </div>
          <div className='content-sidebar'>
            <div className='stepper relative'>
              <LinearProgress
                style={{ borderRadius: 0, height: '58px', zIndex: 56, position: 'absolute', backgroundColor: '#2f3241' }}
                mode='determinate' value={this.state.completed} />
            </div>

            <div className='box-row'>
              <div className='progress-text'>
                <div>{this.props.quizTitle}</div>
                {/* <div>Finish the quiz to see the final results.</div> */}
              </div>
              <div className='progress-info'>
                <div className='perc-info'>
                  <span>{parseInt(this.state.completed)}%</span>
                </div>
                <span className='quiz-length text-center'> Stage {this.state.questionIndex} of {this.state.quizLength}</span>
              </div>
            </div>

          </div>

        </div>
      )
    }
}

Quiz.propTypes = {
  questions: PropTypes.object.isRequired,
  quizTitle: PropTypes.string.isRequired,
  padFooter: PropTypes.any
}
