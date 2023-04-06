<script lang="ts">
	export let data: any;
	import { SHOP_API_HOST } from '$lib/constants';

	let order: any;

	fetch(SHOP_API_HOST + '/order?id=' + data.orderID, {
		method: 'GET'
	}).then(async (res) => {
		if (res.status == 200) {
			const data = await res.json()
			order = data;
		} else {
			alert((await res.json()).error);
		}
	});
</script>

<div class="content-box">
	{#if order}
		<h1>Success</h1>
		<p>
			Now you just need to pay, using the following bank data: <br /><br />

			<strong>Amount:</strong>
			{(
				order.price.total_gross_price.amount / order.price.total_gross_price.currency_factor
			).toFixed(2)}{order.price.total_gross_price.currency_symbol} <br />
			<strong>Name:</strong> Research Community <br />
			<strong>IBAN:</strong> DE60 5089 0000 0006 2206 06 <br />
			<strong>BIC:</strong> GENODEF1VBD <br />
			<strong>Reference:</strong>
			{order._id}
			<br><br>
			In order to reduce costs and headaches, we only offer payment via bank transfer
		</p>

		<h1>Add a Donation!</h1>
		<p>
			We don't actually make any profit with orders! Really! <br />
			All the money is used for production and shipping! <br /><br />

			You can add a donation by simply sending more than you need to. <br />
			Here's where that goes to: <br /><br />

			<strong>50% - Designer</strong> <br />
			This goes directly to the pockets of the people who designed your products! <br />
			If you have ordered multiple designs, it's fairly distributed. <br /><br />

			<strong>50% - Research Community</strong> <br />
			This goes to a money pool, which will be exclusively used for the Research Community (Server costs,
			advertising, fun projects, giveaways, etc.) and does not flow into any private pockets!
		</p>

		<h1>I've paid... Now what?</h1>
		<p>
			Here's what's happening: <br />
		</p>

		<ul>
			<li style={(order.status >= 0)?'color:green;':''}>You place the order</li>
			<li style={(order.status >= 1)?'color:green;':''}>Payment arrives</li>
			<li style={(order.status >= 2)?'color:green;':''}>Manual review of your order</li>
			<li style={(order.status >= 3)?'color:green;':''}>Order is placed with producer</li>
			<li style={(order.status >= 4)?'color:green;':''}>
				Order is shipped
				{#if order.tracking}
					( <a href={order.tracking} target="_blank" rel="noreferrer">track</a> )
				{/if}
			</li>
		</ul>

		<p>
			If you gave us your e-mail address, you will be notified on every step. <br>
			If not, just check this site when you wanna know where it's at.
		</p>

	{:else}
		<h1>Loading...</h1>
	{/if}
</div>
