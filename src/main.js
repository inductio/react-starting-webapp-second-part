/**
 * Created by Oleksandr_Shustrov on 4/4/2016.
 */
import React from 'react';
import App from './components/App';
import Comp from './components/Comp';

const root = document.getElementById("root");

React.render(
    <div>
        <App />
        <Comp />
    </div>,
    root);