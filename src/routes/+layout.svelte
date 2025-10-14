<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Muhammad Hassan Ali | 3D Web Developer Portfolio</title>
	<meta
		name="description"
		content="Portfolio of Muhammad Hassan Ali — 3D Web Developer specializing in Three.js, PlayCanvas, and immersive web experiences."
	/>

	<link rel="icon" href="/favicon.png" type="image/png" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-brand-dark text-white">
	<Navbar />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
