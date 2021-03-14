import React from 'react';
import cx from 'classnames';
import styles from './Filter.css';

const Filter = ({ label: title, value, onChange }) => {
	const { field, input, label, labelSmall } = styles;
	const classLabel = cx(label, { [labelSmall]: value });

	const handleInputChange = (evt) => onChange(evt.target.value);

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
