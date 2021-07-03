import env from './env';
const fetch = require('node-fetch');

export default {
	base: {
		api: `${env.server.api.url}`
	},
	request: httpRequest,
};

function httpRequest(method, base, url, params) {
	let headers = {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	};
	const token = localStorage.authorizationData;
	if (token) {
		if (new Date() >= new Date(token['.expires'])) {
			localStorage.removeItem('authorizationData');
			window.location.href = `${window.location.origin}/welcome`;
			alert('اعتبار ورود شما به پایان رسیده است، مجددا وارد شوید');
		}

		headers.Authorization = `Bearer ${token}`;
	}
	return fetch(`${base}/${url}`, {
		method: method,
		headers: headers,
		body: JSON.stringify(params)
	})
		.then((response) => {
			if (response.status === 201) {
				return response.json()
			}
			else {
				return Promise.reject(response.status)
			}
		})
		.catch((error) => {
			if (error) {
				error.message = error.message ? error.message.split('&&').join('\n') : '';
			}

			return Promise.reject(error.message);
		});
}
function serialize(params) {
	return Object.keys(params)
		.map((key) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
		})
		.join('&');
}
