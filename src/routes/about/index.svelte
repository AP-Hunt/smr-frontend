<svelte:head>
  <title>About - SMR</title>
</svelte:head>

<script>
  import {base} from "$app/paths";
</script>

<h1>About</h1>

<a href="{base}/api-docs">
  <h2>API Docs</h2>
</a>

<a href="{base}/privacy-policy">
  <h2>Privacy Policy</h2>
</a>

<a href="{base}/tos">
  <h2>Terms of Service</h2>
</a>

<style lang="postcss">
  h1 {
    @apply text-4xl my-4 font-bold;
  }

  h2 {
    @apply text-3xl my-4 font-bold;
  }

  a {
    @apply underline text-yellow-500
  }
</style>
