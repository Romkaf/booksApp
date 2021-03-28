import React from 'react';
import PaginationPage from './PaginationPage';
import { areEqual } from './PaginationPage';
import { shallow } from 'enzyme';

describe('PaginationPage', () => {
	const props = {
		page: 1,
		onPageClick: (it) => () => it,
		currentPage: 0,
	};

	it('should render component', () => {
		const component = shallow(<PaginationPage {...props} />);
		expect(component).toMatchSnapshot();
	});

	describe('compare function of memo', () => {
		it('should return false for current page', () => {
			const prevProps = { currentPage: 0, page: 2 };
			const nextProps = { currentPage: 1, page: 2 };
			expect(areEqual(prevProps, nextProps)).toBe(false);
		});

		it('should return false for prev current page', () => {
			const prevProps = { currentPage: 0, page: 1 };
			const nextProps = { currentPage: 1, page: 1 };
			expect(areEqual(prevProps, nextProps)).toBe(false);
		});
	});
});
