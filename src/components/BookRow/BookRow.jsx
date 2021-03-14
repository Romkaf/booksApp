import React from 'react';
import styles from './BookRow.css';
import PropTypes from 'prop-types';

const Row = ({ item }) => {
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

Row.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		publisher: PropTypes.string,
		date: PropTypes.string,
	}),
};

export default Row;
