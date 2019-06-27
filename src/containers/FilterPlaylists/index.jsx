import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { filterValueChanged } from '../../actions/filterPlaylists.actions';
import { getFields } from '../../actions/filterFields.actions';
import Filters from './../../components/Filters';

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

    onChangeField = (event) => {
        this.props.filterValueChanged(event)
    };

    render() {
        return (
            <Filters 
                filters={this.props.filters} 
                date={this.state.date} 
                onChangeDatePicker={this.onChangeDatePicker} 
                onChangeField={this.onChangeField} 
                filtersValues={this.props.filtersValues}
                />
        )
    }
}
const mapStateToProps = state => ({ filters: state.filtersFields.filters, filtersValues: state.filtersValues });
const mapDispatchToProps = dispatch => bindActionCreators({ getFields, filterValueChanged }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(FilterPlaylists);