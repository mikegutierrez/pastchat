import React, { Component } from 'react';
import { render } from 'react-dom';
import Comment from './Comment';


class MessageBox extends Component {
    render() {
        return (
            <div>
                <Comment/>
            </div> 
        )
    }
}

export default MessageBox;