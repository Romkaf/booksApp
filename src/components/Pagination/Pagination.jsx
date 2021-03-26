import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PaginationPage from './PaginationPage';
import styles from './Pagination.css';

const Pagination = ({ pages = [], onPageClick, currentPage }) => {
	const { root } = styles;

	return (
		<ul className={root}>
			{pages.map((it) => (
				<PaginationPage
					onPageClick={onPageClick}
					currentPage={currentPage}
					page={it}
					key={it}
				/>
			))}
		</ul>
	);
};

Pagination.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.number),
	onPageClick: PropTypes.func,
	currentPage: PropTypes.number,
};

export default memo(Pagination);
