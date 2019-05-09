const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two'],
};

let count = 0;
const addOne = () => {
    count = count + 1;
}
const subtractOne = () => {
    count = count - 1;
}
const reset = () => {
    count = 0;
}

const template = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
