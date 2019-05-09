'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var count = 0;
var addOne = function addOne() {
    count = count + 1;
};
var subtractOne = function subtractOne() {
    count = count - 1;
};
var reset = function reset() {
    count = 0;
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: subtractOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
