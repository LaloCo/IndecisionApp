import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleRemoveAll}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option no get started!</p>}
        {
            props.options.map((option) => (
                <Option key={option}
                        option={option}
                        handleRemoveOption={props.handleRemoveOption}/>
            ))
        }
    </div>
);

export default Options;
