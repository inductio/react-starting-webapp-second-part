/**
 * Created by Oleksandr_Shustrov on 4/4/2016.
 */
import React from 'react';
import App from './components/App.jsx';
import Comp from './components/Comp.jsx';
var rootWrp = document.getElementById("root");

React.render(
    <div>
        <Comp />
        <App />
    </div>,
    rootWrp);