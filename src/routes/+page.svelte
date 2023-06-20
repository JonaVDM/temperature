<script lang="ts">
	import { pb } from '$lib/pocketbase.js';
	import type { RecordSubscription } from 'pocketbase';
	import type { ClimateRecord } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	import HourCard from './HourCard.svelte';
	import ButtonLink from '$lib/ButtonLink.svelte';

	export let data;
	let entry: ClimateRecord | null;

	onMount(() => {
		pb.collection('climate').subscribe('*', onUpdate);
	});

	onDestroy(() => {
		pb.collection('climate').unsubscribe('*');
	});

	function onUpdate(data: RecordSubscription<ClimateRecord>) {
		if (data.action != 'create') {
			return;
		}

		entry = data.record;
	}

	$: temp = entry ? entry.temperature : data.weather.latest.temperature;
	$: date = entry ? new Date(entry.created) : new Date(data.weather.latest.created);
</script>

<div>
	<p>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
	<p class="text-7xl md:text-8xl lg:text-9xl text-center">{temp}°C</p>

	<div class="pt-4 flex flex-col gap-3">
		{#each Object.entries(data.weather.perHour) as [key, value]}
			<HourCard time={Number(key)} temperature={value} />
		{/each}
	</div>

	<ButtonLink to="/graph" title="Show Graph" />
</div>
