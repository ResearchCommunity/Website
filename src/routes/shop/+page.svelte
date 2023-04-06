<script lang="ts">
	import { goto } from '$app/navigation';
	import { shopProducts } from '$lib/stores';
	import {
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardTitle,
		CardImg,
		Button,
		Row,
		Col
	} from 'sveltestrap';

	let categories: any = {};

	shopProducts.subscribe((value) => {
		categories = {};
		value.forEach((product) => {
			if (!categories[product.project_name]) {
				categories[product.project_name] = [];
			}
			categories[product.project_name].push(product);
		});
		categories = categories;
	});
</script>

<div id="cartButton">
	<Button color="warning" on:click={() => goto('/shop/cart')}><i class="fa-solid fa-cart-shopping" /> Cart</Button>
</div>

<div id="backButton">
	<Button color="warning" on:click={() => goto(`/`)}><i class="fa-solid fa-house" /> Home</Button>
</div>

<div class="content-box">
	{#each Object.keys(categories) as category}
		<div class="products-wrapper">
			<h1 style="display: inline-block;">{category}</h1>
			<Button
				color="secondary"
				style="float:right;"
				on:click={() => {
					goto(`/shop/category/${categories[category][0].project}`);
				}}>See All</Button
			>

			<div class="products-list">
				<div class="d-flex flex-row flex-nowrap">
					{#each categories[category] as product}
						<Col md="4">
							<Card color="dark">
								<CardHeader>
									<CardTitle>{product.name}</CardTitle>
								</CardHeader>
								<CardBody>
									<CardImg src={product.images[0].urls.small} />
									{product.price.amount / product.price.currency_factor}{product.price.currency_symbol}
								</CardBody>
								<CardFooter>
									<Button color="primary" on:click={() => goto(`/shop/product/${product.id}`)}
										><i class="fa-solid fa-eye"></i> View</Button
									>
								</CardFooter>
							</Card>
						</Col>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	
	.content-box {
		margin-top: 3rem;
	}
</style>
