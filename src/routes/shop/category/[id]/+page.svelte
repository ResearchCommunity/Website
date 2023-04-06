<script lang="ts">
	import { goto } from '$app/navigation';
	export let data: any;
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

	const products = $shopProducts.filter((x) => x.project == data.categoryID);

</script>

<div id="cartButton">
	<Button color="warning" on:click={() => goto('/shop/cart')}><i class="fa-solid fa-cart-shopping" /> Cart</Button>
</div>

<div id="backButton">
	<Button color="warning" on:click={() => goto(`/shop/`)}><i class="fa-solid fa-arrow-left" /> Back</Button>
</div>

<div class="content-box">
	
    {#if products[0]}
        <h1 style="margin: 0;">{products[0].project_name}</h1>
    {/if}

	<Row>
		{#each products as product}
			<Col md="4" style="margin-top: 2rem">
				<Card color="dark">
					<CardHeader>
						<CardTitle>{product.name}</CardTitle>
					</CardHeader>
					<CardBody>
						<CardImg src={product.images[0].urls.small} />
						{product.price.amount / product.price.currency_factor}{product.price.currency_symbol}
					</CardBody>
					<CardFooter>
						<Button color="primary" on:click={() => goto(`/shop/product/${product.id}`)}><i class="fa-solid fa-eye"></i> View</Button>
					</CardFooter>
				</Card>
			</Col>
		{/each}
	</Row>
</div>
