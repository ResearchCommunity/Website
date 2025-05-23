<!--
 Copyright (C) 2025 xenorio <dev@xenorio.xyz>
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->

<script lang="ts">
  import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
  import { RangeSlider } from "@skeletonlabs/skeleton";
  import { loadStripe, type Stripe } from "@stripe/stripe-js";
  import { onMount } from "svelte";
  import { paymentInit as APIPaymentInit } from "$lib/api";

  let stripe: Stripe | null;

  onMount(async () => {
    stripe = await loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  });

  let paymentType = 0;
  let paymentAmount = 5;

  async function paymentInit() {
    if (!stripe) return;
    const recurring = paymentType == 1;
    const paymentUrl = await APIPaymentInit(paymentAmount, recurring);
    window.location.href = paymentUrl
  }
</script>

<div id="header" class="section">
  <h1 class="h1">Become a Supporter</h1>
</div>

<div id="benefits" class="section">
  <h3 class="h3">
    By supporting the Research Community, you get access to the following
    benefits:
  </h3>

  <div class="table-container" style="margin-bottom: 1rem;">
    <table class="table table-hover">
      <tbody>
        <tr>
          <td
            >The <span class="indicator" style="background-color: gold;"
              >@⭐ Supporter ⭐</span
            > role</td
          >
        </tr>
        <tr>
          <td
            >Exclusive <span
              class="indicator"
              style="background-color: #292929; color: white;"
              >#supporter-lounge</span
            > Channel</td
          >
        </tr>
        <tr>
          <td>Maybe more in the future (applied retroactively)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 class="h4">
    Donations are primarily used to cover hosting fees (currently at 45€/month). <br
    />
    Anything extra goes towards xenorio's weed consumption. <br /><br />

    The minimum donation amount is 5€. You can choose to pay only once or set up
    a recurring payment. Please note that recurring payments do not get you
    anything extra and are purely optional, once you are a supporter you will be
    one for life!
  </h4>
</div>

<div id="payment" class="section">
  <RadioGroup
    active="variant-filled-primary"
    hover="hover:variant-soft-primary"
  >
    <RadioItem bind:group={paymentType} name="justify" value={0}
      >One-Time</RadioItem
    >
    <RadioItem bind:group={paymentType} name="justify" value={1}
      >Monthly</RadioItem
    >
  </RadioGroup>

  <div style="margin-top: 1rem;">
    <input
      class="input"
      title="Amount"
      type="number"
      id="donation-amount"
      bind:value={paymentAmount}
      min="5"
      max="100"
    />
    €
    <RangeSlider
      name="range-slider"
      bind:value={paymentAmount}
      max={100}
      min={5}
      step={1}
      ticked
    />

    <button
      class="btn variant-filled-surface"
      style="margin-top: 1rem;"
      on:click={paymentInit}
    >
      Continue &nbsp; <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>

<style>
  .indicator {
    color: black;
    border-radius: 25px;
    padding: 5px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  table {
    width: fit-content;
    margin: 0 auto;
    margin-top: 1rem;
  }

  #donation-amount {
    width: fit-content;
  }
</style>
