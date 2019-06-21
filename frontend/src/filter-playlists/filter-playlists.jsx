import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './filter-playlists.scss';
import { filterValueChanged } from './filter-playlists-actions';
import { getFields } from './filter-fields-actions';

class FilterPlaylists extends Component {

    componentWillMount() {
        this.props.getFields();
    }

    render() {
        return (
            <div className="filters-container">
                {
                    this.props.filters.map(filter => {
                        if (filter.values) {
                            return (
                                <div class="filters-group" key={`filter-${filter.id}`}>
                                    <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                    <select id={filter.id} className="filters-select" name={filter.name} onChange={this.props.filterValueChanged}>
                                        <option value="">{this.props.filtersValues[filter.id]}</option>
                                        {filter.values.map(item => <option key={`option-${item.name}`} value={item.value}>{item.value}</option>)}
                                    </select>
                                </div>
                            )
                        } else {
                            if(filter.id === 'timestamp') {
                                return (
                                    <div class="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <input id={filter.id} className="filters-input" value={this.props.filtersValues[filter.id]}
                                            type="datetime-local" onChange={this.props.filterValueChanged} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div class="filters-group" key={`filter-${filter.id}`}>
                                        <label className="filters-label" htmlFor={filter.name}>{filter.name}</label>
                                        <input id={filter.id} className="filters-input" value={this.props.filtersValues[filter.id]}
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
const mapDispatchToProps = dispatch => bindActionCreators({ getFields, filterValueChanged}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FilterPlaylists);