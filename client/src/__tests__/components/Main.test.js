import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/Main';


test('Should render Main component correctly', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
});
