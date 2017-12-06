import React, { Component } from 'react';
import { render } from 'react-dom';


class NavContainer extends Component {
    render() {
        return (
            <div id="nav-container">
                <div id="form-container">
                    <form>
                        <input type="text" component="input" placeholder="URL HERE"/>
                        <button component="input" type="submit">save </button>
                    </form>
                </div>
                <div>
                    <button id="oAuth-container">OAuth button</button>
                </div>
            </div>
        )
    }
}

export default NavContainer;