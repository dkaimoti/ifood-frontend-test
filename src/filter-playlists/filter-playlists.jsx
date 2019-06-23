import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTimePicker from 'react-datetime-picker';

import './filter-playlists.scss';
import { filterValueChanged } from './filter-playlists-actions';
import { getFields } from './filter-fields-actions';

class FilterPlaylists extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date(),
        }
    }

    componentWillMount() {
        this.props.getFields();
    }

    onChange = date => {
        this.setState({ date })
        const payload = {
            target: {
                value: date,
                id: 'timestamp'
            }
        }
        this.props.filterValueChanged(payload) 
    } 

    render() {
        return (
            <div className="filters-container">
                {
                    this.props.filters.map(filter => {
                        if (filter.values) {
                            return (
                                <div className="filters-group" key={`filter-${filter.id}`}>
                                    <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                    <select id={filter.id} className="filters-select" name={filter.name} onChange={this.props.filterValueChanged}>
                                        <option value="">{this.props.filtersValues[filter.id]}</option>
                                        {filter.values.map(item => <option key={`option-${item.name}`} value={item.value}>{item.value}</option>)}
                                    </select>
                                </div>
                            )
                        } else {
                            if (filter.id === 'timestamp') {
                                return (
                                    <div className="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <DateTimePicker key={`filter-${filter.id}`}
                                            id={filter.id}
                                            className="filters-input"
                                            onChange={this.onChange}
                                            value={this.state.date}
                                            format="y-MM-dd h:mm:ss a"
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <input id={filter.id} className={`filters-input filters-${filter.validation.primitiveType.toLowerCase()}`} value={this.props.filtersValues[filter.id]}
                                            type={filter.validation.primitiveType === 'INTEGER' ? 'number' : 'text'} onChange={this.props.filterValueChanged} />
                                    </div>
                                )
                            }


                        }
                    })
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({ filters: state.filtersFields.filters, filtersValues: state.filtersValues });
const mapDispatchToProps = dispatch => bindActionCreators({ getFields, filterValueChanged }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FilterPlaylists);