<script lang="ts">
  import { onMount } from "svelte";

  const splashes = [
    "Research Together",
    "Boof It!",
    "Drugs are bad, m'kay?",
    "Hated by the DEA",
    "You know it's working when everything feels wrong!",
    "Ya like Jazz?",
    "In Memory of Lizard Labs",
    "Test your stuff. Seriously.",
    "Unscheduled and underfunded!",
    "Smarter than your dealer",
    "Warning: Contains vibes",
    "Shhh... it's for research",
    "Oops, all tryptamines!",
    "Proudly flagged by customs",
    "Only slightly cursed",
    "This is not legal advice",
    "Not even once... unless you documented it",
    "Show some love for Jessi Waters!",
    "Chemistry is just spicy baking",
    "Please do not snort the website",
    "Definitely not a front",
    "My pineal gland has Bluetooth now"
  ];

  let splashIndex = 0;
  let splashElement: HTMLHeadingElement;

  let logoElement: HTMLImageElement

  const animateCSS = (
    element: HTMLElement,
    animation: string,
    prefix = "animate__",
  ) =>
    new Promise((resolve) => {
      const animationName = `${prefix}${animation}`;

      element.classList.add(`${prefix}animated`, animationName);

      function handleAnimationEnd(event: any) {
        event.stopPropagation();
        element.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }

      element.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
    });

  onMount(() => {
    setInterval(async () => {
      await animateCSS(splashElement, "flipOutX");
      if (splashIndex + 1 > splashes.length - 1) {
        splashIndex = 0;
      } else {
        splashIndex += 1;
      }
      animateCSS(splashElement, "flipInX");
    }, 3 * 1000);
  });
</script>

<div id="header" class="section">
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <img src="/logo.png" alt="Logo" bind:this={logoElement} on:mouseover={() => {animateCSS(logoElement, 'shakeX')}} />
  <h1 class="h1">
    <span
      class="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone"
      >Research Community</span
    >
  </h1>
  <h2 class="h2" id="splash" bind:this={splashElement}>
    <span
      class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
    >
      {splashes[splashIndex]}
    </span>
  </h2>
</div>

<div id="about" class="section">
  <h2 class="h2">About</h2>
  <hr />
  <h3 class="h3">
    We're an online community for anyone interested in psychoactive substances
    of all sorts!
  </h3>

  <a href="https://join.research-community.org" target="_blank">
    <button class="btn variant-filled-surface" style="margin-top: 1rem;">
      <i class="fa-brands fa-discord"></i> &nbsp; Discord
    </button>
  </a>

  <a href="https://forum.research-community.org" target="_blank">
    <button class="btn variant-filled-surface" style="margin-left: 1rem;">
      <i class="fa-regular fa-rectangle-list"></i> &nbsp; Forum
    </button>
  </a>
</div>

<!-- <div id="support" class="section">
  <h2 class="h2">Become a Supporter</h2>
  <hr />
  <h3 class="h3">
    Financially support the server and get a fancy role in return!
  </h3>
  <a href="/support">
    <button class="btn variant-filled-surface" style="margin-top: 1rem;">
      <i class="fa-solid fa-star"></i> &nbsp; Support
    </button>
  </a>
</div> -->

<style>
  #header {
    margin-top: 10rem;
  }

  #header img {
    display: inline-block;
    border-radius: 25px;
    width: 10rem;
    margin-bottom: 1rem;
  }

  #header h1 {
    font-weight: bold;
  }
</style>
