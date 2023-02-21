<script lang="ts">
	import type { Engine } from 'tsparticles-engine';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};
</script>

<svelte:head>
	<title>Research Community</title>

	<meta content="Research Community" property="og:title" />
	<meta content="Community around Research and Education on Psychoactive Substances" property="og:description" />
	<meta content="https://research-comunity.org" property="og:url" />
	<meta content="https://research-community.org/logo.png" property="og:image" />
	<meta content="#6441A4" data-react-helmet="true" name="theme-color" />
</svelte:head>

<slot />

<Particles id="tsparticles" url="/particles.json" {particlesInit} />