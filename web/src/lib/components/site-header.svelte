<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { page } from '$app/stores'; // Import the SvelteKit page store

	$: currentPathname = $page.url.pathname;

	const navs = [
		{
			title: 'Learning Center',
			url: '/dashboard'
		},
		{
			title: 'Community',
			url: '/community'
		}
	];
</script>

<header
	class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
>
	<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
		<Sidebar.Trigger class="-ml-1" />
		<Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
		<h1 class="text-base font-medium">Page Title</h1>
		<div class="ml-auto flex items-center gap-2">
			{#each navs as nav (nav.title)}
				<Button
					href={nav.url}
					variant="ghost"
					size="sm"
					class="hidden sm:flex {currentPathname === nav.url ? 'underline' : ''}"
					rel="noopener noreferrer"
				>
					{nav.title}
				</Button>
			{/each}
		</div>
	</div>
</header>
