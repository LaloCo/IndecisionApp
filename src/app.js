console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    age: 17,
};

function getSomething(){
    if((new Date()).getMonth() > 6 ) {
        return "You are not on track"
    }
    return "You are on track"
}

function showSignInButton(show){
    if(show) {
        return <button>Inicia sesión</button>
    } else {
        return undefined
    }
}

// JSX - JavaScript XML
var template  = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle ? app.subtitle : 'Well, this is unexpected'}</p>
        <p>{getSomething()}</p>
        {showSignInButton(true)}
        {(app.age && app.age >= 18) && <p>Age: {app.age}</p>}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
