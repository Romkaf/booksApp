import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorIndicator.css';

const ErrorIndicator = ({ text }) => (
	<div className={styles.root}>
		<span>Error: {text}</span>
	</div>
);

ErrorIndicator.propTypes = {
	text: PropTypes.string,
};

export default ErrorIndicator;
