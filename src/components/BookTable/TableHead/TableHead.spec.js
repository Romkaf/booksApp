import React from 'react';
import TableHead from './TableHead';
import { shallow } from 'enzyme';

describe('TableRow', () => {
	it('should render component', () => {
		const component = shallow(<TableHead />);
		expect(component).toMatchSnapshot();
	});
});
