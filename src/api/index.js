import axios from 'axios';
import { baseURL, AuthorizationKey } from '@constants';

export const fetchGetBooks = (
	title = '',
	author = '',
	currentPage = 0,
	perPage = 0,
) =>
	axios.get(
		`${baseURL}volumes?q=intitle:${title}+inauthor:${author}&startIndex=${currentPage}&maxResults=${perPage}&printType=books&key=${AuthorizationKey}`,
	);
