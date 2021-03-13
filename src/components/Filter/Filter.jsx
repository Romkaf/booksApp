import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.css';

const Filter = () => {
	const { root, select, input, label } = styles;

	return (
		<div className={root}>
			<label htmlFor="filter" className={label}>
				Filter
			</label>
			<input id="filter" className={input} type="text" />

			<select className={select}>
				<option selected>title</option>
				<option>author</option>
			</select>
		</div>
	);
};

Filter.propTypes = {};

export default Filter;
