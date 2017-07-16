import React from "react";
import {prefixLink} from "gatsby-helpers";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer container-fluid">
                <div className="row">
                    <div className="col-xs start"><a className="tag" href="http://twitter.com/dam">@dam ♡s you</a></div>
                    <div className="col-xs end"><a className="link-foot" href="#top">⇪ back to top</a></div>
                </div>
            </footer>
        )
    }
}
export default Footer