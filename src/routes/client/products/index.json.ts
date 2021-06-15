import type { RequestHandler } from "@sveltejs/kit";
import * as api from "$lib/api"
import type { Product } from "$lib/types";

export const get: RequestHandler<unknown, unknown> = async (request) => {
	//@ts-ignore
	const {token} = request.locals;
	console.log("product")
	console.log(token)
    const products = await api.get<Product>('products', token)
	console.log(products)
	return {
		body: JSON.stringify(products)
	};
}

export const post: RequestHandler<unknown, unknown> =  async (request) => {
	console.log(request.body)
	const response = await api.post('orders', request.body, undefined);
	return {}
};