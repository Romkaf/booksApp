import React from 'react';
import BookTable from './BookTable';
import { shallow } from 'enzyme';

describe('BookTable', () => {
	it('should render component', () => {
		const component = shallow(<BookTable />);
		expect(component).toMatchSnapshot();
	});
});
