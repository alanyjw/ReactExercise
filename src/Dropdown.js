import React, {Component} from 'react';

import './Dropdown.css'

class Dropdown extends Component {
    render() {
        return (
            <fieldset className="dropdown-field">
                <label className="dropdown-field__label">{this.props.label}</label>
                <select className="dropdown-field__select">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </fieldset>
        )
    }
}

export default Dropdown;