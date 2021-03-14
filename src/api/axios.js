import axios from 'axios';
import { baseURL, AuthorizationKey } from '@constants';

export default axios.create({
	withCredentials: true,
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		'Authorization"': `${AuthorizationKey}`,
	},
	responseType: 'json',
});
