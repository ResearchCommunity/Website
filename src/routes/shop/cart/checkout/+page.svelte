<script lang="ts">
	import { cart } from '$lib/stores';
	import { Table, Button, Input, FormGroup, Label, Form } from 'sveltestrap';
    import {SHOP_API_HOST} from '$lib/constants'
	import {countries} from 'country-data'
	import { goto } from '$app/navigation';

	let price: any

    let name = ''
    let street = ''
    let city = ''
    let postcode = ''
    let country = 'GB'
    let email = ''

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

    const placeOrder = () => {
        fetch(SHOP_API_HOST + '/create_order', {
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
                },
                price: price,
                email: email
            })
        }).then(async res => {
            if(res.status == 200){
                const data = await res.json()
                cart.set([])
                goto('/shop/cart/confirmation/' + data.id)
            }else{
                alert((await res.json()).error)
            }
        })
    }

</script>

<div class="content-box">
    
	<h1>Where should it go?</h1>
    <Form on:submit={e => {e.preventDefault();calcPrice()}}>
        <FormGroup>
			<Label for="name">Name & Surname</Label>
			<Input required type="text" placeholder="The Doctor" id="name" bind:value={name} />
	    </FormGroup>
        <FormGroup>
			<Label for="street">Street & Number</Label>
			<Input required type="text" placeholder="76 Totter's Lane" id="street" bind:value={street} />
	    </FormGroup>
        <FormGroup>
			<Label for="postcode">Post Code / ZIP</Label>
			<Input required type="text" placeholder="SW1Y 4NQ" id="postcode" bind:value={postcode} />
	    </FormGroup>
        <FormGroup>
			<Label for="city">City</Label>
			<Input required type="text" placeholder="London" id="city" bind:value={city} />
	    </FormGroup>
        <FormGroup>
			<Label for="country">Country</Label>
			<Input required type="select" id="country" bind:value={country} >
				{(/*@ts-ignore*/ '')}
				{#each countries.all.sort((a, b) => {return a.name > b.name}).filter(x => x.status == 'assigned') as country}
					<option value={country.alpha2}>{country.name}</option>
				{/each}
			</Input>
	    </FormGroup>
        <FormGroup>
			<Label for="email">E-Mail for notifications - optional</Label>
			<Input type="email" placeholder="doctor@tardis.space" id="email" bind:value={email} />
	    </FormGroup>
        <Button type="submit" color="warning"><i class="fa-solid fa-calculator"></i> Calculate Price</Button>
    </Form>


	{#if price}
		<h1 style="margin-top: 2rem;">Price</h1>
		<Table dark>
			<tbody>
				<tr>
					<td>Net Price</td>
					<td>{(price.products_net_price.amount / price.products_net_price.currency_factor).toFixed(2)}{price.products_net_price.currency_symbol}</td>
				</tr>
				<tr>
					<td>Shipping</td>
					<td>{(price.shipping_net_price.amount / price.shipping_net_price.currency_factor).toFixed(2)}{price.shipping_net_price.currency_symbol}</td>
				</tr>
				<tr>
					<td>VAT (19%)</td>
					<td>{((price.total_gross_price.amount - price.total_net_price.amount) / price.products_net_price.currency_factor).toFixed(2)}{price.products_net_price.currency_symbol}</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>{(price.total_gross_price.amount / price.total_gross_price.currency_factor).toFixed(2)}{price.total_gross_price.currency_symbol}</td>
				</tr>
			</tbody>
		</Table>

		<Button color='warning' on:click={placeOrder}>Place Order for {(price.total_gross_price.amount / price.total_gross_price.currency_factor).toFixed(2)}{price.total_gross_price.currency_symbol}</Button>
	{/if}

	
</div>
