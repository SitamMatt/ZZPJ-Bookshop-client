<script context="module">
	export async function load({ fetch, session, page }) {
		const { id } = page.params;

		const res = await fetch(`/product/${id}.json`);
		if (res.ok) {
			const product = await res.json();

			return {
				props: { product }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
		// console.log(res);
		// // if (session.user) {
		// // 	return {
		// // 		status: 302,
		// // 		redirect: '/'
		// // 	};
		// // }
		// // const res = await fetch('/product/.json');
		// // if (res.ok) {
		// // const products = await res.json();

		// // return {
		// // 	props: { products }
		// // };
		// // }

		// // const { message } = await res.json();

		// // return {
		// // 	error: new Error(message)
		// // };
		// return {};
	}
</script>

<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
	import ListErrors from '$lib/ListErrors.svelte';

	export let product;

	console.log(product);
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
						<td>title</td>
						<td>{product.title}</td>
					</tr>
					<tr>
						<td>price</td>
						<td>{product.price}</td>
					</tr>
					<tr>
						<td>publisher</td>
						<td>{product.publishingHouse}</td>
					</tr>
					<tr>
						<td>isbn</td>
						<td>{product.isbn}</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>
