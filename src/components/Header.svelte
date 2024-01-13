<script>
	import Logo from '@/components/Logo.svelte';
	import Export from '@/components/Export.svelte';
	import Language from '@/components/Language.svelte';
</script>

<header
	class="grid grid-cols-[1fr,auto,1fr] sm:grid-cols-3 grid-areas-[header-left_header-center_header-right] place-items-center w-full h-fit sm:h-14"
>
	<Logo
		className={'w-auto max-sm:h-9 grid-in-[header-left] md:grid-in-[header-center] justify-self-start sm:justify-self-center'}
	/>
	<div class="flex grid-in-[header-right] justify-self-end gap-2">
		<Language />
		<Export />
	</div>
</header>
