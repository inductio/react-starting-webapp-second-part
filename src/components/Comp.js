import React, {Component} from 'react';

class Comp extends Component {

    constructor(){
        super();
        this.state = {
            messages: [
                'messages 3 -- ho ho oh'
            ]
        };
        this.renderMessages = this.renderMessages.bind(this);
    }

    renderMessages() {
        return this.state.messages.map((message)=> <div>{message}</div>);
    };

    render(){
        return (
            <div>{this.renderMessages()}</div>
        );
    }
}

export default Comp;