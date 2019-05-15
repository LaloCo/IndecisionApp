class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer, what could go wrong?';
        const options = ['one', 'two', 'three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action options={options}/>
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        );
    }
}

class Header extends React.Component { 
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.props.options.length);

        const selectedValue = this.props.options[randomNumber];
        alert(selectedValue);
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);

        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        this.props.options = [];
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} option={option}/>)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(e) {
        e.preventDefault(); // stop full page refresh

        const option = e.target.elements.optionText.value.trim();

        if (option) {
            this.props.options.push(option);
            e.target.elements.optionText.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionText"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));