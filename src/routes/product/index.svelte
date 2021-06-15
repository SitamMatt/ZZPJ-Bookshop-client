<script context="module">
	export async function load({ fetch, session }) {
		// if (session.user) {
		// 	return {
		// 		status: 302,
		// 		redirect: '/'
		// 	};
		// }
		const res = await fetch('/product.json');
		// if (res.ok) {
		const products = await res.json();

		return {
			props: { products }
		};
		// }

		// const { message } = await res.json();

		// return {
		// 	error: new Error(message)
		// };
	}
</script>

<script lang="ts">
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
	import ListErrors from '$lib/ListErrors.svelte';

	export let products;

	console.log(products);

	async function addProductItems(productId: Number, quantity: Number) {
		console.log(productId);
		console.log(quantity);
		await fetch('/product.json', {
			method: 'POST',
			body: JSON.stringify({
				productId,
				quantity
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		location.reload();
	}
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Products</h1>
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
					{#each products as { id, title, price, publishingHouse, isbn, productItemList, toAdd = 0 }}
						<tr>
							<td>{title}</td>
							<td>{price}</td>
							<td>{publishingHouse}</td>
							<td>{isbn}</td>
							<td>{productItemList.length}</td>
							<td><a href="/product/{id}">details</a></td>
							<td>
								<input type="number" min="1" bind:value={toAdd} />
								<button on:click={() => addProductItems(id, toAdd)}>Add items</button>
							</td>
						</tr>
					{/each}
				</table>
				<button on:click={() => goto('/product/form')}>Add new</button>
			</div>
		</div>
	</div>
</div>
