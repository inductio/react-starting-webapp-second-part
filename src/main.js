import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Comp from './components/Comp';

const root = document.getElementById("root");

const Root = () => {
    return (
        <div>
            <App />
            <Comp />
        </div>
    );
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);