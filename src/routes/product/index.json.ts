import type { RequestHandler } from "@sveltejs/kit";

export async function get({ params, locals }) {
    const products = await fetch('http://localhost:8081/api/products')
	// const { article } = await api.get(`articles/${slug}`, locals.user && locals.user.token);

	return {
		body: await products.json()
	};
}


interface Locals {
	userid: string;
}


// POST /todos.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
	console.log("POST HERE ")
	const response = await fetch(`http://localhost:8081/api/products/${request.body.productId}/additems?quantity=${request.body.quantity}`, {
		method: 'POST'
	});

	return {
		body: await response.json()
	}
};