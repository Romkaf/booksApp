import React from 'react';
import styles from './App.css';
import BookTable from '@components/BookTable';
import Filters from '@components/Filters';
import Pagination from '@components/Pagination';

const App = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.heading}>Books App</h1>
			<Filters />
			<Pagination />
			<BookTable />
		</div>
	);
};

export default App;
