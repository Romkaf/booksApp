import React, { useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPages } from '@utils/createPages';
import { setCurrentPage } from '@models/actions';
import Pagination from './Pagination';

const PaginationContainer = () => {
	const dispatch = useDispatch();

	const { currentPage, perPage } = useSelector((state) => state.pagination);
	const totalCount = useSelector((state) => state.books.totalCount);

	const handlePageClick = useCallback(
		(page) => () => dispatch(setCurrentPage(page)),
		[setCurrentPage],
	);

	const pagesCount = Math.ceil(totalCount / perPage);

	const pages = useMemo(() => createPages(pagesCount, currentPage), [
		pagesCount,
		currentPage,
	]);

	return (
		<Pagination
			pages={pages}
			onPageClick={handlePageClick}
			currentPage={currentPage}
		/>
	);
};

export default PaginationContainer;
