import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAuthorFilter,
	setTitleFilter,
	setCurrentPage,
} from '@models/actions';
import Filters from './Filters';

const FiltersContainer = () => {
	const dispatch = useDispatch();
	const { titleFilter, authorFilter } = useSelector((state) => state.filters);

	const handleFilterSet = (handler) => (value) => {
		dispatch(handler(value));
		dispatch(setCurrentPage(1));
	};

	const filters = [
		{
			title: 'Title',
			handler: handleFilterSet(setTitleFilter),
			value: titleFilter,
		},
		{
			title: 'Author',
			handler: handleFilterSet(setAuthorFilter),
			value: authorFilter,
		},
	];

	return <Filters filters={filters} />;
};

export default FiltersContainer;
