import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hi people
                </h1>
                <p>Welcome to page 2</p>
                <Link to={prefixLink('/')}>Go back to the homepage</Link>
                <br/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti dicta eaque explicabo harum necessitatibus repellendus sint. Facilis labore maxime officiis rerum similique. Ab fugiat quisquam reiciendis reprehenderit sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aperiam debitis dolor
                    dolores, eveniet fuga fugiat id magnam molestiae nihil quaerat, repellendus velit. Ipsa maiores
                    quisquam repellendus sint totam.</p>
            </div>
        )
    }
}