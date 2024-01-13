<script>
	import svelteIcon from '@/assets/images/icons/svelte.svg';
</script>

<h1
	class="flex items-center justify-center gap-1.5 lg:fixed bottom-0 right-0 font-fuzzy text-md xs:text-xl font-bold text-center lg:mr-6 [&_span]:text-zinc-700 pb-6"
>
	<span>{'Created with'}</span>
	<a href="https://svelte.dev" target="_blank" class="hover:scale-110 transition-all duration-100">
		<img class="w-5 mb-0.5" src={svelteIcon} alt="Svelte Icon" />
	</a>
	<span>{'by'}</span>
	<a
		href="https://dzngusta.com"
		target="_blank"
		class={'text-dzngusta-brand hover:scale-105 transition-all duration-100'}
	>
		{'DznGusta'}
	</a>
</h1>
