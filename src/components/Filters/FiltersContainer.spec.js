import React from 'react';
import FiltersContainer from './FiltersContainer';
import { mount } from 'enzyme';
import * as redux from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setTitleFilter, setCurrentPage } from '@models/actions';

describe('FiltersContainer', () => {
	const mockStore = configureMockStore([thunk]);

	const store = mockStore({
		filters: { titleFilter: '', authorFilter: '' },
	});

	let wrapper;
	const setUp = () =>
		mount(
			<redux.Provider store={store}>
				<FiltersContainer />
			</redux.Provider>,
		);

	it('should render component', () => {
		wrapper = setUp();
		const component = wrapper.find('FiltersContainer');
		expect(component).toMatchSnapshot();
	});

	it('should call dispatch with needed actions', () => {
		const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
		const mockDispatchFn = jest.fn();
		useDispatchSpy.mockReturnValue(mockDispatchFn);
		wrapper = setUp();
		const handler = wrapper.find('Filters').props().filters[0].handler;
		handler('test');
		expect(mockDispatchFn).toHaveBeenNthCalledWith(1, setTitleFilter('test'));
		expect(mockDispatchFn).toHaveBeenNthCalledWith(2, setCurrentPage(1));
	});
});
