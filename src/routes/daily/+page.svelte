<script lang="ts">
	import { Chart } from 'chart.js/auto';

	export let data;

	function chartAction(container: HTMLCanvasElement) {
		const ctx = container.getContext('2d');
		if (!ctx) {
			return;
		}

		const labels = data.data.items.map((el) => {
			return el.day;
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
			}
		});
	}
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<canvas use:chartAction />
