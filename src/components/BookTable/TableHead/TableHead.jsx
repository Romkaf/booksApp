import React, { memo } from 'react';
import styles from './TableHead.css';

const TableHead = () => {
	const { root, ceil } = styles;
	const labels = ['Title', 'Authors', 'Publisher', 'Date'];

	return (
		<thead className={root}>
			<tr>
				{labels.map((label) => (
					<th className={ceil} key={label}>
						{label}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default memo(TableHead);
