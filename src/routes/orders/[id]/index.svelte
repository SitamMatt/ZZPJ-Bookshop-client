<script context="module">
	export async function load({ fetch, session, page }) {
		const { id } = page.params;

		const res = await fetch(`/client/order/${id}.json`);
		if (res.ok) {
			const order = await res.json();

			return {
				props: { order }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script lang="ts">
	import type { Order } from '$lib/types';

	export let order: Order;
</script>

<svelte:head>
	<title>Sign in • Conduit</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Products</h1>
				<ul>
					<li>
						id:
						{order.id}
					</li>
					<li>
						user:
						{order.userID}
					</li>
					<li>
						payment type:
						{order.paymentType}
					</li>
					<li>
						status:
						{order.status}
					</li>
					<li>
						products:
						<ol>
							{#each order.itemList as { productItemId }}
								<li>
									product:
									{productItemId}
								</li>
							{/each}
						</ol>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
