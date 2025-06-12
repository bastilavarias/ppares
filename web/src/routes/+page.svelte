<script lang="ts">
</script>

<header class="border-b border-gray-100 bg-white px-6 py-4 shadow-sm md:px-8 lg:px-12">
	<nav class="container mx-auto flex items-center justify-between">
		<div class="text-2xl font-bold text-gray-800">
			Svelte<span class="text-blue-600">-Shadcn</span> Bootcamp
		</div>
		<ul class="hidden space-x-8 text-sm font-medium md:flex">
			<li>
				<a href="#overview" class="text-gray-600 transition-colors duration-200 hover:text-blue-600"
					>Overview</a
				>
			</li>
			<li>
				<a
					href="#curriculum"
					class="text-gray-600 transition-colors duration-200 hover:text-blue-600">Curriculum</a
				>
			</li>
			<li>
				<a
					href="#testimonials"
					class="text-gray-600 transition-colors duration-200 hover:text-blue-600">Testimonials</a
				>
			</li>
			<li>
				<a href="#enroll" class="text-gray-600 transition-colors duration-200 hover:text-blue-600"
					>Enroll</a
				>
			</li>
		</ul>
		<a
			href="#enroll"
			class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700 md:hidden"
			>Join Now</a
		>
	</nav>
</header>

<!-- Hero Section -->
<section class="relative overflow-hidden border-b border-gray-100 bg-white px-6 py-20 text-center">
	<div class="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
	<div class="relative z-10 container mx-auto max-w-5xl">
		<h1
			class="animate-subtle-pulse mb-6 text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl lg:text-7xl"
		>
			Build Fast, Beautiful Web Apps with <br /><span class="text-blue-600">Svelte & Shadcn UI</span
			>
		</h1>
		<p class="mx-auto mb-10 max-w-3xl text-lg text-gray-700 sm:text-xl">
			Dive deep into modern web development. Learn SvelteKit and craft exceptional user interfaces
			with Shadcn UI, becoming a highly sought-after full-stack developer.
		</p>
		<a
			href="#enroll"
			class="inline-block transform rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
		>
			Start Your Journey Today
		</a>
	</div>
</section>

<!-- Bootcamp Highlights Section (Inspired by Dashboard Stat Cards) -->
<section id="overview" class="container mx-auto px-6 py-16">
	<h2 class="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
		Bootcamp Highlights
	</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
		<!-- Highlight Card 1 -->
		<div
			class="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<p class="mb-2 text-sm font-medium text-gray-500">Graduates Hired</p>
			<div class="flex items-end justify-between">
				<span class="text-4xl font-extrabold text-gray-900">95%</span>
				<span class="flex items-center text-sm text-green-500">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						></path></svg
					>
					+5%
				</span>
			</div>
			<p class="mt-2 text-xs text-gray-400">Placed within 6 months</p>
		</div>
		<!-- Highlight Card 2 -->
		<div
			class="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<p class="mb-2 text-sm font-medium text-gray-500">Projects Built</p>
			<div class="flex items-end justify-between">
				<span class="text-4xl font-extrabold text-gray-900">12+</span>
				<span class="flex items-center text-sm text-green-500">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						></path></svg
					>
					New Portfolio
				</span>
			</div>
			<p class="mt-2 text-xs text-gray-400">Ready for your resume</p>
		</div>
		<!-- Highlight Card 3 -->
		<div
			class="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<p class="mb-2 text-sm font-medium text-gray-500">Expert Instructors</p>
			<div class="flex items-end justify-between">
				<span class="text-4xl font-extrabold text-gray-900">4</span>
				<span class="flex items-center text-sm text-blue-500">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path></svg
					>
					Years Exp.
				</span>
			</div>
			<p class="mt-2 text-xs text-gray-400">Average industry experience</p>
		</div>
		<!-- Highlight Card 4 -->
		<div
			class="rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<p class="mb-2 text-sm font-medium text-gray-500">Live Sessions</p>
			<div class="flex items-end justify-between">
				<span class="text-4xl font-extrabold text-gray-900">3x</span>
				<span class="flex items-center text-sm text-green-500">
					<svg
						class="mr-1 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						></path></svg
					>
					Weekly
				</span>
			</div>
			<p class="mt-2 text-xs text-gray-400">Interactive coding and Q&A</p>
		</div>
	</div>
</section>

