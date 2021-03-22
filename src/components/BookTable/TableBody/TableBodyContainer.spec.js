import React from 'react';
import TableBodyContainer from './TableBodyContainer';
import { shallow } from 'enzyme';

describe('TableBodyContainer', () => {
	let component;
	const setUp = (loading) =>
		shallow(<TableBodyContainer book={[]} loading={loading} />);

	it('should render Spinner', () => {
		component = setUp(true);
		expect(component).toMatchSnapshot();
	});

	it('should render TableBody', () => {
		component = setUp(false);
		expect(component).toMatchSnapshot();
	});
});
