<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="bg-brand-dark text-white sticky top-0 z-50 shadow-md">
	<div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
		<!-- 🧩 Left side: logo + name -->
		<a href="/" class="flex items-center gap-3 group">
			<img
				src="/images/logo.png"
				alt="Muhammad Hassan Ali Logo"
				class="w-10 h-10 rounded-full border border-brand-orange transition-transform duration-300 group-hover:scale-105"
			/>
			<h1 class="text-lg font-bold text-brand-orange group-hover:text-orange-400 transition-colors duration-300">
				Muhammad&nbsp;Hassan&nbsp;Ali
			</h1>
		</a>

		<!-- 🧭 Navigation links -->
		<div class="flex gap-6 text-sm md:text-base">
			{#each [
				{ href: '/', label: 'Home' },
				{ href: '/about', label: 'About' },
				{ href: '/projects', label: 'Projects' }
			] as link}
				<a
					href={link.href}
					class="relative font-medium transition-all
					{($page.url.pathname === link.href)
						? 'text-brand-orange after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange'
						: 'text-gray-300 hover:text-brand-orange'}"
				>
					{link.label}
				</a>
			{/each}

			<!-- 🧾 CV button -->
			<a
				href="/cv/Muhammad_Hassan_Ali_CV.pdf"
				download="Muhammad_Hassan_Ali_CV.pdf"
				target="_blank"
				class="relative font-medium text-gray-300 hover:text-brand-orange transition-all"
			>
				Download CV
			</a>
		</div>
	</div>
</nav>
