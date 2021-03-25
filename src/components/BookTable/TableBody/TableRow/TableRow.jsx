import React from 'react';
import styles from './TableRow.css';
import PropTypes from 'prop-types';

const TableRow = ({ item }) => {
	const { root, ceil } = styles;
	const { title, authors, date, publisher } = item;
	const dataArray = [title, authors, date, publisher];

	return (
		<div className={root}>
			{dataArray.map((it, idx) => (
				<div className={ceil} key={idx}>
					{it}
				</div>
			))}
		</div>
	);
};

TableRow.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string,
		authors: PropTypes.string,
		publisher: PropTypes.string,
		date: PropTypes.string,
	}),
};

export default TableRow;
