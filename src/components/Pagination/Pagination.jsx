import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

const Pagination = ({ pages = [], onPageClick, currentPage }) => {
	const { root, page, pageCurrent } = styles;

	return (
		<ul className={root}>
			{pages.map((it, idx) => (
				<li key={idx}>
					<button
						className={currentPage == it ? `${page} ${pageCurrent}` : `${page}`}
						aria-label="pagination-page"
						onClick={onPageClick(it)}
						tabIndex={currentPage == it ? -1 : 0}
					>
						{it}
					</button>
				</li>
			))}
		</ul>
	);
};

Pagination.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.number),
	onPageClick: PropTypes.func,
	currentPage: PropTypes.number,
};

export default Pagination;
