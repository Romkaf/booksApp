import React from 'react';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAuthorFilter,
	setTitleFilter,
	setCurrentPage,
} from '@models/actions';
import styles from './Filters.css';

const Filters = () => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);

	const handleFilterSet = (handler) => (value) => {
		dispatch(handler(value));
		dispatch(setCurrentPage(1));
	};

	const { root, heading, filtersWrapper } = styles;

	return (
		<div className={root}>
			<h2 className={heading}>Filters</h2>
			<div className={filtersWrapper}>
				<Filter
					label="Title"
					value={filters.titleFilter}
					onChange={handleFilterSet(setTitleFilter)}
				/>
				<Filter
					label="Author"
					value={filters.authorFilter}
					onChange={handleFilterSet(setAuthorFilter)}
				/>
			</div>
		</div>
	);
};

export default Filters;
