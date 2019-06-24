import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTimePicker from 'react-datetime-picker';

import './filter-playlists.scss';
import { filterValueChanged } from './filter-playlists-actions';
import { getFields } from './filter-fields-actions';
import SpotifoodSelect from './../spotifood-select/spotifood-select';
import SpotifoodInput from '../spotifood-input/spotifood-input';

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

    onChangeDatePicker = date => {
        this.setState({ date })
        const payload = {
            target: {
                value: date,
                id: 'timestamp'
            }
        }
        this.props.filterValueChanged(payload) 
    } 

    onChangeField = (event) => this.props.filterValueChanged(event);

    render() {
        return (
            <div className="filters-container">
                {
                    this.props.filters.map(filter => {
                        if (filter.values) {
                            return (    
                                <div className="filters-group" key={`filter-${filter.id}`}>
                                    <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                    <SpotifoodSelect  onChangeField={this.onChangeField}  name={filter.name} id={filter.id} values={filter.values} />
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
                                            onChange={this.onChangeDatePicker}
                                            value={this.state.date}
                                            format="y-MM-dd h:mm:ss a"
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <SpotifoodInput  onChangeField={this.onChangeField}  name={filter.name} id={filter.id} value={this.props.filtersValues[filter.id]} />
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