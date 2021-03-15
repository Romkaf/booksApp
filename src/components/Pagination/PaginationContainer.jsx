import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPages } from '@utils/createPages';
import { setCurrentPage } from '@models/actions';
import Pagination from './Pagination';

const PaginationContainer = () => {
	const dispatch = useDispatch();

	const { currentPage, perPage } = useSelector((state) => state.pagination);
	const totalCount = useSelector((state) => state.books.totalCount);

	const handlePageClick = (page) => () => dispatch(setCurrentPage(page));

	const pagesCount = Math.ceil(totalCount / perPage);
	const pages = createPages(pagesCount, currentPage);

	return (
		<Pagination
			pages={pages}
			onPageClick={handlePageClick}
			currentPage={currentPage}
		/>
	);
};

export default PaginationContainer;
