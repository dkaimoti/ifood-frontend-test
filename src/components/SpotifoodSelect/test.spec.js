import React from 'react';
import { shallow } from 'enzyme';
import SpotifoodSelect from './';

describe('SpotifoodSelect Component', () => {
  
    it('should render with defaults', () => {
    const values = [
        {
            'name': 'test',
            'value': 'test'
        }
    ]
    const onChange = () => false;
    const wrapper = shallow(<SpotifoodSelect onChangeField={onChange}  name="test" id="test" values="test" />);
    expect(wrapper.find('.spotifood-select')).toBeTruthy();
  });

});