import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from './TextField.js';
import Dropdown from './Dropdown.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <TextField label="First name: "></TextField>
                <TextField label="Last name: "></TextField>
                <Dropdown label="Country:"></Dropdown>
            </div>
        );
    }
}

export default App;
