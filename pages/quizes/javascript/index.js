import React from 'react'
import PropTypes from 'prop-types'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import Quiz from '../../../components/Quiz/Quiz'
import JavascriptQuestions from '../../../components/Quiz/Questions/JavascriptQuestions'

export default class JavascriptQuiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quiz: JavascriptQuestions,
    }
  }

  render () {
    return (
      <div className='wrap-quiz-page'>
        <Helmet title={`${config.siteTitle} | Javascript quiz`}/>
        <Quiz questions={this.state.quiz} quizTitle={'Javascript Quiz'} />
      </div>
    )
  }
}
