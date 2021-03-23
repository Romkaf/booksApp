import React from 'react';
import PaginationContainer from './PaginationContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setCurrentPage } from '@models/actions';

describe('PaginationContainer', () => {
	const mockStore = configureMockStore([thunk]);

	const store = mockStore({
		books: { books: [], totalCount: 10 },
		pagination: { currentPage: 1, perPage: 5 },
	});

	const wrapper = mount(
		<Provider store={store}>
			<PaginationContainer />
		</Provider>,
	);

	it('should render component', () => {
		const component = wrapper.find('PaginationContainer');
		expect(component).toMatchSnapshot();
	});

	it('should handler return action', () => {
		const handler = wrapper.find('Pagination').props().onPageClick;

		expect(handler(1)()).toStrictEqual(setCurrentPage(1));
	});
});
