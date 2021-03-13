import React from 'react';
import styles from './App.css';
import BookTable from '@components/BookTable';
import Filter from '@components/Filter';

const App = () => {
	const books = [
		{
			id: 1,
			title: 'Lake',
			authors: ['Lavrov', 'Saharov'],
			date_published: '2021-03-13T16:14:08.834Z',
			publisher: 'Drofa',
		},
		{
			id: 2,
			title: 'Lake2',
			authors: ['Lavrov'],
			date_published: '2021-03-13T16:14:08.834Z',
			publisher: 'Drofa',
		},
		{
			id: 3,
			title: 'Lake3',
			authors: ['Lavrov', 'Saharov'],
			date_published: '2021-03-13T16:14:08.834Z',
			publisher: 'Drofa',
		},
	];

	return (
		<div className={styles.root}>
			<h1 className={styles.heading}>Books App</h1>
			<Filter />
			<BookTable books={books} />
		</div>
	);
};

export default App;
