import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault(); // stop full page refresh

        const option = e.target.elements.optionText.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() =>  ({ error }));

        if (!error) {
            e.target.elements.optionText.value = '';
        }
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option"
                      onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="optionText"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}