import React from 'react';
import Filter from './Filter';
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

export default Filters;
