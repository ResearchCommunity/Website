<script lang="ts">
	import { goto } from '$app/navigation';
	export let data: any;
	import { shopProducts, cart } from '$lib/stores';
	import {
		FormGroup,
		Input,
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Label
	} from 'sveltestrap';

	let product = $shopProducts.find((x) => x.id == data.productID);
	let imageEl: HTMLImageElement;

	let color = 0;
	let size = 0;
	let amount = 1;

	shopProducts.subscribe((value) => {
		if (!value[0]) return;
		product = value.find((x) => x.id == data.productID);
		color = product.colors.data[0].id;
		size = product.colors.data[0].sizes[0].id;
		setImage();
	});

	function setImage() {
		setTimeout(() => {
			imageEl.src = product.images.find((x: any) => x.color_id == color).urls.large;
		}, 1); // Don't ask
	}

	let modalOpen = false;
	const toggleModal = () => (modalOpen = !modalOpen);

	const addToCart = () => {
		if (amount < 1 || amount > 10) return alert('Invalid amount. Must be 1-10.');

		const cartProduct = {
			productId: product.id,
			colorId: color,
			amount: amount,
			sizeId: size
		};

		const existing = $cart.find(
			(x) =>
				x.productId == cartProduct.productId &&
				x.colorId == cartProduct.colorId &&
				x.sizeId == cartProduct.sizeId
		);

		if (existing != undefined) {
			existing.amount += amount;
		}else{
			$cart.push(cartProduct)
		}

		cart.set($cart);

		toggleModal();
	};
</script>

<div id="cartButton">
	<Button color="warning" on:click={() => goto('/shop/cart')}><i class="fa-solid fa-cart-shopping" /> Cart</Button>
</div>

<div id="backButton">
	<Button color="warning" on:click={() => goto(`/shop/category/${product.project}`)}><i class="fa-solid fa-arrow-left" /> Back</Button>
</div>

<div class="content-box">
	{#if product}
		<h1>{product.name}</h1>
		<h3 style="margin: 0;">{product.project_name}</h3>

		<img style="margin-bottom: 2rem;" id="product-preview" bind:this={imageEl} alt={product.name} />

		<FormGroup>
			<Label for="color">Color</Label>
			<Input type="select" id="color" bind:value={color} on:change={setImage}>
				{#each product.colors.data as color}
					<option value={color.id}>{color.color}</option>
				{/each}
			</Input>
		</FormGroup>
		<FormGroup>
			<Label for="size">Size</Label>
			<Input type="select" id="size" bind:value={size}>
				{#each product.colors.data as data}
					{#if data.id == color}
						{#each data.sizes as size}
							{#if size.is_available}
								<option value={size.id}>{size.size}</option>
							{/if}
						{/each}
					{/if}
				{/each}
			</Input>
		</FormGroup>
		<FormGroup>
			<Label for="amount">Amount</Label>
			<Input type="number" id="amount" min="1" max="10" bind:value={amount} />
		</FormGroup>

		<h4>
			{(product.price.amount * amount) / product.price.currency_factor}{product.price
				.currency_symbol}
		</h4>
		<Button color="warning" on:click={addToCart}
			><i class="fa-solid fa-cart-plus" /> Add to Cart</Button
		>
	{/if}
</div>

<Modal isOpen={modalOpen} toggle={toggleModal}>
	<ModalHeader toggle={toggleModal}>Added to cart!</ModalHeader>
	<ModalBody>The product has been sucessfully added to your cart!</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={toggleModal}
			><i class="fa-solid fa-backward" /> Keep Shopping</Button
		>
		<Button color="warning" on:click={() => goto('/shop/cart')}
			><i class="fa-solid fa-cart-shopping" /> View Cart</Button
		>
	</ModalFooter>
</Modal>

<style>
	#product-preview {
		width: 100%;
		margin-top: 2rem;
	}
</style>
