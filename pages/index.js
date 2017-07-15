import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import ReactImage from '../assets/code-icons/react.svg'
import JsImage from '../assets/code-icons/js.svg'
import PythonImage from '../assets/code-icons/python.svg'
import NodeImage from '../assets/code-icons/nodejs.svg'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="wrap-home-boxes">
                    <div className="topper">
                        <div className="topper-title">
                            <h3>Choose Quiz</h3>
                        </div>
                    </div>
                    <div className="cards-row row">
                        <div className="col-xs">
                            <div className="box">
                                <div className="blog-card">
                                    <div className="photo">
                                        <img src={JsImage} alt=""/>
                                    </div>
                                    <div className="description">
                                        <h3>Javascript</h3>
                                        {/*<h2>Opening a door to the future</h2>*/}
                                        <p className="summary">Lorem ipsum dolor sit amet,  adipisicing elit. Ad eum dolorum architecto </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs">
                            <div className="box">
                                <div className="blog-card">
                                    <div className="photo">
                                        <img src={ReactImage} alt=""/>
                                    </div>
                                    <div className="description">
                                        <h3>React</h3>
                                        {/*<h2>Opening a door to the future</h2>*/}
                                        <p className="summary">Lorem ipsum dolor sit amet,  adipisicing elit. Ad eum dolorum architecto </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards-row row">
                        <div className="col-xs">
                            <div className="box">
                                <div className="blog-card">
                                    <div className="photo">
                                        <img src={NodeImage} alt=""/>
                                    </div>
                                    <div className="description">
                                        <h3>Node.js</h3>
                                        {/*<h2>Opening a door to the future</h2>*/}
                                        <p className="summary">Lorem ipsum dolor sit amet,  adipisicing elit. Ad eum dolorum architecto </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs">
                            <div className="box">
                                <div className="blog-card">
                                    <div className="photo">
                                        <img src={PythonImage} alt=""/>
                                    </div>
                                    <div className="description">
                                        <h3>Python</h3>
                                        {/*<h2>Opening a door to the future</h2>*/}
                                        <p className="summary">Lorem ipsum dolor sit amet,  adipisicing elit. Ad eum dolorum architecto </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to={prefixLink('/about/')}>Go to page 2</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, aliquid amet architecto commodi consequuntur delectus earum excepturi, exercitationem magnam maiores optio praesentium quasi, repellat similique ut! Ipsam, nobis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem culpa cum delectus deserunt doloremque eaque eveniet, illo nobis officia perspiciatis quibusdam, quod quos sapiente sequi, totam vitae voluptatem!</p>
            </div>
        )
    }
}