import React from 'react';
import Spinner from './Spinner';
import { shallow } from 'enzyme';

describe('Spinner', () => {
	it('should render component', () => {
		const component = shallow(<Spinner />);
		expect(component).toMatchSnapshot();
	});
});