<!-- Curriculum Section (Renamed from Features for clarity) -->
<section id="curriculum" class="container mx-auto px-6 py-16">
	<h2 class="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">What You'll Master</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		<!-- Curriculum Card 1: Svelte Fundamentals -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">⚛️</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">Svelte Fundamentals</h3>
			<p class="text-center text-gray-600">
				Understand reactivity, components, lifecycle, and templating for efficient UIs.
			</p>
		</div>
		<!-- Curriculum Card 2: SvelteKit Development -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">📦</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">SvelteKit Ecosystem</h3>
			<p class="text-center text-gray-600">
				Build full-stack applications with routing, server-side rendering, and API routes.
			</p>
		</div>
		<!-- Curriculum Card 3: Shadcn UI Integration -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">✨</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">Shadcn UI Mastery</h3>
			<p class="text-center text-gray-600">
				Integrate, customize, and extend beautiful, accessible UI components with ease.
			</p>
		</div>
		<!-- Curriculum Card 4: State Management -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">🔄</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">Advanced State & Stores</h3>
			<p class="text-center text-gray-600">
				Manage complex application state using Svelte stores and patterns.
			</p>
		</div>
		<!-- Curriculum Card 5: API Integration -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">🌐</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">
				Backend & API Connections
			</h3>
			<p class="text-center text-gray-600">
				Connect your SvelteKit apps to various backend services and APIs.
			</p>
		</div>
		<!-- Curriculum Card 6: Deployment & Best Practices -->
		<div
			class="transform rounded-lg border border-gray-100 bg-white p-8 shadow-md transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-4 text-center text-5xl text-blue-600">📈</div>
			<h3 class="mb-3 text-center text-xl font-semibold text-gray-800">
				Deployment & Optimization
			</h3>
			<p class="text-center text-gray-600">
				Deploy your SvelteKit applications and optimize for performance.
			</p>
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section id="testimonials" class="bg-gray-50 px-6 py-16">
	<div class="container mx-auto">
		<h2 class="mb-12 text-center text-3xl font-bold text-gray-800 sm:text-4xl">
			What Our Grads Say
		</h2>
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Testimonial 1 -->
			<div class="rounded-lg border border-gray-100 bg-white p-8 shadow-md">
				<p class="mb-4 text-lg leading-relaxed text-gray-700 italic">
					"This bootcamp was a game-changer! I went from a beginner to building complex SvelteKit
					apps with beautiful Shadcn UI components in just a few weeks. The instructors were amazing
					and always available for support."
				</p>
				<div class="mt-6 flex items-center">
					<img
						src="https://placehold.co/64x64/E0E7FF/4F46E5?text=AJ"
						alt="Avatar of Alex J."
						class="mr-4 h-12 w-12 rounded-full border border-gray-200 shadow-sm"
					/>
					<div>
						<p class="font-semibold text-gray-800">Alex J.</p>
						<p class="text-sm text-gray-500">Frontend Developer @ Tech Solutions</p>
					</div>
				</div>
			</div>
			<!-- Testimonial 2 -->
			<div class="rounded-lg border border-gray-100 bg-white p-8 shadow-md">
				<p class="mb-4 text-lg leading-relaxed text-gray-700 italic">
					"The focus on both Svelte and Shadcn was perfect. I finally feel confident creating
					modern, performant, and visually appealing web applications. The hands-on projects were
					invaluable. Highly recommend!"
				</p>
				<div class="mt-6 flex items-center">
					<img
						src="https://placehold.co/64x64/FCE7F3/BE185D?text=SM"
						alt="Avatar of Sarah M."
						class="mr-4 h-12 w-12 rounded-full border border-gray-200 shadow-sm"
					/>
					<div>
						<p class="font-semibold text-gray-800">Sarah M.</p>
						<p class="text-sm text-gray-500">UI/UX Designer @ Innovate Corp</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action / Enrollment Section -->
<section
	id="enroll"
	class="mx-auto mt-16 max-w-6xl rounded-lg bg-blue-700 px-6 py-20 text-center text-white shadow-lg"
>
	<div class="container mx-auto max-w-3xl">
		<h2 class="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">Ready to Transform Your Skills?</h2>
		<p class="mb-10 text-lg leading-relaxed opacity-90 sm:text-xl">
			Enroll in our Svelte-Shadcn Coding Bootcamp and start your journey to becoming a proficient
			web developer. Limited spots available, secure yours today!
		</p>
		<a
			href="#"
			class="inline-block transform rounded-lg bg-white px-10 py-4 font-bold text-blue-700 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none"
		>
			Enroll Now!
		</a>
	</div>
</section>

<!-- Footer -->
<footer class="mt-16 bg-gray-800 px-6 py-8 text-center text-gray-300">
	<div class="container mx-auto">
		<p class="text-sm">&copy; 2025 Svelte-Shadcn Bootcamp. All rights reserved.</p>
		<div class="mt-4 flex justify-center space-x-6 text-sm">
			<a href="#" class="transition-colors duration-200 hover:text-white">Privacy Policy</a>
			<a href="#" class="transition-colors duration-200 hover:text-white">Terms of Service</a>
		</div>
	</div>
</footer>
