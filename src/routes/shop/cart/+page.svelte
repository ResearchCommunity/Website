<script lang="ts">
	import { cart, shopProducts } from '$lib/stores';
	import type { CartProduct } from '$lib/stores';
	import { Table, Button, Input, FormGroup, Label, Form } from 'sveltestrap';
    import {SHOP_API_HOST} from '$lib/constants'
	import { goto } from '$app/navigation';

	let price: any

    let name = ''
    let street = ''
    let city = ''
    let postcode = ''
    let country = ''
    let email = ''

	const remove = (cartProduct: CartProduct) => {
		$cart.splice($cart.indexOf(cartProduct), 1);
		cart.set($cart);
	};

	const changeAmount = (product: CartProduct, amount: number, element: HTMLInputElement) => {
        amount = ~~amount
		if (isNaN(amount) || amount < 1 || amount > 10) {
			element.value = $cart[$cart.indexOf(product)].amount.toString();
			return;
		}else{
            element.value = amount.toString()
        }
		$cart[$cart.indexOf(product)].amount = amount;
		cart.set($cart);
	};

    const calcPrice = () => {
        fetch(SHOP_API_HOST + '/calcprice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cart: $cart,
                address: {
                    name: name,
                    street: street,
                    city: city,
                    postcode: postcode,
                    country: country
                }
            })
        }).then(async res => {
            if(res.status == 200){
                price = await res.json()
                console.dir(price)
            }else{
                alert((await res.json()).error)
            }
        })
    }

</script>

<div class="content-box">
    <h1>Your Cart</h1>
	<Table dark>
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>Size</th>
				<th>Amount</th>
				<th>Price</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each $cart as cartProduct}
				{@const product = $shopProducts.find((x) => x.id == cartProduct.productId)}
				{#if product}
					<tr>
					<td>
						{(/*@ts-ignore*/ '')}
						<img
							src={product.images.find((x) => x.color_id == cartProduct.colorId).urls.small}
							alt="Preview"
						/>
					</td>
					<td>
						{product.name}<br />
						{product.project_name}
					</td>
					<td>
						{(/*@ts-ignore*/ '')}
						{product.colors.data.find((x) => x.id == cartProduct.colorId).sizes.find((x) => x.id == cartProduct.sizeId).size}
					</td>
					<td>
						{(/*@ts-ignore*/ '')}
						<Input
							type="number"
							min="1"
							max="10"
							value={cartProduct.amount}
							on:change={(e) => changeAmount(cartProduct, e.target.value, e.target)}
						/>
					</td>
					<td>
                        {((product.price.amount * cartProduct.amount) / product.price.currency_factor).toFixed(2)}{product.price.currency_symbol}
                    </td>
					<td>
						<Button color="danger" on:click={() => remove(cartProduct)}
							><i class="fa-solid fa-trash" /></Button
						>
					</td>
				</tr>
				{/if}
			{/each}
		</tbody>
	</Table>

    
	<Button color="warning" on:click={() => goto('/shop/cart/checkout')}>Checkout</Button>

	
</div>

<style>
	td img {
		width: 4rem;
	}
</style>
