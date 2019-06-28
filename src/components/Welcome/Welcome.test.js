import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '.';

describe('Welcome Component', () => {
  
    it('should render with defaults', () => {
        const onClick = () => false;
        const wrapper = shallow(<Welcome onClick={onClick} />);
        expect(wrapper.find('.spotifood-container')).toBeTruthy();
    });

});