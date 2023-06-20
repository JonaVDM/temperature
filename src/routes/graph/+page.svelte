<script lang="ts">
	export let data;
	import ButtonLink from '$lib/ButtonLink.svelte';
	import { Chart } from 'chart.js/auto';

	function chartAction(container: HTMLCanvasElement) {
		const ctx = container.getContext('2d');

		if (!ctx) {
			return;
		}

		const labels = Object.keys(data.weather)
			.map((v) => {
				const d = new Date(Number(v));
				return `${d.getHours()}:00`;
			})
			.reverse();
		const temps = Object.values(data.weather).reverse();

		new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						data: temps,
						label: 'Temperature'
					}
				]
			}
		});
	}
</script>

<div class="container">
	<div class="max-w-md">
		<ButtonLink to="/" title="Back to overview" />
	</div>
	<canvas use:chartAction />
</div>
