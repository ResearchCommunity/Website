<script lang="ts">
	import type { Engine } from 'tsparticles-engine';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};
</script>

<slot />

<Particles id="tsparticles" url="/particles.json" {particlesInit} />