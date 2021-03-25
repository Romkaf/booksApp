import React, { memo } from 'react';
import styles from './TableHead.css';

const TableHead = () => {
	const { root, ceil } = styles;
	const labels = ['Title', 'Authors', 'Publisher', 'Date'];

	return (
		<div className={root}>
			{labels.map((label) => (
				<div className={ceil} key={label}>
					{label}
				</div>
			))}
		</div>
	);
};

export default memo(TableHead);
