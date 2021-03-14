import React from 'react';
// import PropTypes from 'prop-types';
import Filter from './Filter';
import styles from './Filters.css';

const Filters = () => {
	const { root, heading, filters } = styles;

	return (
		<div className={root}>
			<h2 className={heading}>Filters</h2>
			<div className={filters}>
				<Filter label="Book" />
				<Filter label="Author" />
			</div>
		</div>
	);
};

Filters.propTypes = {};

export default Filters;
