<script lang="ts">
	export let data;

	$: temp = data.current.items[0].temperature;
	$: date = new Date(data.current.items[0].created);
</script>

<p>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
<p class="text-6xl md:text-8xl lg:text-9xl">{temp}°C</p>
