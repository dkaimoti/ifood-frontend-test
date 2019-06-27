import React, { Component } from 'react';

import './styles.scss';

class SpotifoodInput extends Component {

    render() {
        return (
            <input id={this.props.id} className={`spotifood-input spotifood-input-${this.props.customClass}`} value={this.props.value}
            type={this.props.type === 'INTEGER' ? 'number' : 'text'} onChange={this.props.onChangeField} />
        )
    }
}
export default SpotifoodInput;