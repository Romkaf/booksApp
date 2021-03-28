import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './PaginationPage.css';

export const PaginationPage = ({ page, onPageClick, currentPage }) => {
	const { root, current } = styles;
	const condition = currentPage == page - 1;
	const classBtn = cx(root, { [current]: condition });

	return (
		<li>
			<button
				className={classBtn}
				aria-label="pagination-page"
				onClick={onPageClick(page)}
				tabIndex={condition ? -1 : 0}
			>
				{page}
			</button>
		</li>
	);
};

PaginationPage.propTypes = {
	page: PropTypes.number,
	onPageClick: PropTypes.func,
	currentPage: PropTypes.number,
};

export const areEqual = (prevProps, nextProps) =>
	nextProps.currentPage !== nextProps.page - 1 &&
	prevProps.currentPage !== prevProps.page - 1;

export default memo(PaginationPage, areEqual);
