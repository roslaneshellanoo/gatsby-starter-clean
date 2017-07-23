import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ReactImage from '../../assets/code-icons/react.svg'
import JsImage from '../../assets/code-icons/js.svg'
import PythonImage from '../../assets/code-icons/python.svg'
import NodeImage from '../../assets/code-icons/nodejs.svg'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'

class Quizes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Quizes`}
          meta={[
            { 'name': 'description', 'content': 'Choose programming language to test your code skills' },
            { 'name': 'keywords', 'content': 'quiz' },
          ]}
        />

        {/* <Link to={prefixLink('/')}>Go back to the homepage</Link> */}

        <div className='wrap-quizes-boxes'>
          <div className='topper'>
            <div className='topper-title'>
              <h3>Choose Quiz</h3>
            </div>
          </div>
          <div className='cards-row row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='box-quiz-block'>
                <div className='blog-card'>
                  <div className='row'>
                    <div className='photo col-xs'>
                      <img src={JsImage} alt=''/>
                    </div>
                    <div className='description col-xs'>
                      <h3>Javascript</h3>
                      <p className='summary'>
      The most popular programming language in the world
                      </p>
                    </div>
                  </div>

                  <div className='wrap-quizes-list row text-center center-xs'>
                    <div className='quizes-list'>
                      <span>Javascript - Beginner</span>
                      <RaisedButton
                        containerElement={<Link to={prefixLink('/quizes/javascript/')} />}
                        label='Start Quiz' />
                    </div>
                    <Divider />
                    <div className='quizes-list'>
                      <Link to={prefixLink('quizes/javascript/')}>
                        <span>Javascript - Senior</span>
                      </Link>
                      <RaisedButton label='Start Quiz' />
                    </div>
                    <Divider />
                    <div className='quizes-list'>
                      <Link to={prefixLink('quizes/javascript/')}>
                        <span>Javascript - ES6/ES2015</span>
                      </Link>
                      <RaisedButton label='Start Quiz' />
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='box-quiz-block'>
                <div className='blog-card'>
                  <div className='row'>
                    <div className='photo col-xs'>
                      <img src={JsImage} alt=''/>
                    </div>
                    <div className='description col-xs'>
                      <h3>Javascript</h3>
                      <p className='summary'>
                        The most popular programming language in the world
                      </p>
                    </div>
                  </div>

                  <div className='wrap-quizes-list row text-center center-xs'>
                    <div className='quizes-list'>
                      <span>Javascript - Beginner</span>
                      <RaisedButton
                        containerElement={<Link to={prefixLink('/quizes/javascript/')} />}
                        label='Start Quiz' />
                    </div>
                    <Divider />
                    <div className='quizes-list'>
                      <Link to={prefixLink('quizes/javascript/')}>
                        <span>Javascript - Senior</span>
                      </Link>
                      <RaisedButton label='Start Quiz' />
                    </div>
                    <Divider />
                    <div className='quizes-list'>
                      <Link to={prefixLink('quizes/javascript/')}>
                        <span>Javascript - ES6/ES2015</span>
                      </Link>
                      <RaisedButton label='Start Quiz' />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quizes
