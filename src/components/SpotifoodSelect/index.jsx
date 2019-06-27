import React, { Component } from 'react';

import './styles.scss';

class SpotifoodSelect extends Component {

    render() {
        return (
            <select id={this.props.id} className="spotifood-select" name={this.props.name} onChange={this.props.onChangeField}>
                <option value="">Selecione</option>
                {this.props.values.map(item => <option key={`option-${item.name}`} value={item.value}>{item.name}</option>)}
            </select>
        )
    }
}
export default SpotifoodSelect;