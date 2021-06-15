// @ts-nocheck
// const base = 'http://localhost:8081/api';
const base = 'https://zzpj-bookshop.azurewebsites.net/api';

async function send<T>({ method, path, data, token}): Promise<T> {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Bearer ${token}`;
	}

	console.log(opts)

	return fetch(`${base}/${path}`, opts)
		.then(res => res.json() as Promise<T>)
}

export function get<T>(path, token) {
	return send<T>({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}