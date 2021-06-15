<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/client/order.json');
		if (res.ok) {
			const orders = await res.json();

			return {
				props: { orders }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<script lang="ts">
	import type { Order } from '$lib/types';

	export let orders: Order[];
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div>
	<h1>Products</h1>
	<table>
		<tr>
			<th>id</th>
			<th>userID</th>
			<th>total cost</th>
			<th>status</th>
			<th>payment type</th>
			<th />
			<th />
		</tr>
		{#each orders as { id, userID, totalCost, status, paymentType }}
			<tr>
				<td>{id}</td>
				<td>{userID}</td>
				<td>{totalCost}</td>
				<td>{status}</td>
				<td>{paymentType}</td>
				<td><a href="/orders/{id}">details</a></td>
			</tr>
		{/each}
	</table>
</div>
