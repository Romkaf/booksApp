import React from 'react';
import styles from './App.css';
import BookTable from '@components/BookTable';
import Filters from '@components/Filters';

const App = () => {
	return (
		<div className={styles.root}>
			<h1 className={styles.heading}>Books App</h1>
			<Filters />
			<BookTable />
		</div>
	);
};

export default App;
