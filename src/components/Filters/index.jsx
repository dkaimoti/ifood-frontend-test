import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

import './styles.scss';
import SpotifoodSelect from '../SpotifoodSelect';
import SpotifoodInput from '../SpotifoodInput';

class Filters extends Component {

    render() {
        return (
            <div className="filters-container">
                {
                    this.props.filters.map(filter => {
                        if (filter.values) {
                            return (    
                                <SpotifoodSelect key={`filter-${filter.id}`} label={filter.name} onChangeField={this.props.onChangeField}  name={filter.name} id={filter.id} values={filter.values} />
                            )
                        } else {
                            if (filter.id === 'timestamp') {
                                return (
                                    <div className="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <DateTimePicker key={`filter-${filter.id}`}
                                            id={filter.id}
                                            className="filters-input"
                                            onChange={this.props.onChangeDatePicker}
                                            value={this.props.date}
                                            format="y-MM-dd h:mm:ss a"
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <SpotifoodInput key={`filter-${filter.id}`} label={filter.name} onChangeField={this.props.onChangeField}  name={filter.name} id={filter.id} value={this.props.filtersValues[filter.id]} />
                                )
                            }
                        }
                    })
                }
            </div>
        )
    }
}
export default Filters;