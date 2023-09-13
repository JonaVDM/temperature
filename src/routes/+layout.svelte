<script>
	import { theme } from '$lib/theme';
	import '../app.css';

	function updateTheme() {
		const current = $theme;
		if (current == 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}
	}
</script>

<button on:click={updateTheme} class="absolute top-10 left-10">Toggle theme</button>
<div class="h-screen w-screen flex justify-center items-center">
	<slot />
</div>
