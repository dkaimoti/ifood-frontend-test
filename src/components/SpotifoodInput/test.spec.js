import React from 'react';
import { shallow } from 'enzyme';
import SpotifoodInput from './';

describe('SpotifoodInput Component', () => {
  
    it('should render with defaults', () => {
        const onChange = () => false;
        const wrapper = shallow(<SpotifoodInput onChangeField={onChange} name="test" id="test" value="test" />);
        expect(wrapper.find('.spotifood-input')).toBeTruthy();
    });

});