import type { RequestHandler } from "@sveltejs/kit";

export async function get({ params, locals }) {
    const {id} = params
    const product = await fetch(`http://localhost:8081/api/products/${id}`)
	// const { article } = await api.get(`articles/${slug}`, locals.user && locals.user.token);

	return {
		body: await product.json()
	};
}

