import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
	const setStore = (value) =>
		mockStore({
			books: { error: value },
			pagination: { currentPage: 1, perPage: 5 },
			filters: { titleFilter: '', authorFilter: '' },
		});

	const setUp = (store) =>
		mount(
			<Provider store={store}>
				<App />
			</Provider>,
		);

	it('should render component with ErrorIndicator', () => {
		const wrapper = setUp(setStore('test'));
		const error = wrapper.find('ErrorIndicator');
		expect(error.props().text).toEqual('test');
	});

	it('should render component without ErrorIndicator', () => {
		const wrapper = setUp(setStore(null));
		const error = wrapper.find('ErrorIndicator');
		expect(error.length).toEqual(0);
	});
});
