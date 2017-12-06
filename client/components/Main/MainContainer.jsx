import React, { Component } from 'react';
import { render } from 'react-dom';
import Video from './Video';
import Summary from './Summary';


class MainContainer extends Component {
    render() {
        return (
            <div id = 'main-container'>
                <div id = 'video-container'>
                    <Video/>
                </div>
                <div id = 'summary-container'>
                    <Summary/>
                </div>
            </div> 
        )
    }
}

export default MainContainer;