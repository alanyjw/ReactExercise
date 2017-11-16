import React, {Component} from 'react';

import './TextField.css'

class TextField extends Component {
    render() {
        return (
            <fieldset className="textfield">
                <label className="textfield__label">{this.props.label}</label>
                <input className="textfield__input" type="text"/>
            </fieldset>
        )
    }
}

export default TextField;
