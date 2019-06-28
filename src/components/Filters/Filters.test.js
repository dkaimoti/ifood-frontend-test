import React from 'react';
import { shallow } from 'enzyme';
import Filters from '.';

const filtersMock = [
    {
        "id": "locale",
        "name": "Locale",
        "values": [
            {
                "value": "en_AU",
                "name": "en_AU"
            }
        ]
    },
    {
        "id": "country",
        "name": "País",
        "values": [
            {
                "value": "AU",
                "name": "Australia"
            }
        ]
    },
    {
        "id": "timestamp",
        "name": "Data e Horário",
        "validation": {
            "primitiveType": "STRING",
            "entityType": "DATE_TIME",
            "pattern": "yyyy-MM-ddTHH:mm:ss"
        }
    },
    {
        "id": "limit",
        "name": "Quantidade",
        "validation": {
            "primitiveType": "INTEGER",
            "min": 1,
            "max": 50
        }
    },
    {
        "id": "offset",
        "name": "Página",
        "validation": {
            "primitiveType": "INTEGER"
        }
    }
];


describe('Filters Component', () => {

    it('should render with defaults', () => {
        const onChangeDatePicker = () => false;
        const onChangeField = () => false;
        const date = new Date().toISOString();

        const wrapper = shallow(<Filters
            filters={filtersMock}
            date={date}
            onChangeDatePicker={onChangeDatePicker}
            onChangeField={onChangeField}
            filtersValues={{}}
        />
        );
        expect(wrapper.find('.filters-container')).toBeTruthy();
    });

});