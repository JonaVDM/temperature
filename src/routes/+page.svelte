<script lang="ts">
	import { pb } from '$lib/pocketbase.js';
	import type { RecordSubscription } from 'pocketbase';
	import type { ClimateRecord } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';

	export let data;
	let entry: ClimateRecord;

	onMount(() => {
		entry = data.current.items[0];
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

	$: temp = entry ? entry.temperature : '';
	$: date = entry ? new Date(entry.created) : new Date();
</script>

<p>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
<p class="text-6xl md:text-8xl lg:text-9xl">{temp}°C</p>
