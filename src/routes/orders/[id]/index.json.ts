import type { RequestHandler } from "@sveltejs/kit";
import * as api from "$lib/api"
import type { Order, Product } from "$lib/types";

export const get: RequestHandler<unknown, unknown> = async (request) => {
    const {id} = request.params
    const order = await api.get<Order>(`orders/${id}`, undefined)
	return {
		body: JSON.stringify(order)
	};
}