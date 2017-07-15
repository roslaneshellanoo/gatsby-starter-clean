import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import muiThemeable from 'material-ui/styles/muiThemeable'
import Logo from '../assets/logo4.png'

const style ={
    toolbar: {
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
    },
    link: {
        margin: '10px 15px',
    },
    label: {
        fontSize: '15px',
        fontWeight: 300,
        textTransform: 'none',
        letterSpacing: '1px'
    }
}
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
    }

    render() {
        return (
            <Toolbar style={style.toolbar}>
                <ToolbarGroup firstChild={false}>
                    <div className="logo">
                        <Link to={prefixLink('/')}>
                            <img src={Logo} alt=""/>
                        </Link>
                    </div>

                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton
                        style={style.link}
                        labelStyle={style.label}
                        containerElement={<Link to="/about/" />}
                        label={'About'}
                    />
                    <FlatButton
                        style={style.link}
                        labelStyle={style.label}
                        containerElement={<Link style={style.link} to="/quizes/" />}
                        label={'Quizes'}
                    />
                    <FlatButton
                        style={style.link}
                        labelStyle={style.label}
                        containerElement={<Link style={style.link} to="/quizes/javascript/" />}
                        label={'Javascript'}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default muiThemeable() (Header)