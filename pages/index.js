import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Helmet from 'react-helmet'
import ReactImage from '../assets/code-icons/react.svg'
import JsImage from '../assets/code-icons/js.svg'
import PythonImage from '../assets/code-icons/python.svg'
import NodeImage from '../assets/code-icons/nodejs.svg'
import ListIcon from '../assets/check-mark.svg'
import LikeIcon from '../assets/like-icon.svg'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          meta={[
            { 'name': 'description', 'content': 'Test your code skills online and improve your knowledge by resolving simple programming quizes' },
            { 'name': 'keywords', 'content': 'quiz' },
          ]}
          title={`${config.siteTitle} | Test your code skills`}/>
        <div className='wrap-home-boxes'>
          <div className='topper'>
            <div className='topper-title'>
              <h3>Choose Quiz</h3>
            </div>
          </div>
          <div className='cards-row row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='box'>
                <Link to={prefixLink('quizes/javascript/')}>
                  <div className='blog-card br-js'>
                    <div className='photo'>
                      <img src={JsImage} alt=''/>
                    </div>
                    <div className='description'>
                      <h3>Javascript</h3>
                      <p className='summary'>
                                                The most popular programming language in the world
                      </p>

                    </div>
                  </div>
                </Link>

              </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='box'>
                <div className='blog-card br-react'>
                  <div className='photo'>
                    <img src={ReactImage} alt=''/>
                  </div>
                  <div className='description'>
                    <h3>React</h3>
                    {/* <h2>Opening a door to the future</h2> */}
                    <p className='summary'>
                                            Popular JavaScript library for building user interfaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cards-row row'>
            <div className='col-xs-12 col-sm-6'>
              <div className='box'>
                <div className='blog-card br-node'>
                  <div className='photo'>
                    <img src={NodeImage} alt=''/>
                  </div>
                  <div className='description'>
                    <h3>Node.js</h3>
                    {/* <h2>Opening a door to the future</h2> */}
                    <p className='summary'>
                                            Node.js is an open-source, cross-platform JavaScript run-time environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
              <div className='box'>
                <div className='blog-card br-python'>
                  <div className='photo'>
                    <img src={PythonImage} alt=''/>
                  </div>
                  <div className='description'>
                    <h3>Python</h3>
                    {/* <h2>Opening a door to the future</h2> */}
                    <p className='summary'>Python is powerful general-purpose programming language. Friendly and easy to learn.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-block'>
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
              <div className='box box-shadowed text-center'>
                <img src={ListIcon} width={'100'} />
                <p>Solve code quizzes and improve your <strong>programming skills</strong> </p>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4'>
              <div className='box box-shadowed text-center'>
                <img src={LikeIcon} width={'100'} />
                <p>Completely <strong>Free of charge</strong> <br/> without registration and signup</p>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4'>
              <div className='box box-shadowed text-center'>
                <img src={ListIcon} width={'100'} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>

        <div className='home-block quote-block box-shadowed'>
          <div className='row'>
            <div className='col-xs-12 col-sm-4'>
              <div className='box quote-author'>
                <span>
                  &nbsp;
                </span>
              </div>
            </div>
            <div className='col-xs-12 col-sm-8'>
              <div className='box'>
                <blockquote className='home-quote relative'>
                  Knowledge is of no value unless you put it into practice
                </blockquote>
                <div className='text-center'>ANTON CHEKHOV</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
