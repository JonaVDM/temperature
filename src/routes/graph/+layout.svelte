<script>
	import ButtonLink from '$lib/ButtonLink.svelte';
</script>

<div class="w-[90vw] h-[80vh]">
	<div class="md:flex justify-between">
		<ButtonLink to="/" title="Back to overview" />
		<div class="md:flex gap-2">
			<ButtonLink to="/graph" title="24h" />
			<ButtonLink to="/graph/daily" title="Daily" />
			<ButtonLink to="/graph/weekly" title="Weekly" />
			<ButtonLink to="/graph/monthly" title="Monthly" />
		</div>
	</div>

	<slot />
</div>
