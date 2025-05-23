<script lang="ts">
	import { LightSwitch } from "@skeletonlabs/skeleton";
	import { AppBar } from "@skeletonlabs/skeleton";
	import "../app.scss";
	import 'animate.css';
	import '@fortawesome/fontawesome-free/css/all.min.css'
	let { children } = $props();
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" style="display: flex; align-items: center;">
			<img src="/logo.png" alt="Logo" id="logo" />
			Research Community
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment>
</AppBar>

<div id="content">
	{@render children()}
</div>

<div id="footer">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">&copy; 2025 Xenorio Industries - AGPLv3 Licensed</svelte:fragment>
		Made with 💜 and <img src="/svelte-logo.png" alt="Svelte" style="width: 1rem; display: inline-block;">
		<svelte:fragment slot="trail">
			<a href="/disclosure">Legal Disclosure & Privacy Policy</a>
			&nbsp; | &nbsp;
			<a href="https://github.com/ResearchCommunity/Website" target="_blank">Source Code</a>
		</svelte:fragment>
	</AppBar>
</div>

<svelte:head>
	<title>
		Research Community
	</title>
</svelte:head>

<style>
	#logo {
		height: 2rem;
		margin-right: 1rem;
		border-radius: 25px;
		float: left;
	}

	#content {
		flex: 1
	}

	#footer {
		margin-top: 2rem;
	}

	#footer a {
		margin-left: 0;
	}
</style>
