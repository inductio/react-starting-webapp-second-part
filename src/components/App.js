import React from 'react';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            messages: [
                'messages 1 -- hi there, how are you?',
                'messages 2 -- I am fine, and you?'
            ]
        }
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <div>{message}</div>
            );
        });

        return (
            <div>{messageNodes}</div>
        );
    }

}

export default App;