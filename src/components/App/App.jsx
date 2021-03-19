import React from 'react';
import styles from './App.css';
import BookTable from '@components/BookTable';
import Filters from '@components/Filters';
import ErrorIndicator from '@components/ErrorIndicator';
import { useSelector } from 'react-redux';

const App = () => {
	const error = useSelector((state) => state.books.error);

	return (
		<div className={styles.root}>
			<h1 className={styles.heading}>Books App</h1>
			<Filters />
			<BookTable />
			{error && <ErrorIndicator text={error} />}
		</div>
	);
};

export default App;
