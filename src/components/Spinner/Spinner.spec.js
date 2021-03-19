import React from 'react';
import Spinner from './Spinner';
import { shallow } from 'enzyme';

describe('Spinner component', () => {
	it('should render Spinner component', () => {
		const component = shallow(<Spinner />);
		expect(component).toMatchSnapshot();
	});
});
