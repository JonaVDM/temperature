<script lang="ts">
	export let time: number;
	export let temperature: number;

	function formatTime() {
		const date = new Date(time);
		const now = date.getHours();

		date.setHours(date.getHours() + 1);
		const nextHour = date.getHours();

		return `${now}:00 - ${nextHour}:00`;
	}
</script>

<div class="">
	<p class="font-extralight text-sm">
		{formatTime()}
	</p>

	<p class="text-2xl font-thin">
		{temperature}°C
	</p>
</div>
