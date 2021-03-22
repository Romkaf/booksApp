import React from 'react';
import TableRow from './TableRow';
import { shallow } from 'enzyme';

describe('TableRow', () => {
	const item = {
		id: 1,
		title: 'test',
		authors: 'test',
		publisher: 'publisher',
		date: 'date',
	};

	it('should render component', () => {
		const component = shallow(<TableRow item={item} />);
		expect(component).toMatchSnapshot();
	});
});
