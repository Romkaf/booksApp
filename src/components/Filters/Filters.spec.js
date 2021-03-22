import React from 'react';
import Filters from './Filters';
import { shallow } from 'enzyme';

describe('Filters', () => {
	const filters = [
		{
			title: 'test',
			handler: () => {},
			value: 'testValue',
		},
		{
			title: 'test2',
			handler: () => {},
			value: 'testValue2',
		},
	];

	it('should render component', () => {
		const component = shallow(<Filters filters={filters} />);
		const filter = component.find('Filter');
		expect(filter).toHaveLength(2);
	});
});
