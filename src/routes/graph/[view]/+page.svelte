<script lang="ts">
	import { Chart } from 'chart.js/auto';

	export let data;

	function chartAction(container: HTMLCanvasElement) {
		const ctx = container.getContext('2d');
		if (!ctx) {
			return;
		}

		const labels = data.data.items.map((el) => {
			return el.id;
		});

		const min = data.data.items.map((el) => {
			return el.min;
		});

		const avg = data.data.items.map((el) => {
			return el.avg;
		});

		const max = data.data.items.map((el) => {
			return el.max;
		});

		new Chart(ctx, {
			type: 'line',
			data: {
				labels,
				datasets: [
					{
						data: min,
						label: 'Min'
					},
					{
						data: max,
						label: 'Max'
					},
					{
						data: avg,
						label: 'Avg'
					}
				]
			},
			options: {
				maintainAspectRatio: false
			}
		});
	}
</script>

{#key data.data.items[0].collectionId}
	<canvas use:chartAction />
{/key}
