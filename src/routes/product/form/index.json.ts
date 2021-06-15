import { base } from "$lib/api";
import type { RequestHandler } from "@sveltejs/kit";

export async function get({ params, locals }) {
    const product = await fetch(`${base}/authors`)
	// const { article } = await api.get(`articles/${slug}`, locals.user && locals.user.token);

	return {
		body: await product.json()
	};
}

