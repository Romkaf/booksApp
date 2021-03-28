import React from 'react';
import Pagination from './Pagination';
import { shallow } from 'enzyme';

describe('Pagination', () => {
	const props = {
		pages: [1, 2, 3],
		onPageClick: (it) => () => it,
		currentPage: 1,
	};

	let component;
	const setUp = (props) => shallow(<Pagination {...props} />);

	describe('should render component', () => {
		it('with props', () => {
			component = setUp(props);
			expect(component).toMatchSnapshot();
		});

		it('without props', () => {
			component = setUp();
			expect(component).toMatchSnapshot();
		});
	});

	// it('should call handler when button will click', () => {
	// 	const mockFn = jest.fn((it) => it);
	// 	component = setUp(props);
	// 	component.setProps({ onPageClick: (it) => () => mockFn(it) });
	// 	const firstButton = component.find('ul').childAt(0).find('button');
	// 	firstButton.simulate('click');
	// 	expect(mockFn).toHaveReturnedWith(1);
	// });
});
