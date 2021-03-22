import React from 'react';
import BookTableContainer from './BookTableContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('BookTableContainer', () => {
	const mockStore = configureMockStore([thunk]);

	const store = mockStore({
		books: { books: [] },
		pagination: { currentPage: 1, perPage: 5 },
		filters: { titleFilter: '', authorFilter: '' },
	});

	const wrapper = mount(
		<Provider store={store}>
			<BookTableContainer />
		</Provider>,
	);

	it('should render component', () => {
		const component = wrapper.find('BookTableContainer');
		expect(component).toMatchSnapshot();
	});
});
