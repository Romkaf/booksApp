import React from 'react';
import Filter from './Filter';
import { shallow } from 'enzyme';
import { debounce } from '@utils/debounce';

describe('Filter', () => {
	const props = {
		label: 'test',
		value: 'value',
		onChange: (evt) => evt.target.value,
	};

	describe('should render component with props', () => {
		const setUp = (value) => shallow(<Filter {...props} value={value} />);

		it('with value ', () => {
			const component = setUp('value');
			const hasSmallClass = component.find('label').hasClass('labelSmall');
			expect(hasSmallClass).toBe(true);
		});

		it('with empty value ', () => {
			const component = setUp('');
			const hasSmallClass = component.find('label').hasClass('labelSmall');
			expect(hasSmallClass).toBe(false);
		});
	});

	it('should call handler when the input will change', () => {
		jest.useFakeTimers();
		const evt = { target: { value: 'test' } };
		const mockFunc = jest.fn((value) => value);
		const debouncedHandler = debounce(mockFunc, 300);
		const onChange = () => debouncedHandler(evt.target.value);
		const component = shallow(<Filter {...props} onChange={onChange} />);
		const input = component.find('input');
		input.simulate('change', evt);
		jest.runAllTimers();
		expect(mockFunc).toHaveBeenCalledWith('test');
	});
});
