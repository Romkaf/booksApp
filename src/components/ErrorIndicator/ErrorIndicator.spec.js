import React from 'react';
import ErrorIndicator from './ErrorIndicator';
import { shallow } from 'enzyme';

describe('ErrorIndicator', () => {
	it('should render component', () => {
		const component = shallow(<ErrorIndicator />);
		expect(component).toMatchSnapshot();
	});
});
