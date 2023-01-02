<script lang="ts">
	import type { Engine } from 'tsparticles-engine';
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';
	import { particlesConfig } from '$lib/particles.json';
	import { Button } from 'sveltestrap';

	let particlesInit = async (engine: Engine) => {
		await loadFull(engine);
	};
</script>

<Particles id="tsparticles" options={particlesConfig} {particlesInit} />

<div id="content">
	<h1>Hello There!</h1>
	<h2>We're still working on this site...</h2>
	<h3>
		In the meantime, you can join our
		<a href="https://discord.com/invite/ZSmu4hmabs" target="_blank" rel="noreferrer">
			<Button color="primary"> <i class="fa-brands fa-discord"/> Discord Server</Button>
		</a>
	</h3>
</div>

<style>
	#content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		text-align: center;
		background-color: #242424;
		border-radius: 25px;
		color: white;
		padding: 3rem;
		min-width: 25%;
	}

	@media screen and (max-width: 800px) {
		#content {
			width: 100%;
		}
	}
</style>
