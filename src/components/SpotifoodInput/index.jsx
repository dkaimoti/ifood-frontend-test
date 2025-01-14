import React, { Component } from 'react';

import './styles.scss';

class SpotifoodInput extends Component {

    render() {
        return (
            <div className="spotifood-group">
                <label className="spotifood-label">{this.props.label}</label>
                <input id={this.props.id} className={`spotifood-input spotifood-input-${this.props.type}`} value={this.props.value}
                type={this.props.type === 'integer' ? 'number' : 'text'} onChange={this.props.onChangeField} />
            </div>
        )
    }
}
export default SpotifoodInput;