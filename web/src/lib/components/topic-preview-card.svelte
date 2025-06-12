<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import TrendingUpIcon from '@tabler/icons-svelte/icons/circle-plus';

	let { title, description } = $props();
</script>

<Card.Root class="@container/card pt-0">
	<Card.Header>
		<Card.Title class="text-2xl font-semibold tabular-nums">{title}</Card.Title>
		<Card.Description>{description}</Card.Description>
	</Card.Header>
	<Card.Footer class="flex-col items-start gap-1.5 text-sm">
		<!--	<div class="line-clamp-1 flex gap-2 font-medium">
			Trending up this month <TrendingUpIcon class="size-4" />
		</div>
		<div class="text-muted-foreground">Visitors for the last 6 months</div>-->
	</Card.Footer>
</Card.Root>
