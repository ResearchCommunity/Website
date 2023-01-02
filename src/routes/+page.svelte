<script lang="ts">
	import type { Engine } from "tsparticles-engine";
	import Particles from "svelte-particles";
    import { loadFull } from "tsparticles";
	import {particlesConfig} from "$lib/particles.json"

    let onParticlesLoaded = (event: any) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async (engine: Engine) => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };
</script>

<Particles
    id="tsparticles"
    options="{particlesConfig}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{particlesInit}"
/>

<style lang="scss">
</style>
