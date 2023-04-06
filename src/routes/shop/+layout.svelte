<script lang="ts">
	import { shopProducts } from '$lib/stores';
	import { SHOP_API_HOST } from '$lib/constants';
	import { cart } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(async () => {
		console.log(
			`
%cHey you!
%cIt looks like you've opened dev tools in the shop section. 
Don't worry, I'm not here to tell you off, go ahead and poke around! 
Just wanna let you know that orders are manually reviewed, so tampering with them won't help ya.

Also, everything here is open-source! %chttps://github.com/ResearchCommunity/Website
`,
			'color: red;font-size: 50px;text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;',
			'color: blue;font-size: 25px;text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;',
			'color: cyan;font-size: 25px;text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;'
		);

		fetch(SHOP_API_HOST + '/product/', {
			method: 'GET'
		}).then(async (res) => {
			const data = await res.json();
			let products: any[] = [];

			data.forEach((product: any) => {
				if (!product.is_rendered || !product.images[0]) return;
				products.push(product);
			});

			shopProducts.set(products);
		});

		cart.set(JSON.parse(localStorage.getItem('cart') || '[]'));

		cart.subscribe((value) => {
			localStorage.setItem('cart', JSON.stringify(value));
		});
	});
</script>

<slot />
