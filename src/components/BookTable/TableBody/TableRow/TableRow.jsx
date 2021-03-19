import React from 'react';
import styles from './TableRow.css';
import PropTypes from 'prop-types';

const TableRow = ({ item }) => {
	const { ceil } = styles;
	const { title, authors, date, publisher } = item;

	return (
		<tr>
			<td className={ceil}>{title}</td>
			<td className={ceil}>{authors}</td>
			<td className={ceil}>{publisher}</td>
			<td className={ceil}>{date}</td>
		</tr>
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
