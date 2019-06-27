import React from 'react';
import { shallow } from 'enzyme';
import SpotifoodInput from './';

describe('SpotifoodSelect Component', () => {
  
    it('should render with defaults', () => {
    const values = [
        {
            'name': 'test',
            'value': 'test'
        }
    ]
    const onChange = () => false;
    const wrapper = shallow(<SpotifoodInput onChangeField={onChange} name="test" id="test" values={values} />);
    expect(wrapper.find('.spotifood-input')).toBeTruthy();
  });

});