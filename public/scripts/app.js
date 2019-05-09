'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    age: 17
};

function getSomething() {
    if (new Date().getMonth() > 6) {
        return "You are not on track";
    }
    return "You are on track";
}

function showSignInButton(show) {
    if (show) {
        return React.createElement(
            'button',
            null,
            'Inicia sesi\xF3n'
        );
    } else {
        return undefined;
    }
}

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle ? app.subtitle : 'Well, this is unexpected'
    ),
    React.createElement(
        'p',
        null,
        getSomething()
    ),
    showSignInButton(true),
    app.age && app.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        app.age
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
