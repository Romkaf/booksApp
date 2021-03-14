import React from 'react';
// import PropTypes from 'prop-types';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorFilter, setTitleFilter } from '@models/actions';
import styles from './Filters.css';

const Filters = () => {
	const dispatch = useDispatch();
	const filters = useSelector((state) => state.filters);

	const handleAuthorFilterSet = (value) => dispatch(setAuthorFilter(value));
	const handleTitleFilterSet = (value) => dispatch(setTitleFilter(value));

	const { root, heading, filtersWrapper } = styles;

	return (
		<div className={root}>
			<h2 className={heading}>Filters</h2>
			<div className={filtersWrapper}>
				<Filter
					label="Title"
					value={filters.titleFilter}
					onChange={handleTitleFilterSet}
				/>
				<Filter
					label="Author"
					value={filters.authorFilter}
					onChange={handleAuthorFilterSet}
				/>
			</div>
		</div>
	);
};

Filters.propTypes = {};

export default Filters;
