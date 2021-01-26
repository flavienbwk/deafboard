import React, { Component } from 'react'
import packageJson from '../package.json';

export class About extends Component {

    render() {
        return (
            <div>
                <h2>About</h2>
                <p>DeafBoard is a simple UI designed to facilitate the professional integration of deaf and/or dumb people for jobs such as cashier or waiter.</p>
                <p>If you find an issue or have a suggestion, <a target="_blank" rel="noopener noreferrer" href="https://github.com/flavienbwk/deafboard">please open an issue on Github</a>.</p>
                <hr />
                <p>Version <b>{packageJson["version"]}</b></p>
            </div>
        )
    }

    componentDidMount() {
        document.title = "About - DeafBoard";
    }

}
