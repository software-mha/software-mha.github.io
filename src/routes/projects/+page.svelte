<script lang="ts">
	type Project = {
		title: string;
		company: string;
		description: string;
		tech: string[];
	};

	let projects: Project[] = [
		{
			title: "Aspire",
			company: "Freelance",
			description:
				"Developed a 3D window configurator integrated with Revit for architectural design. Built using PlayCanvas and Nuxt.js, with a Node.js backend and a Windows server to export and download windows in Revit format.",
			tech: ["PlayCanvas", "Nuxt.js", "Node.js"]
		},
		{
			title: "Car Configurator",
			company: "Freelance",
			description:
				"Created an interactive car configurator using Three.js, allowing users to visualize and customize car models in real time directly within the browser.",
			tech: ["Three.js", "WebGL"]
		},
		{
			title: "Car Endless Game",
			company: "Freelance",
			description:
				"Built a 3D endless car runner game using PlayCanvas, featuring responsive controls and optimized WebGL performance for smooth browser-based gameplay.",
			tech: ["PlayCanvas", "WebGL", "JavaScript"]
		},
		{
			title: "Custom Room Configurator",
			company: "ThreeDee",
			description:
				"Developed a room configurator that lets users design spaces by placing furniture and decor items. Built with Three.js and connected to Firebase for real-time data storage and user configurations.",
			tech: ["Three.js", "Firebase"]
		},
		{
			title: "Virtual Days",
			company: "Virtual Days",
			description:
				"Contributed to a virtual event platform for hosting interactive online conferences and exhibitions. Developed with PlayCanvas and SQL backend, enabling real-time 3D environments and global audience engagement.",
			tech: ["PlayCanvas", "SQL", "Node.js"]
		},
		{
			title: "Empire",
			company: "GeniTeam",
			description:
				"Developed a team-based business simulation game for decision-making and strategic learning. Built with Cocos, featuring analytical dashboards powered by a React and Node.js backend with Firebase integration.",
			tech: ["Cocos", "React", "Node.js", "Firebase"]
		},
		{
			title: "Advance",
			company: "GeniTeam",
			description:
				"Created a business learning and strategy game focused on decision flow and performance analysis. Developed using Phaser, with a React + Node.js backend and Firebase for data management and progress tracking.",
			tech: ["Phaser", "React", "Node.js", "Firebase"]
		},
		{
			title: "Musee",
			company: "GeniTeam",
			description:
				"Developed Musee, a 3D virtual museum for showcasing NFTs and 3D models. Integrated MetaMask login and user-generated virtual showrooms, built with PlayCanvas and WebGL for interactive real-time rendering.",
			tech: ["PlayCanvas", "WebGL", "Blockchain", "MetaMask"]
		}
	];
</script>

<main class="mx-auto max-w-6xl px-6 py-20">
	<h1 class="mb-10 text-center text-4xl font-bold text-brand-orange">Projects</h1>

	<div class="grid gap-8 md:grid-cols-2">
		{#each projects as project}
			<div
				class="rounded-2xl border border-gray-800 bg-black/40 p-6 shadow-sm transition-shadow duration-300 hover:shadow-orange-600/30"
			>
				<h2 class="mb-2 text-2xl font-semibold text-brand-orange">{project.title}</h2>
				<p class="mb-4 text-gray-300">{project.description}</p>
				<div class="flex flex-wrap gap-2">
					{#each project.tech as t}
						<span class="rounded-md bg-orange-900/40 px-4 py-1 text-sm font-medium text-orange-300">
							{t}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>
