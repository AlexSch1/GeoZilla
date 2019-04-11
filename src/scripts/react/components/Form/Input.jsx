import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    onHandler = (e) => {
        e.preventDefault();
        this.props.handler(e.target.value, this.props.name)
    }

    render () {
        let classNameStr = [this.props.className];
        if (this.props.classNameNoValid) {
            classNameStr.push(this.props.classNameNoValid)
        }
        return (
            <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.onHandler}
                className={classNameStr.join(' ')}
            >
            </input>
        )
    }
}