import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'

const style ={
    toolbar: {
        backgroundColor: '#ffffff',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
    },
    link: {
        margin: '10px 15px'
    }
}
export default class Header extends React.Component {

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
                    <ToolbarTitle text="Quizio.io" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton
                        style={style.link}
                        containerElement={<Link to="/about/" />}
                        label={'About'}
                    />
                    <FlatButton
                        style={style.link}
                        containerElement={<Link style={style.link} to="/quizes/" />}
                        label={'Quizes'}
                    />
                    <FlatButton
                        style={style.link}
                        containerElement={<Link style={style.link} to="/quizes/javascript/" />}
                        label={'Javascript'}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}