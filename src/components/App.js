import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            messages: [
                'messages 1 -- hi there, how are you?',
                'messages 2 -- I am fine, and you?'
            ]
        };
        this.renderMessages = this.renderMessages.bind(this);
    }

    renderMessages() {
        return this.state.messages.map((message)=> <div>{message}</div>);
    };

    render() {
        return (
            <div>{this.renderMessages()}</div>
        );
    }

}

export default App;