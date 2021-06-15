import type { RequestHandler } from "@sveltejs/kit";
import * as api from "$lib/api"
import type { Order, Product } from "$lib/types";

export const get: RequestHandler<unknown, unknown> = async () => {
    const orders = await api.get<Order[]>('orders', undefined)
	return {
		body: JSON.stringify(orders)
	};
}