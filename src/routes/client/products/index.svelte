<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/client/products.json');
		if (res.ok) {
			const products = await res.json();

			return {
				props: { products }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import type { CreateOrder, Product, CreateOrderItem } from '$lib/types';

	export let products: Product[];

	let quantities = products.reduce((a, b) => {
		a[b.id] = 0;
		return a;
	}, {});

	let paymentMethod: String;

	const paymentTypes = ['paypal'];

	async function createOrder() {
		const itemList: CreateOrderItem[] = [];
		for (const key in quantities) {
			if (quantities[key] == 0) continue;
			itemList.push({
				productId: Number(key),
				quantity: quantities[key]
			});
		}

		const data: CreateOrder = {
			userID: 1,
			paymentType: paymentMethod,
			itemList: itemList
		};

		console.log(data);

		await fetch('/client/products.json', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div>
	<h1>Products</h1>
	<table>
		<tr>
			<th>title</th>
			<th>price</th>
			<th>publisher</th>
			<th>isbn</th>
			<th>quantity</th>
			<th />
			<th />
		</tr>
		{#each products as { id, title, price, publishingHouse, isbn, productItemList }}
			<tr>
				<td>{title}</td>
				<td>{price}</td>
				<td>{publishingHouse}</td>
				<td>{isbn}</td>
				<td>{productItemList.length}</td>
				<td><a href="/product/{id}">details</a></td>
				<td>
					<input type="number" min="0" bind:value={quantities[id]} />
				</td>
			</tr>
		{/each}
	</table>
	<div>
		<label for="payment-type">Payment</label>
		<select name="payment-type" id="payment-type" bind:value={paymentMethod}>
			{#each paymentTypes as paymentType}
				<option value={paymentType}>{paymentType}</option>
			{/each}
		</select>
	</div>
	<button on:click={createOrder}>Make an order</button>
</div>
