<script lang="ts">
	import { Button } from 'sveltestrap';
	import Footer from '$lib/components/footer.svelte'
</script>

<div id="header" class="container w-100 noselect">
	<img src="/logo.png" alt="Logo" id="logo" />
	<h1>Research Community</h1>
</div>

<div id="content">
	<div class="content-box">
		<h1>About Us</h1>
		<p>
			Welcome to the Research Community! <br />
			We're an open and friendly community of people interested in and working with research chemicals!
			<br /><br />

			Most of what we do centers around education and harm reduction on research chemicals and other
			psychoactive substances. <br /> <br />

			Come join and chat with us!
		</p>
	</div>
	<div class="content-box">
		<h1>Visit Us!</h1>
		<a href="https://join.research-community.org" target="_blank" rel="noopener noreferrer"
			><Button color="primary"><i class="fa-brands fa-discord" /> Discord</Button></a
		>
		<a href="https://matrix.to/#/#chat:research-community.org" target="_blank" rel="noopener noreferrer"
			><Button color="primary"><img src="/matrix.svg" style="width: 1rem;" alt="Matrix Logo" /> Matrix</Button></a
		>
	</div>
	<div class="content-box">
		<h1>Social Media</h1>
		<a href="https://instagram.com/research_community_" target="_blank" rel="noopener noreferrer"
			><Button color="warning"><i class="fa-brands fa-instagram" /> Instagram</Button></a
		>
	</div>
</div>

<Footer />



<style>
	@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Poppins&display=swap');

	#header {
		text-align: center;
		font-family: 'Concert One', cursive;
		color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	#header h1 {
		font-size: 5rem;
		color: #bb1fc0;
		text-shadow: 2px 2px 4px #000000;
	}

	#content {
		text-align: center;
		font-family: 'Poppins', sans-serif;
		margin-top: 100vh;
	}
	.content-box {
		background-color: #242424;
		border-radius: 25px;
		padding: 3rem;
		max-width: 75%;
		display: block;
		color: white;
		margin-bottom: 5rem;
		font-size: x-large;
		margin-left: 50%;
		transform: translateX(-50%);
	}

	.content-box h1 {
		font-family: 'Concert One', cursive;
		margin-bottom: 2rem;
	}

	#logo {
		min-width: 200px;
		max-width: 25%;
		border-radius: 50%;
	}

	.noselect {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	@media screen and (max-width: 800px) {
		.content-box {
			width: 100%;
		}
	}
</style>
