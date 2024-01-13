<script>
	import Logo from '@/components/Logo.svelte';
	import Export from '@/components/Export.svelte';
	import Language from '@/components/Language.svelte';
</script>

<header
	class="grid grid-cols-[.5fr,1fr,.5fr] grid-areas-[header-left_header-center_header-right] place-items-center w-full h-14"
>
	<Logo className={'grid-in-[header-center]'} />
	<div class="flex grid-in-[header-right] justify-self-end gap-2">
		<Language />
		<Export />
	</div>
</header>
