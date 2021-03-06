import React from 'react';
import Spinner from '@components/Spinner';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

const TableBodyContainer = ({ books, loading }) => {
	if (loading) {
		return <Spinner />;
	}

	return <TableBody books={books} />;
};

TableBody.propTypes = {
	books: PropTypes.arrayOf(PropTypes.object),
	loading: PropTypes.bool,
};

export default TableBodyContainer;
