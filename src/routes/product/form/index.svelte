<script context="module">
	export async function load({ fetch, session }) {
		// if (session.user) {
		// 	return {
		// 		status: 302,
		// 		redirect: '/'
		// 	};
		// }
		const res = await fetch('/product/form.json');
		if (res.ok) {
			const authors = await res.json();

			return {
				props: { authors }
			};
		}

		// const { message } = await res.json();

		// return {
		// 	error: new Error(message)
		// };
		// return {};
	}
</script>

<script lang="ts">
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';
	import ListErrors from '$lib/ListErrors.svelte';
	import { createForm } from 'svelte-forms-lib';

	export let authors;

	console.log(authors);

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			title: '',
			author: 0,
			price: 0,
			description: '',
			pageNumber: 0,
			publishsingHouse: '',
			isbn: '',
			publicationYear: 0,
			productSize: 0
		},
		onSubmit: async (values) => {
			await fetch('https://zzpj-bookshop.azurewebsites.net/api/products', {
				// await fetch('http://localhost:8081/api/products', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	});

	const authorss = [
		{
			id: 1,
			name: 'Stefek'
		},
		{
			id: 2,
			name: 'Wolodymir'
		}
	];
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Products</h1>
				<form on:submit={handleSubmit}>
					<fieldset>
						<div>
							<label for="title">title</label>
							<input type="text" name="title" id="title" bind:value={$form.title} />
						</div>
						<div>
							<label for="author">price</label>
							<select name="author" id="author" bind:value={$form.author}>
								{#each authors as a}
									<option value={a.id}>{`${a.firstName} ${a.lastName}`}</option>
								{/each}
							</select>
						</div>
						<div>
							<label for="price">price</label>
							<input type="number" name="price" id="price" bind:value={$form.price} />
						</div>
						<div>
							<label for="description">description</label>
							<input
								type="text"
								name="description"
								id="description"
								bind:value={$form.description}
							/>
						</div>
						<div>
							<label for="pageNumber">pageNumber</label>
							<input type="text" name="pageNumber" id="pageNumber" bind:value={$form.pageNumber} />
						</div>
						<div>
							<label for="publishsingHouse">publishsingHouse</label>
							<input
								type="text"
								name="publishsingHouse"
								id="publishsingHouse"
								bind:value={$form.publishsingHouse}
							/>
						</div>
						<div>
							<label for="isbn">isbn</label>
							<input type="text" name="isbn" id="isbn" bind:value={$form.isbn} />
						</div>
						<div>
							<label for="publicationYear">publicationYear</label>
							<input
								type="text"
								name="publicationYear"
								id="publicationYear"
								bind:value={$form.publicationYear}
							/>
						</div>
						<div>
							<label for="productSize">productSize</label>
							<input
								type="text"
								name="productSize"
								id="productSize"
								bind:value={$form.productSize}
							/>
						</div>
						<input type="submit" value="Add" />
					</fieldset>
				</form>
				<!-- <table>
					<tr>
						<th>title</th>
						<th>price</th>
						<th>publisher</th>
						<th>isbn</th>
						<th>quantity</th>
						<th />
						<th />
					</tr> -->
				<!-- {#each products as { id, title, price, publishingHouse, isbn, productItemList, toAdd = 0 }}
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
					{/each} -->
				<!-- </table> -->
			</div>
		</div>
	</div>
</div>
