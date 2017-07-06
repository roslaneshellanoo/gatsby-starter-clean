import React from "react";
import mainBanner from '../assets/cosmos.jpg'

class Banner extends React.Component {
    render () {
        return (
            <div className="banner">
                <img src={mainBanner} alt=""/>
            </div>
        )
    }
}

export default Banner