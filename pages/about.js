import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import JavascriptQuestions from '../components/Quiz/Questions/JavascriptQuestions'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quiz: JavascriptQuestions
    }
  }

  render () {
    const ChannelsList = () => (
      <ul>
        <li>Channel 1</li>
        <li>Channel 2</li>
      </ul>
    )
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | About Us`}
          meta={[
            { 'name': 'description', 'content': 'Test your code skills online and improve your knowledge by resolving simple programming quizes' },
            { 'name': 'keywords', 'content': 'quiz' },
          ]}
        />

        <p>Welcome to page 2</p>
        <Link to={prefixLink('/')}>Go back to the homepage</Link>
        <br/>
        <div>
          <ChannelsList />
        </div>
      </div>
    )
  }
}

export default About
