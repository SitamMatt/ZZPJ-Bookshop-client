import * as cookie from 'cookie';

export async function handle({ request, resolve }) {
	const cookies = cookie.parse(request.headers.cookie || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	request.locals.token = jwt ? JSON.parse(jwt) : null;
	return await resolve(request);
}

export function getSession({ locals }) {
    console.log("elo")
    console.log(locals)
	return {
        token: locals.access_token,
		};
}