<script lang="ts">
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';
	import { goto } from '$app/navigation';

	async function logout() {
		await post('auth/logout');
		location.reload();
	}
</script>

<div>
	<h1>Welcome to Bookshop</h1>
	{#if $session.access_token}
		{#if $session.roles && $session.roles.includes('app-user')}
			<div><a href="/client/products">Make an order</a></div>
		{:else if $session.roles && $session.roles.includes('app-admin')}
			<div><a href="/product">Products</a></div>
			<div><a href="/orders">Orders</a></div>
		{/if}
		<div><button on:click={logout}>Logout</button></div>
	{:else}
		<div><a href="/register">Register</a></div>
		<div><a href="/login">Login</a></div>
	{/if}
</div>
