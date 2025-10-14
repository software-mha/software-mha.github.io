<script lang="ts">
	type Role = {
		company: string;
		position: string;
		period: string;
		description: string;
	};

	type Skill = string;

	let roles: Role[] = [
		{
			company: "ThreeDee",
			position: "Principal Software Developer",
			period: "2023 – 2025",
			description:
				"Leading immersive 3D UX development using Three.js and WebGL, managing backend integrations, mentoring developers, and optimizing pipelines for high-performance 3D apps."
		},
		{
			company: "Virtual Days",
			position: "Lead Software Developer",
			period: "2022 – 2023",
			description:
				"Developed virtual event environments and interactive 3D exhibition platforms with PlayCanvas and Node.js backends."
		},
		{
			company: "GenITeam Solutions",
			position: "Senior → Junior Software Developer",
			period: "2020 – 2022",
			description:
				"Built multiplayer and single-player HTML5 products using PlayCanvas and Phaser, integrated APIs, and led small teams to deliver production-quality experiences."
		},
		{
			company: "Freelance",
			position: "3D Web Developer",
			period: "2020 – Present",
			description:
				"Designed and developed WebGL, Three.js, and PlayCanvas-based projects for clients in Pakistan and Europe, including configurators and 3D platforms."
		},
		{
			company: "Fauji Fertilizer Company",
			position: "Frontend Developer Intern",
			period: "2019",
			description:
				"Developed React.js interfaces and integrated REST APIs, improving frontend performance and responsiveness for internal applications."
		}
	];

	let skills: Skill[] = [
		"Three.js",
		"PlayCanvas",
		"Phaser",
		"Cocos",
		"WebGL",
		"Node.js",
		"Express",
		"Firebase",
		"MongoDB",
		"React",
		"Photon",
		"Colyseus",
		"Git",
		"SVN"
	];
</script>

<main class="max-w-5xl mx-auto px-6 py-20 text-center">
	<h1 class="text-4xl font-bold text-brand-orange mb-10">About Me</h1>

	<p class="text-lg text-gray-300 mb-10 leading-relaxed">
		I'm <strong>Muhammad Hassan Ali</strong>, a 3D Web Developer with over six years of experience
		creating interactive and real-time applications using
		<strong>Three.js</strong>, <strong>PlayCanvas</strong>, and <strong>WebGL</strong>.
		My focus is on building high-performance, visually engaging 3D experiences that blend creativity with engineering precision.
	</p>

	<h2 class="text-2xl font-semibold text-brand-orange mb-8">Professional Experience</h2>

	<div class="grid sm:grid-cols-2 gap-6 mb-16 text-left">
		{#each roles as role}
			<div
				class="p-6 bg-black/40 border border-gray-800 rounded-xl hover:shadow-orange-600/30 transition-shadow duration-300"
			>
				<h3 class="text-xl font-semibold text-brand-orange mb-1">{role.company}</h3>
				<p class="text-gray-300 font-medium mb-1">{role.position}</p>
				<p class="text-gray-500 text-sm mb-3">{role.period}</p>
				<p class="text-gray-400 text-sm leading-relaxed">{role.description}</p>
			</div>
		{/each}
	</div>

	<h2 class="text-2xl font-semibold text-brand-orange mb-6">Technical Skills</h2>

	<div class="flex flex-wrap justify-center gap-3">
		{#each skills as skill}
			<span
				class="bg-orange-900/40 text-orange-300 text-sm px-4 py-2 rounded-md font-medium"
			>
				{skill}
			</span>
		{/each}
	</div>
</main>
