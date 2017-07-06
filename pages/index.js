import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link to={prefixLink('/about/')}>Go to page 2</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium, aliquid amet architecto commodi consequuntur delectus earum excepturi, exercitationem magnam maiores optio praesentium quasi, repellat similique ut! Ipsam, nobis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem culpa cum delectus deserunt doloremque eaque eveniet, illo nobis officia perspiciatis quibusdam, quod quos sapiente sequi, totam vitae voluptatem!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugiat illo nemo neque pariatur
                    quidem reiciendis reprehenderit vitae. Ab amet corporis ea facilis ipsa quidem quis, quisquam
                    repellat voluptatum? Veritatis.</p><p>Commodi esse impedit ratione rerum sapiente sunt, voluptas
                voluptates? Delectus earum eveniet modi praesentium quos? Ab architecto cum, doloribus explicabo fugiat
                inventore nisi nostrum odit quae, ratione rem saepe unde.</p><p>Aliquid eaque eos, ex, inventore iusto
                magnam molestiae natus omnis optio perferendis quis quo similique temporibus veritatis voluptates? Alias
                aut autem illum iusto quam, quidem rerum sequi? A, pariatur voluptatibus.</p><p>Accusantium aliquam
                architecto assumenda aut, beatae consectetur cumque deleniti, dolor enim exercitationem hic labore
                laboriosam nemo nisi obcaecati porro quasi qui quisquam rerum soluta sunt totam voluptatum! Obcaecati,
                possimus, voluptatibus?</p>
            </div>
        )
    }
}