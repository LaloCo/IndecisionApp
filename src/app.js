const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
};

const addOption = (e) => {
    e.preventDefault(); // stop full page refresh

    const option = e.target.elements.optionText.value;

    if (option) {
        app.options.push(option);
        e.target.elements.optionText.value = '';
    }

    render();
};

const clearOptions = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={clearOptions}>Remove all</button>
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <ol>
            {
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="optionText"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
