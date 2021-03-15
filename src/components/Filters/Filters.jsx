import React from 'react';
import Filter from './Filter';
import PropTypes from 'prop-types';
import styles from './Filters.css';

const Filters = ({ filters }) => {
	const { root, heading, filtersWrapper } = styles;

	return (
		<div className={root}>
			<h2 className={heading}>Filters</h2>
			<ul className={filtersWrapper}>
				{filters.map((it) => (
					<li key={it.title}>
						<Filter label={it.title} value={it.value} onChange={it.handler} />
					</li>
				))}
			</ul>
		</div>
	);
};

Filters.propTypes = {
	filters: PropTypes.arrayOf(PropTypes.object),
};

export default Filters;
