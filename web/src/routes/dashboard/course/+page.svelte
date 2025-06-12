<script lang="ts">
	import SearchIcon from '@tabler/icons-svelte/icons/search';
	import PlusIcon from '@tabler/icons-svelte/icons/plus';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label';
	import TopicPreviewCard from '$lib/components/topic-preview-card.svelte';

	let views = [
		{
			id: 'enrolled',
			label: 'My Courses',
			badge: 1
		},
		{
			id: 'roadmap',
			label: 'Roadmap',
			badge: 0
		}
	];

	const roadmap = {
		target: 'front-end',
		courses: [
			{
				name: 'HTML Basics',
				topics: [
					{
						title: 'HTML BASIC',
						description:
							'Lorem ipsum dolor sit amet amet amet amet consectetur adipisicing elit. Quaerat, quam.'
					},
					{
						title: 'HTML BASIC',
						description:
							'Lorem ipsum dolor sit amet amet amet amet consectetur adipisicing elit. Quaerat, quam.'
					},
					{
						title: 'HTML BASIC',
						description:
							'Lorem ipsum dolor sit amet amet amet amet consectetur adipisicing elit. Quaerat, quam.'
					}
				]
			}
		]
	};
</script>

<div class="border-border flex flex-col px-4 py-4 md:px-6 md:py-6">
	<div class="flex items-center justify-between gap-4">
		<div>
			<h1 class="text-2xl font-bold tracking-tight md:text-3xl">Courses</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, numquam?</p>
		</div>
	</div>
</div>

<div class="px-4 md:px-6">
	<Tabs.Root value="roadmap" class="w-full flex-col justify-start gap-6">
		<div class="flex items-center justify-between">
			<Label for="view-selector" class="sr-only">View</Label>
			<Tabs.List
				class="**:data-[slot=badge]:bg-muted-foreground/30 hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex"
			>
				{#each views as view (view.id)}
					<Tabs.Trigger value={view.id}>
						{view.label}
						{#if view.badge > 0}
							<Badge variant="secondary">{view.badge}</Badge>
						{/if}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</div>
		<Tabs.Content value="enrolled" class="relative flex flex-col gap-8 overflow-auto">
			<div
				class=" *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4"
			></div>
		</Tabs.Content>
		<Tabs.Content value="roadmap" class="relative flex flex-col gap-4 overflow-auto">
			{#each roadmap.courses as course (course.name)}
				<div class="flex flex-col gap-4 overflow-auto">
					<div>
						<h2 class="text-lg font-medium">{course.name}</h2>
					</div>
					<div
						class=" *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4"
					>
						{#each course.topics as topic}
							<TopicPreviewCard topic />
						{/each}
					</div>
				</div>
			{/each}
		</Tabs.Content>
	</Tabs.Root>
</div>
