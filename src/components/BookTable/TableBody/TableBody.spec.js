import React from 'react';
import TableBody from './TableBody';
import { shallow } from 'enzyme';

describe('TableBody', () => {
	const props = {
		books: [
			{
				id: 1,
				title: 'test',
				authors: 'test',
				publisher: 'publisher',
				date: 'date',
			},
		],
	};

	let component;
	const setUp = (props) => shallow(<TableBody {...props} />);

	it('should render component with props', () => {
		component = setUp(props);
		const tableRow = component.find('TableRow');
		expect(tableRow).toHaveLength(1);
	});

	it('should render component without props', () => {
		component = setUp();
		const tableRow = component.find('TableRow');
		expect(tableRow).toHaveLength(0);
	});
});
