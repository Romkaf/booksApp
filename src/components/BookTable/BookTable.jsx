import React, { memo } from 'react';
import TableHead from './TableHead';
import Pagination from '@components/Pagination';
import PropTypes from 'prop-types';
import styles from './BookTable.css';
import TableBody from './TableBody';

const BookTable = ({ books, loading }) => {
	const { root, wrapper } = styles;

	return (
		<div className={wrapper}>
			<table className={root}>
				<TableHead />
				<TableBody books={books} loading={loading} />
			</table>
			<Pagination />
		</div>
	);
};

BookTable.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
};

export default memo(BookTable);
