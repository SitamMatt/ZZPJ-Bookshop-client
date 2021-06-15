<script lang="ts">
	import { createForm } from 'svelte-forms-lib';

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: '',
			firstname: '',
			lastname: '',
			email: '',
			password: ''
		},
		onSubmit: async (values) => {
			await fetch('http://localhost:8081/api/user', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}
	});
</script>

<div>
	<h1>Sign up</h1>
	<form on:submit={handleSubmit}>
		<div>
			<label for="username">username:</label>
			<input id="username" name="username" type="text" bind:value={$form.username} />
		</div>
		<div>
			<label for="firstname">firstname:</label>
			<input id="firstname" name="firstname" type="text" bind:value={$form.firstname} />
		</div>
		<div>
			<label for="lastname">lastname:</label>
			<input id="lastname" name="lastname" type="text" bind:value={$form.lastname} />
		</div>
		<div>
			<label for="email">email:</label>
			<input id="email" name="email" type="text" bind:value={$form.email} />
		</div>
		<div>
			<label for="password">password:</label>
			<input id="password" name="password" type="password" bind:value={$form.password} />
		</div>
		<input type="submit" value="register" />
	</form>
</div>
