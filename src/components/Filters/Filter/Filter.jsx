import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Filter.css';

const Filter = ({ label: title }) => {
	const { field, input, label, labelSmall } = styles;
	const [value, setValue] = useState('');
	const classLabel = cx(label, { [labelSmall]: value });

	const handleInputChange = (evt) => setValue(evt.target.value);

	return (
		<div className={field}>
			<input
				className={input}
				type="text"
				id={title}
				value={value}
				onChange={handleInputChange}
			/>
			<label className={classLabel} htmlFor={title}>
				{title}
			</label>
		</div>
	);
};

export default Filter;
