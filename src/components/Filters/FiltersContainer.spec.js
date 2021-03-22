import React from 'react';
import FiltersContainer from './FiltersContainer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('FiltersContainer', () => {
	const mockStore = configureMockStore([thunk]);

	const store = mockStore({
		filters: { titleFilter: '', authorFilter: '' },
	});

	const wrapper = mount(
		<Provider store={store}>
			<FiltersContainer />
		</Provider>,
	);

	it('should render component', () => {
		const component = wrapper.find('FiltersContainer');
		expect(component).toMatchSnapshot();
	});
});
