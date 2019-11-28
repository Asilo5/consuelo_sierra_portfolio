import React from 'react';
import { shallow } from 'enzyme';
import SVGPage from './SVGPage';

describe('SVGPage', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SVGPage />)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})